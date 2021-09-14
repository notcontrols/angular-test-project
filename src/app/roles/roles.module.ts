import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { RolesComponent } from './roles.component';
import { RoleItemComponent } from './role-item/role-item.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RolesComponent,
    RoleItemComponent,
    EditRoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    RolesComponent,
    RoleItemComponent,
    EditRoleComponent,
  ]
})
export class RolesModule { }
