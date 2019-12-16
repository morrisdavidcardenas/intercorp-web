import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map, delay } from 'rxjs/operators';
import { ClienteModel } from 'app/models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http: HttpClient ) { }

  getListaCliente() {
    let url = environment.listaClienteApiURL;
    return this.http.get(url)
    .pipe(
      map( this.formatDataListaCliente ),
      delay(0)
    );
  }

  getKPICliente() {
    let url = environment.kpiClienteApiURL;
    return this.http.get(url);
  }
  
  saveCliente(cliente: ClienteModel) {
    const clienteTemp = {
      ...cliente
    };
    delete clienteTemp.id;    
    let url = environment.creaClienteApiURL;
    return this.http.post(url, clienteTemp);
  }  

  formatDataListaCliente( requestObj: object ) {
    const listaCliente: ClienteModel[] = [];
    Object.keys( requestObj ).forEach( key => {
      const entity: ClienteModel = requestObj[key];
      entity.id = key;
      listaCliente.push( entity );
    });
    return listaCliente;
  }
}