import { Role } from './role.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  rolesChanged = new Subject<Role[]>();
  keys = Object.keys(sessionStorage);
  private roles: Role[] = [];

  constructor() {
    this.loadRoles();
  }
  loadRoles() {
    for (let key of this.keys) {
      this.roles.push(JSON.parse(sessionStorage.getItem(key)));
    }
  }

  getRoles() {
    return this.roles.slice();
  }

  getRole(index: number) {
    return this.roles[index];
  }

  addRoles(role: Role) {
    sessionStorage.setItem(`${this.roles.length}`, JSON.stringify(role));
    this.roles.push(role);
    this.rolesChanged.next(this.roles.slice());
  }

  clearStorage() {
    sessionStorage.clear();
    this.roles= [];
    this.rolesChanged.next(this.roles.slice());
  }
  updateRoles(index: number, newRole: Role) {
    this.roles[index] = newRole;
    sessionStorage.setItem(`${index}`, JSON.stringify(newRole));
    this.rolesChanged.next(this.roles.slice());
  }

   sortByField(field:string, sortAscend:boolean) {
      let sortOrder = 1; 
  
      sortAscend ? (sortOrder=-1, sortAscend=!sortAscend) : sortAscend=!sortAscend;
      
      this.roles.sort(function (a,b) {
          let result = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0;
          return result * sortOrder;
      })
      console.log(this.roles)
      this.rolesChanged.next(this.roles.slice());
      return sortAscend;
  }
}
