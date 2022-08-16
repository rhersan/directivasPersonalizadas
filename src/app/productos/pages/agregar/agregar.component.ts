import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    .hiden-msg {
      display: block;
    }

    .hiden-msg {
      display: none;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {
  color: string = 'red';
  texto1:string = 'Ricardo Hdez';


  miFormulario:  FormGroup = this.fb.group({
    nombre: ['',Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  formularioValido(control: string):boolean{
    return this.miFormulario.get(control)?.invalid || false;
  }
  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }
  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
