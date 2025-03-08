// src/app/base-task/base-task.component.ts
import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  template: ''
})
export class BaseTaskComponent {
  title: string;
  description: string;
  category: string;
  status: string;
  deadline: Date;

  setTask(task: Task): void {
    this.title = task.title;
    this.description = task.description;
    this.category = task.category;
    this.status = task.status;
    this.deadline = task.deadline;
  }
}