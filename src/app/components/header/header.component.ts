import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  userLog:boolean;

constructor(private userAuthService:UserAuthService){
  this.userLog=this.userAuthService.isUserLoggedIN;
}

}


