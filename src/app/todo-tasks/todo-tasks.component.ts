import { Component, OnInit } from '@angular/core';
import {TodoTasksService} from '../services/todo-tasks.service';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.scss']
})
export class TodoTasksComponent implements OnInit {

  tasks : string[];

  constructor(private todoTasksService : TodoTasksService) { }

  ngOnInit() {
    this.tasks = this.todoTasksService.AttachTasksToList();
  }

}
