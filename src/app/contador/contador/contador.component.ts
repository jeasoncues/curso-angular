//importamos del paquete angular/core , extraemos el componente 
import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-contador',
  //template del componente
  template: `
    <h1> {{titulo}} </h1>
    <h3>La base es: <strong> {{base}}</strong></h3>


    <!-- HACEMOS EL LLAMADO AL METODO CREADO EN COMPONENTE.TS-->
    <button (click)="acumulador(base)"> +{{base}} </button>

    <span> {{numero}}</span>

    <button (click)="acumulador(-base)"> -{{base}} </button>
    
  `

})

//para utilizar esta clase en otros archivos
export class ContadorComponent{
    titulo: string  = 'Contador App';
    numero: number = 10;

    //ejercicio acumulador de 5 
    base: number = 5;
  
    //metodos sumar -  restar => primera forma
    // sumar(){
    //   this.numero += 1;
    // }
    // restar(){
    //   this.numero -= 1;
    // }
   
    //SEGUNDA FORMA => enviando argumento o parametro como tipo number
    acumulador( valor: number){
      this.numero += valor;
    }
    
}