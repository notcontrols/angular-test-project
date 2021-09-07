import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../role.model';

@Component({
  selector: 'app-role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent implements OnInit {
  @Input() role: Role;
  @Input() index: number;

  ngOnInit(): void {
  }

}
