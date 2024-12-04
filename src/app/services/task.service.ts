import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  categoryId: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();
  private currentId = 1;

  constructor() {}

  getTasks() {
    return this.tasksSubject.value;
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = { id: this.currentId++, ...task };
    this.tasksSubject.next([...this.tasksSubject.value, newTask]);
  }

  updateTask(updatedTask: Task) {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(tasks);
  }

  deleteTask(taskId: number) {
    const tasks = this.tasksSubject.value.filter(task => task.id !== taskId);
    this.tasksSubject.next(tasks);
  }
}
