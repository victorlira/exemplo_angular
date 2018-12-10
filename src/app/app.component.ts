import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isOpen: boolean;

  constructor() {
    this.isOpen = true;
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
