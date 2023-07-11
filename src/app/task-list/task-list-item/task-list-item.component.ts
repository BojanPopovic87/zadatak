import { Component, Input} from '@angular/core';
import { TaskService, Task } from 'src/app/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() task: Task;
  
  constructor(private taskService: TaskService) {}

  completeTask() {
    this.taskService.completeTask(this.task);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }
}
