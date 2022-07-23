import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formGroup: FormGroup;
  cantMinCaracteres: number = 30;


  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      nombre : ['', Validators.compose([
      Validators.required
      ])],
      email : ['', Validators.compose([
      Validators.required,
      Validators.email,
      ])],
      mensaje : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.cantMinCaracteres)
      ])],

      }

    )
  }

  ngOnInit(): void {
  }

  enviarFormulario() {
    console.log(this.formGroup);

    this.formGroup.reset();
  }
}
