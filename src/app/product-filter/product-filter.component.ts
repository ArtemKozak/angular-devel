import { Component, OnInit } from '@angular/core';

import { filters } from '../filters';
import { ShowBlockService } from '../show-block.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  filters = filters;
  showBlock = false;
  constructor(
    private showblockService: ShowBlockService
    ) { }

  ngOnInit() {
    this.showBlock = false;
  }
  showblocks() {
    this.showBlock = this.showblockService.showblocks(this.showBlock);
  }
}