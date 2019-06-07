import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoTasksService {
  tasks : string[] = ["Sevice list 1", "Service list 2", "Service list 3"];
  constructor() { }

  public AttachTasksToList() : any {
    this.tasks;
  }

}
