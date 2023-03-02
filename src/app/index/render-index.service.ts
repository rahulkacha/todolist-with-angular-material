import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RenderIndexService {
  URL = 'http://localhost:5000/api/';
  constructor(private _http: HttpClient) {}
  getTasks() {
    return this._http.get<any>(this.URL);
  }
}
