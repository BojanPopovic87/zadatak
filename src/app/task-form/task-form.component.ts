import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
   newTaskName: string = '';

   constructor(private taskService: TaskService) {}

   addTask() {
    if (this.newTaskName.trim() !== '') {
      const task: Task = {
        name: this.newTaskName,
        isCompleted: false,
      };
      this.taskService.addTask(task);
      this.newTaskName = '';
    }
   }
}
