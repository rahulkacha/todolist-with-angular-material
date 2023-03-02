import { Component } from '@angular/core';
import { RenderIndexService } from './render-index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  pendingTasks = [];
  completedTasks = [];
  constructor(private _RenderIndexService: RenderIndexService) {}
  onLoad() {
    this._RenderIndexService.getTasks().subscribe((data) => {
      this.pendingTasks = data.pendingTasks;
      this.completedTasks = data.completedTasks;
    });
  }
}
