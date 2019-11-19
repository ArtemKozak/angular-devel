import { Component, OnInit } from '@angular/core';

import { filters } from '../filters';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  filters = filters;
  
  constructor() { }

  ngOnInit() {
  }

}