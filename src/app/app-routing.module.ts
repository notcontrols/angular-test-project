import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditRoleComponent } from './edit-role/edit-role.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "edit", component: EditRoleComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
