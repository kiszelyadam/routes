import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements AfterViewInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngAfterViewInit(): void {
    /* console.log(this.route.snapshot.fragment);
    const asd = this.route.snapshot.fragment;
    this.route.fragment.subscribe((data)=> {
      const el = document.getElementById(data!);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }); */
  }

  routeSecond(): void {
    console.log('IDE');
    this.router.navigate(['second-child'], {relativeTo: this.route, queryParams: {secondChildrenQuery: 'asd', 'secondArg': ['asd2', 'asd3', 'asd4']}})
  }
}
