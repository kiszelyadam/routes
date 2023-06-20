import { Component } from '@angular/core';
import { Router } from '@angular/router';


enum RouteType {
  FIRST = 'first',
  SECOND = 'second'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routes';

  rt = RouteType;

  rtActive = ['red', 'background'];

  constructor(
    public readonly router: Router
  ) {}

  routingToPage(route: string, fragment?:string): void {
    this.router.navigate([route], {fragment});
  }
}
