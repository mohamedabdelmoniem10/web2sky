import { Component, OnInit } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-pop',
  templateUrl: './review-pop.component.html',
  styleUrls: ['./review-pop.component.css']
})
export class ReviewPopComponent implements OnInit {

  constructor() { }

  popUp;
  pop() {
    this.popUp = true;
  }
  submit(p) {
    console.log(' this is p>>>>>', p)
  }

  ngOnInit() {
  }

}
