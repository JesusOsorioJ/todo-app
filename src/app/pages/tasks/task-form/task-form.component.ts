import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { TaskService, Task } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  task: Partial<Task> = { title: '', description: '', categoryId: '' };
  isEdit = false;
  categories$ = this.categoryService.categories$;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const taskId = this.route.snapshot.params['id'];
    if (taskId) {
      const existingTask = this.taskService.getTasks().find(t => t.id === +taskId);
      if (existingTask) {
        this.task = { ...existingTask };
        this.isEdit = true;
      }
    }
  }

  saveTask() {
    if (this.isEdit) {
      this.taskService.updateTask(this.task as Task);
    } else {
      this.taskService.addTask(this.task as Omit<Task, 'id'>);
    }
    this.router.navigate(['/tasks']);
  }
}
