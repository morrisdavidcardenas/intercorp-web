import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { ClienteModule } from 'app/components/cliente/cliente.module';

const routes = [
    {
        path        : 'cliente',
        loadChildren: './cliente/cliente.module#ClienteModule'
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule,
        ClienteModule
    ]
})
export class ComponentsModule
{
}
