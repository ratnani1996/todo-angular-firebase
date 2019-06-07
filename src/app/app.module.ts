import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
