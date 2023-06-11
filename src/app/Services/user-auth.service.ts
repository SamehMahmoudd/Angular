import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  userLoggedBehSubject:BehaviorSubject<boolean>;

  constructor() {
    this.userLoggedBehSubject=new BehaviorSubject<boolean>(this.isUserLoggedIN)
   }

   userLogin(){
    let userToken="samehsameh"
    localStorage.setItem("token",userToken)
    this.userLoggedBehSubject.next(true)

   }

   userLogOut(){
    localStorage.removeItem("token")
    this.userLoggedBehSubject.next(false)
   }



  get isUserLoggedIN():boolean{
    return (localStorage.getItem("token"))?true:false;
  }

  getUserStatus():Observable<boolean>{

    return this.userLoggedBehSubject.asObservable();
  }
}
