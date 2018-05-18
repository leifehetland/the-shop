import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  // tslint:disable-next-line:no-input-rename
  @Input('category') category;

  constructor(categoryService: CategoryService) {

    // Getting all the categories back from service
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
