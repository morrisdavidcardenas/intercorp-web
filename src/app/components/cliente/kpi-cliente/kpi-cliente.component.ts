import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { KPIClienteModel } from 'app/models/kpi-cliente';

@Component({
  selector: 'app-kpi-cliente',
  templateUrl: './kpi-cliente.component.html',
  styleUrls: ['./kpi-cliente.component.scss']
})
export class KpiClienteComponent implements OnInit {

  kpiCliente: KPIClienteModel;

  constructor( private clienteService: ClienteService ) { }

  ngOnInit() {
    this.kpiCliente = new KPIClienteModel();
    this.getKPICliente();
  }

  getKPICliente() {
    this.clienteService.getKPICliente()
      .subscribe( response => {
        this.kpiCliente.promedio = response["promedio"].toFixed(2);
        this.kpiCliente.desviacionStandar = response["desviacionStandar"].toFixed(2);
      });
  }

}
