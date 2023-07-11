import { Component } from '@angular/core';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  completedTasks: Task[];

  constructor(private taskService: TaskService) {
    this.completedTasks = this.taskService.getCompletedTasks();
  }
}