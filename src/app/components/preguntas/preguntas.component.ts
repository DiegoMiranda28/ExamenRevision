import { Component } from '@angular/core';
import { ServicioPreguntasService } from 'src/app/services/servicio-preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {

  constructor(private ser:ServicioPreguntasService){}

  pregunta:string ="";

  arreglo:any[]=[];

  index = 0;
  
  textoPregunta:string[] = [];

  respuestas:any[]=[];
  
  opcion = "";

  marcados:string[] = [];

  ngOnInit(){
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.ser.getDatos().subscribe(datos => {
      datos.body.forEach((element:any) => {
        this.arreglo.push(element);
        this.pregunta = element.nombre;
        this.textoPregunta.push(this.pregunta);
        this.respuestas.push(element.respuestas);
      });
    });
  }

  siguiente(){
    if(this.index < this.textoPregunta.length-1){
      if(this.opcion === ""){
        console.log("Error");
      }else{
        this.index++;
        this.marcados.push(this.opcion);
        console.log(this.marcados);
        this.opcion = "";
      }
    }
  }

  anterior(){
    if(this.index > 0){
      if(this.opcion === ""){
        console.log("Error");
      }else{
        this.index--;
        this.marcados.push(this.opcion);
        console.log(this.marcados);
        this.opcion = "";
      }
    }
  }  

  eleccionRespuesta(txt:number){
    this.opcion = txt.toString();
    console.log(this.opcion);
  }





}
