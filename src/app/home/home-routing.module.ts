import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TaskListComponent } from '../pages/tasks/task-list/task-list.component';
import { TaskFormComponent } from '../pages/tasks/task-form/task-form.component';
import { CategoryListComponent } from '../pages/category/category-list/category-list.component';
import { CategoryFormComponent } from '../pages/category/task-form/category-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskFormComponent },
  { path: 'tasks/:id', component: TaskFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
