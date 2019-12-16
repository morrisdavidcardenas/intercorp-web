import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ClienteService } from 'app/services/cliente.service';
import { ClienteModel } from 'app/models/cliente.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss'],
  providers:[DatePipe]
})
export class CrearClienteComponent implements OnInit {

  cliente: ClienteModel;  
  clienteForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private clienteService: ClienteService, private router: Router,private datePipe: DatePipe) { }

  ngOnInit() {
    this.cliente = new ClienteModel();    
    this.clienteForm = this.createClienteForm();
  }

  createClienteForm(): FormGroup {
      return this._formBuilder.group({
          nombre            : [this.cliente.nombre],
          apellido          : [this.cliente.apellido],
          edad              : [this.cliente.edad],
          fechaNacimiento   : [this.cliente.fechaNacimiento]          
      });
  }

  saveProduct(): void {
    let saveCliente =  this.clienteForm.getRawValue();
    saveCliente.fechaNacimiento = this.datePipe.transform(saveCliente.fechaNacimiento.toDate(), 'MM-dd-yyyy');
    this.clienteService.saveCliente(saveCliente).subscribe( response => {
      Swal.fire({
        title: 'Intercorp',
        text: 'Se creo el cliente correctamente',
        icon: 'success'      
      });
      this.router.navigate(['/cliente/lista-cliente']);      
    });
  }

}
