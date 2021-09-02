import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
})
export class EditRoleComponent implements OnInit {
  ngForm = new FormGroup({
    role: new FormControl(''),
    desc: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    selecttype: new FormControl(''),
    check: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.ngForm.value);
  }
}
