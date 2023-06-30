import { Component, OnInit } from '@angular/core';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  localItems: string | null; // Can potentially be null according to the TypeScript type inference
  todos: ToDo[];

  constructor() {
    // localStorage.clear(); // --> Should be done to have a fresh start with default values
    this.localItems = localStorage.getItem("todos"); // Called to retrieve the value associated with the "todos" key from the local storage
    this.todos = [
      {
        title: "Threads of Hope",
        desc: "Boku No Hero Academia",
        active: true
      },
      {
        title: "Suryansh Grover: Rising",
        desc: "Life's a bitch!",
        active: true
      },
      {
        title: "The Ones Within Us",
        desc: "Boku No Hero Academia",
        active: true
      }
    ];
    if (this.localItems === null) { // "null" not "empty"!
      // this.todos = []; // Assign an empty array as the default value
      localStorage.setItem("todos", JSON.stringify(this.todos));
    } else {
      this.todos = JSON.parse(this.localItems);
    }
  }

  ngOnInit(): void {

  }

  toDoDelete(toDo: ToDo) {
    console.log("Deleting the said ToDo: " + toDo);
    const idx = this.todos.indexOf(toDo);
    this.todos.splice(idx, 1);

    // Updating the local storage with the updated `todos` array
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(JSON.parse(JSON.stringify(this.todos)));
  }

  toDoAdd(toDo: ToDo) {
    console.log("Adding the intended ToDo: " + toDo);
    this.todos.push(toDo);

    // To actually make the changes to remain even after a reload
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(JSON.parse(JSON.stringify(this.todos)));
  }
  
  toggleToDo(toDo: ToDo) {
    console.log("Toggling the intended ToDO: " + toDo);
    
    const idx = this.todos.indexOf(toDo);
    this.todos[idx].active = !this.todos[idx].active;
    
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(JSON.parse(JSON.stringify(this.todos)));
   }

}
