import { Component, OnInit ,OnChanges} from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private prdService:ProductService ){



  }
  products:IProduct[]=this.prdService.myCart;
  myObj:any;



ngOnInit(): void {

  this.prdService.productSelected.subscribe( product=>{

    console.log(this.products);

    this.myObj={...product}

    let isExist=this.products.some(obj=>{ return obj.id==this.myObj.id})
   if(isExist)
   {
     let i= this.products.findIndex(obj=>{ return obj.id==this.myObj.id})
      this.products[i].Quantity+=1
   }
   else{
     this.myObj.Quantity=1
     this.prdService.myCart.push(this.myObj)
   }})

  }



    }




  // mySelectedProducts(product:any){
  //   console.log(product);

  //  this.myObj={...product}

  //  let isExist=this.products.some(obj=>{ return obj.ID==this.myObj.ID})
  // if(isExist)
  // {
  //   let i= this.products.findIndex(obj=>{ return obj.ID==this.myObj.ID})
  //    this.products[i].Quantity+=1
  // }
  // else{
  //   this.myObj.Quantity=1
  //   this.products.push(this.myObj)
  // }}




