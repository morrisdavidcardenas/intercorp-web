import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'cliente',
        title    : 'Cliente',
        type     : 'group',
        children : [
            {
                id       : 'listaCliente',
                title    : 'Lista de Clientes',
                type     : 'item',
                url      : '/cliente/lista-cliente'
            },
            {
                id       : 'crearCliente',
                title    : 'Crear Cliente',
                type     : 'item',
                url      : '/cliente/crear-cliente'
            },
            {
                id       : 'kpiCliente',
                title    : 'KPI de Clientes',
                type     : 'item',
                url      : '/cliente/kpi-cliente'
            }            
        ]
    }
];
