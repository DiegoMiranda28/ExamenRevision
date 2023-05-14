import { Component } from '@angular/core';
import { ServicioPreguntasService } from './services/servicio-preguntas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encuesta';

  arreglo:any[] = [];


  descripcion:string ="";


  constructor(private ser:ServicioPreguntasService){}

  ngOnInit(){
    this.obtenerPreguntas();
  }

  obtenerPreguntas(){
    this.ser.getDatos().subscribe(datos => {
      datos.body.forEach((element:any) => {
        this.arreglo.push(element);
        this.descripcion = element.tipoPregunta["descripcion"];
      });
      console.log(this.arreglo);
    });
  }


  



}