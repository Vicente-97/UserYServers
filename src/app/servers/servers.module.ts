import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersComponent } from './servers/servers.component';
import { ComponentesusersComponent } from '../users/componentesusers/componentesusers.component';
import { RouterModule } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './server/server.component';




@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServersComponent
  ]
})
export class ServersModule { }
