import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/Models/iuser';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  userForm:FormGroup;
  user:Iuser={} as Iuser;

  constructor(private fb:FormBuilder,private userService:UserServiceService){

    this.userForm=this.fb.group( {

      firstName:['',[Validators.minLength(5),Validators.required]],
      lastName:['',[Validators.minLength(5),Validators.required]],
      email:['',[Validators.required]],
       mobile:this.fb.array([]),
       city:['',[Validators.required]],
       postalCode:['',[Validators.required]],
       street:['',[Validators.required]],
       password:['',[Validators.minLength(6),Validators.required]],



  })


  }

  get firstName(){
    return this.userForm.get('firstName')
  }
  get lastName(){
    return this.userForm.get('lastName')
  }

  get mobile(): FormArray {
    return this.userForm.get('mobile') as FormArray;
  }

  newMobile(): FormGroup {
    return this.fb.group({
      number: '',

    });
  }

  addMobile(){
    this.mobile.push(this.newMobile());
  }

  removeMobile(numOfIndex: number){
    this.mobile.removeAt(numOfIndex);
  }


  onSubmit(user:Iuser) {

    this.userService.addUser(user).subscribe(res=>{
      console.log('data posted !');

    })
  }


  // addUser(user:Iuser){


  //   this.userService.addUser(user)

  //   }

  }


