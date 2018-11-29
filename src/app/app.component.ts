import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '280px'
      })),
      state('out', style({
        overflow: 'hidden',
        width: '80px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent {

  isOpen: boolean;
  helpMenuOpen: string;

  constructor() {
    this.isOpen = true;
    this.helpMenuOpen = 'in';
  }

  toggleHelpMenu(): void {
    this.isOpen = !this.isOpen;
    this.helpMenuOpen = this.isOpen ? 'in' : 'out';
  }
}
