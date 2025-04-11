import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from '@angular/common';
import {HttpClient} from '@angular/common/http';

interface Todo {
  id: number;
  title: string;
  completed?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';

  items: Todo[] = [
    {id:1, title:'(hard-coded) Learn Angular', completed:false},
    {id:2, title:'(hard-coded) Learn Http', completed:true},
    {id:3, title:'(hard-coded) Learn Typescript', completed:true},
  ];

  constructor(private httpClient: HttpClient) {
  }

  fetchTodos() {
    this.httpClient.get<Todo[]>('/api/todo').subscribe({
      next: data => {
        console.log(data);
        this.items = data;
      },
      error: err => {
        console.error(err);
      }
    });
  }

  removeTodo(item: Todo) {
    console.log("click remove", item)
  }
}
