import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../ToDo';


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {

  task: string
  desc: string
  @Output() toDoAdd: EventEmitter<ToDo> = new EventEmitter();

  // Injecting the `ToastrService` into this component's constructor
  constructor() {
    this.task = "";
    this.desc = "";
  }

  onSubmit() {
    if (!this.task) {
      // Display an error message in the console or perform any desired action
      console.log('Please provide values for task and desc');
      return;
    }
    const toDo = {
      title: this.task,
      desc: this.desc,
      active: true
    }
    this.toDoAdd.emit(toDo);
  }

}
