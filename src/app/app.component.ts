import { Component } from '@angular/core';
import { TodoDetails } from './todo-details';
import { AddDataService } from './add-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todolist-with-angular-material';
  minDate = new Date();

  todoModel = new TodoDetails('', '');
  constructor(private _addDataService: AddDataService) {}
  onSubmit() {
    console.log(this.todoModel);
    this._addDataService.postData(this.todoModel).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
