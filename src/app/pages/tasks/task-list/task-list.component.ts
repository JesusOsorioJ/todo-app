import { Component } from '@angular/core';
import { TaskService, Task } from 'src/app/services/task.service';
import { CategoryService } from 'src/app/services/category.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  selectedCategory: number | null = null;
  
  
  categories$ = this.categoryService.categories$;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}


  filteredTasks$ = combineLatest([
    this.taskService.tasks$,
    this.categoryService.categories$
  ]).pipe(
    map(([tasks, categories]) => {
      return this.selectedCategory
        ? tasks.filter((task: any) => task.categoryId === this.selectedCategory)
        : tasks;
    })
  );

  // Método para eliminar una tarea
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }
}
