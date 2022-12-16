import { Component, OnInit } from '@angular/core';
import { ServiceServiceService } from './service.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {

 
  constructor( private ServiceServiceService :ServiceServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  get resultsServer(){
     return this.ServiceServiceService.servers
  }

  onReload(){
    this.router.navigate(['servers'])
    // this.router.navigate(['servers'], {relativeTo:this.route}) // ruta relativa
  }
  
}
