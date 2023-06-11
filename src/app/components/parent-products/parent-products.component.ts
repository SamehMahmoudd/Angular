import { Component ,ViewChild,ElementRef} from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-parent-products',
  templateUrl: './parent-products.component.html',
  styleUrls: ['./parent-products.component.scss']
})
export class ParentProductsComponent {
filterValue:string=''
products:IProduct[]=[];
myObj:any;

mySelectedProducts(product:IProduct){

 this.myObj={...product}

 let isExist=this.products.some(obj=>{ return obj.id==this.myObj.id})





 if(isExist)
{


 let i= this.products.findIndex(obj=>{ return obj.id==this.myObj.id})
 this.products[i].Quantity+=1


}


else{
  this.myObj.Quantity=1
  this.products.push(this.myObj)


}





}

}

