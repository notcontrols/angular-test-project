import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  ngForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.ngForm.value)
  }
}
