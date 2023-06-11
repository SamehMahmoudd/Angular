import { Component, OnInit} from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
 userLogged:boolean=false
constructor(private userAuthService:UserAuthService){}

logIn(){
  this.userAuthService.userLogin()

}

logOut(){
  this.userAuthService.userLogOut()
}

ngOnInit():void{


  this.userAuthService.getUserStatus().subscribe(data=>{
    this.userLogged=data

    console.log(this.userLogged);

  })

}


}

