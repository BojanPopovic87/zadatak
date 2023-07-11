import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
