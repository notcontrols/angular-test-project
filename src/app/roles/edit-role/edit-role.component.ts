import { RolesService } from './../roles.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
})
export class EditRoleComponent implements OnInit {
  submitted = false;
  subscription: Subscription;
  ngForm: FormGroup;
  id: number;
  editMode = false;

  get password() {
    return this.ngForm.get('password');
  }
  get email() {
    return this.ngForm.get('email');
  }
  get testFormControl() {
    return this.ngForm.controls;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(`EditMode: ${this.editMode}`);
    });

    this.ngForm = new FormGroup({
      role: new FormControl('', Validators.required),
      desc: new FormControl(''),
      phone: new FormControl(
        '',
        Validators.pattern(/^\+375(25|29|33|44)[0-9]{3}[0-9]{2}[0-9]{2}$/)
      ),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      selecttype: new FormControl('Test'),
      check: new FormControl(''),
    });
    if (this.editMode) {
      const ROLE = this.rolesService.getRole(this.id);
      this.ngForm.setValue(ROLE);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.ngForm.valid) {
      console.table(this.ngForm.value);
      if (this.editMode) {
        this.rolesService.updateRoles(this.id, this.ngForm.value);
      } else {
        this.rolesService.addRoles(this.ngForm.value);
      }
      this.onCancel();
    }
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // userNameValidator(control: FormControl): Promise<any> | Observable<any> {
  //   const UserList = ['Admin', 'User', 'Superuser'];

  //   return new Promise<any>((resolve) => {
  //     setTimeout(() => {
  //       if (UserList.indexOf(control.value) != -1) {
  //         resolve(null);
  //       } else {
  //         resolve({ userNameNotAvailable: true });
  //       }
  //     }, 1000);
  //   });
  // }
}
