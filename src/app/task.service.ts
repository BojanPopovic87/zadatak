import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  uncompletedTasks: Task[] = [];
  completedTasks: Task[] = [];

  addTask(task: Task) {
    this.uncompletedTasks.push(task);
  }

  completeTask(task: Task) {
    task.isCompleted = true;
    this.uncompletedTasks = this.uncompletedTasks.filter(t => t !== task);
    this.completedTasks.push(task);
  }

  deleteTask(task: Task) {
    const index = this.uncompletedTasks.indexOf(task);
    if (index !== -1) {
      this.uncompletedTasks.splice(index, 1);
    } else {
      const completedIndex = this.completedTasks.indexOf(task);
      if (completedIndex !== -1) {
        this.completedTasks.splice(completedIndex, 1);
      }
    }
  }

  getUncompletedTasks(): Task[] {
    return this.uncompletedTasks;
  }

  getCompletedTasks(): Task[] {
    return this.completedTasks;
  }
}

export interface Task {
  name: string;
  isCompleted: boolean;
}
