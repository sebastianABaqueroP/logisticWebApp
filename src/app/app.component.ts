import { Component } from '@angular/core';

interface shipment {
  portFrom: string;
  portTo: string;
  merchandise: string;
  price: number;
  containerType: string;
  insurance: string;
  created_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logistic-app';

  showMenuOptions: boolean = false;

  openMenu() {
    this.showMenuOptions = !this.showMenuOptions;
  }
}
