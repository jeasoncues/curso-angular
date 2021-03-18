import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {  HeroeModule } from './heroes/heroe.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
  declarations: [
    //agregar nuestros componentes
    AppComponent
  ],
  imports: [
    BrowserModule,
    //importar modulos
    HeroeModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
