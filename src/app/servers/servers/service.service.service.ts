import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { InterfaceUsers } from '../../interface.users';
import { Observable } from 'rxjs';
import { ServerInterface } from '../server';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {
  servers: ServerInterface[] = [
    {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }

    ]

    
    user=[]

    private url:string='http://localhost:3000/users'
  constructor(private http: HttpClient ) {  }

     Usuarios ():Observable<InterfaceUsers[]>{
      return this.http.get<InterfaceUsers[]>(this.url);
    }

   getUser(id:string):Observable<InterfaceUsers>{
    return this.http.get<InterfaceUsers>(`${this.url}/${id}`)
}

  getServer(id:number):ServerInterface{
    return this.servers.filter(server=>server.id==id)[0];
  }
 

}


