import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuEvent = new EventEmitter ();
  constructor() { }

  ngOnInit() {
  }

  showMenu($event) {
    this.menuEvent.emit($event)
    console.log('event emitted');
    
  }

}
