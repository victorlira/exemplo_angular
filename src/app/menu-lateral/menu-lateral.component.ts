import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input()
  isOpen: boolean;

  paginaAtual: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.paginaAtual = event.url;
      }
    });
   }

  ngOnInit() {
  }

  goTo(page: string) {
    this.router.navigate([page]);
  }

  isPaginaAtual(page: string) {
    return this.paginaAtual === page;
  }
}
