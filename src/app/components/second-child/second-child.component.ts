import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}


  ngOnInit(): void {
    console.log('ide');
    const asd = this.activatedRoute.snapshot.queryParamMap.getAll('secondArg');

    console.log(asd);
    this.activatedRoute.queryParams.subscribe((params) => console.log(params));
  }

  
}
