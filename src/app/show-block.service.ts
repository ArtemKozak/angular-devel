import { Injectable } from '@angular/core';

@Injectable()
export class ShowBlockService {
  showBlock = false;
  constructor() { }

  showblocks(showBlock) {
    showBlock = !showBlock;
    return showBlock;
  }
}