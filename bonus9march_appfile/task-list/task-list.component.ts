import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  template: `
    <h1>Task List</h1>
    <app-task-item
      *ngFor="let task of tasks"
      [task]="task"
      (markCompleted)="onMarkCompleted($event)">
    </app-task-item>
  `,
  styles: [`
    h1 { padding: 20px 0; }
  `]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onMarkCompleted(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'Completed';
    }
  }
}