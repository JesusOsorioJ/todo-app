import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Category {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();
  private currentId = 1;

  constructor() {}

  getCategories() {
    return this.categoriesSubject.value;
  }

  addCategory(name: string) {
    const newCategory: Category = { id: this.currentId++, name };
    this.categoriesSubject.next([...this.categoriesSubject.value, newCategory]);
  }

  updateCategory(updatedCategory: Category) {
    const categories = this.categoriesSubject.value.map(category =>
      category.id === updatedCategory.id ? updatedCategory : category
    );
    this.categoriesSubject.next(categories);
  }

  deleteCategory(categoryId: number) {
    const categories = this.categoriesSubject.value.filter(category => category.id !== categoryId);
    this.categoriesSubject.next(categories);
  }
}
