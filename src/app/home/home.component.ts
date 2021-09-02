import { Component, OnInit } from '@angular/core';

import { Card } from './../card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [
    new Card(
      "Users Information",
      "Review User Profiles",
      "../../assets/img/cards/person-fill.svg"
    ),
    new Card(
      "Functional IDs",
      "Create and menage functional IDs",
      "../../assets/img/cards/credit-card-fill.svg"
    ),
    new Card(
      "Groups",
      "Create and menage groups",
      "../../assets/img/cards/grid-3x3-gap-fill.svg"
    ),
    new Card(
      "Domains",
      "Create and menage domains",
      "../../assets/img/cards/house-door-fill.svg"
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
