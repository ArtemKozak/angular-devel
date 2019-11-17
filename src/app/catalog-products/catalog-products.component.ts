import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css']
})
export class CatalogProductsComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }

}