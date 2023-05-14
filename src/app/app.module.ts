import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { TituloAreaComponent } from './components/titulo-area/titulo-area.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TituloAreaComponent,
    PreguntasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
