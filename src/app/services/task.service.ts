import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAlbums() {
    const path = 'https://jsonplaceholder.typicode.com/albums'
    // const path = 'https://estigia.ctorres.sandbox.ehg.pe/Rest/Caronte/v1.0/getData'
    return this.http.get<Task[]>(path);
  }
  getAlbums(id: string) {
    const path = `https://jsonplaceholder.typicode.com/albums/${id}`
    // const path = 'https://estigia.ctorres.sandbox.ehg.pe/Rest/Caronte/v1.0/getData'
    return this.http.get<Task>(path);
  }
}
