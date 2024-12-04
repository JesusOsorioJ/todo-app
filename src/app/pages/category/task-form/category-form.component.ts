import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService, Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {
  category: Partial<Category> = { name: '' };
  isEdit = false;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const categoryId = this.route.snapshot.params['id'];
    if (categoryId) {
      const existingCategory = this.categoryService.getCategories().find(c => c.id === +categoryId);
      if (existingCategory) {
        this.category = { ...existingCategory };
        this.isEdit = true;
      }
    }
  }

  saveCategory() {
    if (this.isEdit) {
      this.categoryService.updateCategory(this.category as Category);
    } else {
      this.categoryService.addCategory(this.category.name!);
    }
    this.router.navigate(['/categories']);
  }
}
