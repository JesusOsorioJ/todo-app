import { Component } from '@angular/core';
import { CategoryService, Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  categories$ = this.categoryService.categories$;

  constructor(private categoryService: CategoryService) {}

  deleteCategory(categoryId: number) {
    this.categoryService.deleteCategory(categoryId);
  }
}
