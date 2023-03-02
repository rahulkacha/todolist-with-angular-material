import { Component } from '@angular/core';
import { TodoDetails } from '../todo-details';
import { AddDataService } from './add-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  minDate = new Date();

  todoModel = new TodoDetails('', '');
  constructor(private _addDataService: AddDataService) {}
  onSubmit() {
    this._addDataService.postData(this.todoModel).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.todoModel = new TodoDetails('', '');
  }
}
