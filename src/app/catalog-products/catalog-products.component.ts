import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css']
})
export class CatalogProductsComponent implements OnInit {
  products = products;

  constructor(private cartService: CartService) {
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
  }

}