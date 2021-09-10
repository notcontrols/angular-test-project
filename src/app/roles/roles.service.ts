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

  deleteRole(index: number) {
    this.roles.splice(index, 1);
    sessionStorage.removeItem(String(index));
    this.rolesChanged.next(this.roles.slice());
  }

  addRoles(role: Role) {
    sessionStorage.setItem(`${this.roles.length}`, JSON.stringify(role));
    this.roles.push(role);
    this.rolesChanged.next(this.roles.slice());
  }

  clearStorage() {
    sessionStorage.clear();
    this.roles = [];
    this.rolesChanged.next(this.roles.slice());
  }
  updateRoles(index: number, newRole: Role) {
    this.roles[index] = newRole;
    sessionStorage.setItem(String(index), JSON.stringify(newRole));
    this.rolesChanged.next(this.roles.slice());
  }

  sortByField(field: string, sortDirection: string) {
    let sortOrder = 1;

    sortDirection === 'desc'
      ? ((sortOrder = -1), (sortDirection = 'asc'))
      : (sortDirection = 'desc');

    this.roles.sort(function (a, b) {
      let result = a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;

      return result * sortOrder;
    });
    this.rolesChanged.next(this.roles.slice());
    return sortDirection;
  }
}
