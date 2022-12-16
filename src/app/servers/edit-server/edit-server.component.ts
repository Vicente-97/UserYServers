import { Component, OnInit } from '@angular/core';
import { ServiceServiceService } from '../servers/service.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
  ]
})
export class EditServerComponent implements OnInit {

  constructor(private serversService: ServiceServiceService,
    private route: ActivatedRoute) { }
ngOnInit() {
this.route.queryParams.subscribe;
this.route.fragment.subscribe;
}

}
