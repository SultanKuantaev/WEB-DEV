import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, title: 'Prepare presentation', description: 'For Monday meeting', category: 'Work', status: 'Pending', deadline: new Date('2023-12-10') },
    { id: 2, title: 'Buy groceries', description: 'Milk, bread, eggs', category: 'Personal', status: 'Pending', deadline: new Date('2023-12-07') },
    { id: 3, title: 'Read Angular docs', description: 'Focus on routing', category: 'Study', status: 'Completed', deadline: new Date('2023-12-05') }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}