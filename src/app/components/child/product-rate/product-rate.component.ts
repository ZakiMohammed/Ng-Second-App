import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductRating } from 'src/app/models/product';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit {

  @Input('overAllRating') overAllRating: number;
  @Input('ratings') ratings: ProductRating[];

  @Output('ratingClick') ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRatingClick($event: any) {    
    this.ratingClick.emit($event.target.nextSibling);
  }

}
