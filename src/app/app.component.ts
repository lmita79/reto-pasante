import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CONSUMO WS';
  data = Array();
  search = '';
  constructor(
    private taskService: TaskService

  ) {this.getAllAlbums()}

  getAllAlbums(): void {
    this.data = []
    this.taskService.getAllAlbums()
    .subscribe(album => {
      this.data = album;
      
    });
  }
  getAlbums(): void {
    if (this.search != '') {
      this.data =[]
      this.taskService.getAlbums(this.search)
      .subscribe(album => {
        this.data[0] = album;
        this.search= '';
      });
    }
    else{
      this.getAllAlbums();
    }
  }
}
