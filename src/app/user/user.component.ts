import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceServiceService } from '../servers/servers/service.service.service';
import { InterfaceUsers } from '../interface.users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {


  constructor(private ServiceServiceService: ServiceServiceService, private route: ActivatedRoute) { }
  user: InterfaceUsers = {id:0, name: "Pedro", email: "jjjjj"};

  ngOnInit(): void {
    // this.route.params
    //   .subscribe(
    //     (updatedParams) => {
    //       this.user.id = updatedParams['id'];
    //       this.user.name = updatedParams['name'];
    //     }
    //   );

     this.ServiceServiceService.getUser(this.route.snapshot.params['id'])
       .subscribe({
        next: (resp) => this.user = resp
      });



  }

}

