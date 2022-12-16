import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ComponentesusersComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ComponentesusersComponent

  ]
})
export class UsersModule { }
