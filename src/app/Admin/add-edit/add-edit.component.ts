import { Component } from '@angular/core';
import { AdminProductServiceService } from '../admin/Service/admin-product-service.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
   product:IProduct= {} as IProduct

  currentID=this.adminService.currentID

  constructor(private adminService:AdminProductServiceService,private router:Router){}

  onSubmit(product:IProduct){

    if(this.currentID){

      this.adminService.editProduct(product,this.currentID).subscribe(data=>{

       this.router.navigate(['admin'])

      })

    }
    else{
      this.adminService.addProduct(product).subscribe(data=>{

        this.router.navigate(['admin'])

       })



    }

  }



}
