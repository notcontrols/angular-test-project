import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolesComponent } from './roles/roles.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'roles',
    children: [
      { path: '', component: RolesComponent },
      { path: 'new', component: EditRoleComponent },
      { path: ':id', component: EditRoleComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
