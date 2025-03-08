import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-detail',
  template: `
    <div *ngIf="title; else noTask">
      <h2>{{ title }}</h2>
      <p><strong>Description:</strong> {{ description }}</p>
      <p><strong>Category:</strong> {{ category }}</p>
      <p><strong>Status:</strong> {{ status }}</p>
      <p><strong>Deadline:</strong> {{ deadline | date }}</p>
      <button (click)="goBack()">Back to Tasks</button>
    </div>
    <ng-template #noTask>
      <p>Task not found.</p>
    </ng-template>
  `,
  styles: [`
    div { padding: 20px; }
    button { margin-top: 10px; }
  `]
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {
    super();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const task = this.taskService.getTaskById(id);
    if (task) {
      this.setTask(task);
    }
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}