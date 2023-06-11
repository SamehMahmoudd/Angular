import { Component ,Input,Output,EventEmitter ,OnChanges ,OnInit ,SimpleChanges} from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import {ProductService} from "../../Services/product-service.service"
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
IsPurchased:boolean=true
ClientName:string="Sameh"
categoryItems:number=0;
myStore:Store=new Store("myStore",['alex','cairo'])
creditCard:string='000021221412312sdfsdf333'
filteredProducts: IProduct[] = []
//=============Observable Demo=====================
 myObservable = new Observable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});




//======================================


//======================
// @Output() productSelected = new EventEmitter<any>();

@Input() filter:string='';


constructor(private prdService:ProductService,private router:Router){

  this.myObservable.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
    complete: () => console.log('Observable completed'),
  });


}

  ngOnInit(): void {

    this.prdService.getAllProducts().subscribe(data=>{

      this.filteredProducts=data
    })
  }





purchase=()=>{

  this.IsPurchased=!this.IsPurchased

}

// decreaseQuant=(id:number)=>{

//  this.prdService.getAllProducts().subscribe(data=>{
//   data[id-1].Quantity-=1
//  })

// }



// ngOnChanges(changes: SimpleChanges) {
//   if (changes['filter']) {
//     // check if the 'data' property has changed
//     const currentData = changes['filter'].currentValue;
//     const previousData = changes['filter'].previousValue;

//     if (currentData !== previousData) {
//       // call function when the 'data' property changes
//       this.prdService.filterItemsByPrice(this.filter,this.filteredProducts )
//     }
//   }
// }



selectProduct(product: any) {
  this.prdService.selectProduct(product);
}

prdDetails(prdID:number){

  this.router.navigate(['/productDetails',prdID])
}


filterItems(){

this.prdService.filterItemsByCat(this.categoryItems).subscribe(data=>{
   console.log(data);

   this.filteredProducts=data
})

}


}
