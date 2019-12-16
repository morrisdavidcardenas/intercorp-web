// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr       : false,
    /*listaClienteApiURL : 'http://localhost:3001/cliente/listclientes',
    creaClienteApiURL : 'http://localhost:3002/cliente/creacliente',
    kpiClienteApiURL : 'http://localhost:3003/cliente/kpicliente'*/        
    listaClienteApiURL : 'https://cliente-list-api-dev-tfxb672cwq-ue.a.run.app/cliente/listclientes',
    creaClienteApiURL : 'https://cliente-crea-api-dev-tfxb672cwq-ue.a.run.app/cliente/creacliente',
    kpiClienteApiURL : 'https://cliente-kpi-api-dev-tfxb672cwq-ue.a.run.app/cliente/kpicliente'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
