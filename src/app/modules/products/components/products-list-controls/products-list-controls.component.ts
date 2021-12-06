import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

export type ICurrentPageChangeEventMap = 'start' | 'previous' | 'next' | 'end';

@Component({
  selector: 'app-products-list-controls',
  templateUrl: './products-list-controls.component.html',
  styleUrls: ['./products-list-controls.component.scss'],
})
export class ProductsListControlsComponent implements OnInit {
  @Input() filteredProducts: IProduct[] | undefined;
  @Input() gridView: boolean | undefined;
  @Input() itemsPerPage: number | undefined;
  @Input() currentPage: number | undefined;
  totalPages: number[];
  @Output() gridViewChange: EventEmitter<void>;
  @Output() currentPageChange: EventEmitter<
    ICurrentPageChangeEventMap | number
  >;
  pagesToRender: number[];

  constructor() {
    this.filteredProducts = undefined;
    this.gridView = undefined;
    this.itemsPerPage = undefined;
    this.currentPage = undefined;
    this.totalPages = [1];
    this.gridViewChange = new EventEmitter<void>();
    this.currentPageChange = new EventEmitter<
      ICurrentPageChangeEventMap | number
    >();
    this.pagesToRender = [1];
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.generatePagingButtons();
  }

  handleGridViewChange(): void {
    this.gridViewChange.emit();
  }

  handleCurrentPageChange(newPage: ICurrentPageChangeEventMap | number): void {
    this.currentPageChange.emit(newPage);
  }

  generatePagingButtons(): void {
    const pageButtonsOffset = 2;
    const potentialPageButtonsToRender: number[] = [];

    this.totalPages = Array.from(
      Array(
        Math.ceil(this.filteredProducts?.length! / this.itemsPerPage!)
      ).keys()
    );

    for (
      let i = this.currentPage! - pageButtonsOffset - 1;
      i < this.currentPage! + pageButtonsOffset;
      i++
    ) {
      potentialPageButtonsToRender.push(i);
    }

    this.pagesToRender = potentialPageButtonsToRender.filter((page) => {
      const maxPageNumber = Math.max(...this.totalPages);
      if (!(page > maxPageNumber)) {
        return page >= 0;
      } else {
        return;
      }
    });
  }
}
