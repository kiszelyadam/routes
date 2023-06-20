import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {

  }

  /* route(): void {
    this.router.navigate(['first-child'], {relativeTo: this.activatedRoute})
  } */

}
