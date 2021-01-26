import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  cost: boolean = false;
  cost2: boolean = false;
  cost3: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  typeCost() {
    this.cost = !this.cost;
  }
  typeCost2() {
    this.cost2 = !this.cost2;
  }
  typeCost3() {
    this.cost3 = !this.cost3;
  }

}
