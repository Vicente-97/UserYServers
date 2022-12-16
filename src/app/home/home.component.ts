import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onLoadServers(){

    this.router.navigate(['/servers'])
  }
  onlogin() {
    this.authService.login();
  }
 
  onlogout() {
    this.authService.logout();
  }
}
