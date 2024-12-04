import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// Componentes
import { TaskFormComponent } from '../pages/tasks/task-form/task-form.component';
import { TaskListComponent } from '../pages/tasks/task-list/task-list.component';
import { CategoryListComponent } from '../pages/category/category-list/category-list.component';
import { CategoryFormComponent } from '../pages/category/task-form/category-form.component';

// Servicios
import { TaskService } from '../services/task.service';
import { CategoryService } from '../services/category.service';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    TaskFormComponent,
    TaskListComponent,
    CategoryListComponent,
    CategoryFormComponent,
  ],
  providers: [TaskService, CategoryService],
})
export class HomePageModule {}
