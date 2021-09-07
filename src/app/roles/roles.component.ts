import { RolesService } from './roles.service';
import { Role } from './role.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit, OnDestroy {
  roles: Role[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rolesService: RolesService
  ) {}


  ngOnInit() {
    this.subscription = this.rolesService.rolesChanged.subscribe(
      (roles: Role[]) => {
        this.roles = roles;
      }
    );
    this.roles = this.rolesService.getRoles();
    console.log(this.roles);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCreate() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onClear() {
    this.rolesService.clearStorage();
  }
}
