import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../ToDo';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  // Accepting a `ToDo` as an input for the component template
  @Input() todo: ToDo;
  @Output() toDoDelete: EventEmitter<ToDo> = new EventEmitter(); // Output: passing it to the parent component
  @Output() toDoCheckbox: EventEmitter<ToDo> = new EventEmitter();

  constructor() {
    this.todo = new ToDo;
  }

  ngOnInit(): void {

  }

  onClick(todo: ToDo) {
    console.log("onClick has been triggered!");
    this.toDoDelete.emit(todo);
  }

  onCheckboxClick(todo: ToDo) {
    console.log("onCheckboxClick has been triggered!")
    this.toDoCheckbox.emit(todo);
    // throw new Error('Method not implemented.');
  }

}
