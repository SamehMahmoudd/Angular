import { Component, OnInit } from '@angular/core';
import { AdminProductServiceService } from './Service/admin-product-service.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  product: IProduct = {} as IProduct
  products!: IProduct[];

constructor(private router:Router ,private adminProductServ:AdminProductServiceService){

}

ngOnInit() {
  this.adminProductServ.getAllProducts()
    .subscribe(products => {this.products = products;
    });


}




deleteProduct(id:number){
  this.adminProductServ.deleteProduct(id).subscribe(data=>{
    location.reload()
  })
}


editComp(id:number){
  console.log(id);

   this.adminProductServ.currentID=id
  this.router.navigate(['addEdit'])

}


backHome(){
  this.router.navigate(['Home'])
}



}
