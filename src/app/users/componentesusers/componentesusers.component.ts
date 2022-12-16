import { Component, OnInit } from '@angular/core';
import { ServiceServiceService } from '../../servers/servers/service.service.service';
import { InterfaceUsers } from '../../interface.users';

@Component({
  selector: 'app-componentesusers',
  templateUrl: './componentesusers.component.html',
  styles: [
  ]
})
export class ComponentesusersComponent implements OnInit {

  usuarios:InterfaceUsers[]=[]
  constructor(private ServiceServiceService:ServiceServiceService) { }

  ngOnInit(): void {
     this.ServiceServiceService.Usuarios()
    .subscribe({
      next: (resp) =>{
          this.usuarios = resp;}
      })
     
  }

 

}
