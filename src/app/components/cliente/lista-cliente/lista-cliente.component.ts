import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { ClienteModel } from 'app/models/cliente.model';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  dataSource: ClienteModel[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'fechaNacimiento', 'fechaProbableMuerte'];

  constructor( private clienteService: ClienteService ) { }

  ngOnInit() {
    this.getListaCliente();
  }

  getListaCliente() {
    this.clienteService.getListaCliente()
      .subscribe( response => {
        this.dataSource = response;
      });
  }

}
