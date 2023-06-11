import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Iuser } from '../Models/iuser';
import { environment } from 'environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpHeaders={};
  constructor(private http:HttpClient) {

    this.httpHeaders={
     headers:new HttpHeaders({ 'Content-Type': 'application/json' }),

    }

   }

   addUser(user:Iuser): Observable<Iuser>{
    console.log(user);

   return this.http.post<Iuser>(`http://localhost:3000/users`,user)


   }

}
