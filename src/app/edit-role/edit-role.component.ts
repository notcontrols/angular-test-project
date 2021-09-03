import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
})
export class EditRoleComponent implements OnInit {
  submitted = false;

  ngForm: FormGroup;

  get password() { return this.ngForm.get('password'); }
  get email() { return this.ngForm.get('email'); }
  get testFormControl() {
    return this.ngForm.controls;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.ngForm = new FormGroup({
      role: new FormControl('', Validators.required, this.userNameValidator),
      desc: new FormControl(''),
      phone: new FormControl('', Validators.pattern(/^\+375(25|29|33|44)[0-9]{3}[0-9]{2}[0-9]{2}$/)),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      selecttype: new FormControl('Test'),
      check: new FormControl(''),
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.ngForm.valid) { 
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.ngForm.value);
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  userNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const UserList = ['Admin', 'User', 'Superuser'];

    return new Promise<any>(resolve => {
      setTimeout(() => {
        if (UserList.indexOf( control.value ) != -1 ) {
          resolve(null);
        } else {
          resolve({ userNameNotAvailable: true });
        }
      }, 1000);
    });
  }
}
