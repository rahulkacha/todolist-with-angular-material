import { TodoDetails } from './todo-details';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AddDataService {
  URL = 'http://localhost:5000/add';
  constructor(private _http: HttpClient) {}
  postData(todoObj: TodoDetails) {
    return this._http.post<any>(this.URL, todoObj);
  }
}
