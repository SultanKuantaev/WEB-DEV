import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-item',
  template: `
    <div class="task-item" [routerLink]="['/task', task.id]">
      <span>{{ title }} ({{ category }}) - {{ status }}</span>
    </div>
    <button (click)="onMarkCompleted()">Mark as Completed</button>
  `,
  styles: [`
    .task-item { cursor: pointer; padding: 10px; border-bottom: 1px solid #ccc; }
    .task-item:hover { background-color: #f5f5f5; }
    button { margin-left: 10px; }
  `]
})
export class TaskItemComponent extends BaseTaskComponent {
  @Input() set task(task: Task) {
    this.setTask(task);
  }
  @Output() markCompleted = new EventEmitter<number>();

  onMarkCompleted(): void {
    this.markCompleted.emit(this.task.id);
  }
}