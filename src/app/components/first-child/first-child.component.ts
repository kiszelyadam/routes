import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {
  param?: number | null;
  param2?: number;
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /* this.param = this.activatedRoute.snapshot.paramMap.get('child');
    this.param2 = +this.param!;
    console.log(this.param2); */

    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.param = +params?.['child'];
    });
  }
}
