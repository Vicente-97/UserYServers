import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ServiceServiceService } from '../servers/service.service.service';
import { ServerInterface } from '../server';

@Component({
  selector: 'app-servers',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server !: ServerInterface;
 
  constructor( private ServiceServer :ServiceServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe({
      next: resp=>{
        this.server=this.ServiceServer.getServer(resp['id'])
      }
    })
    
    };
  
  }

