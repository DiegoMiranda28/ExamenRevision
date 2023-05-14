import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ServicioPreguntasService {

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get<any>("../assets/json/response_1684090105060.json");
  }
  

  

}
