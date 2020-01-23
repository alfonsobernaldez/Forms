import { Component } from '@angular/core';
import { Persona } from './interface/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formularios';
  personita: Persona = {nombre: '', apellidos: '', poblacion: ''};

  submit(){

    console.log(this.personita);
  }

}
