import { Injectable ,EventEmitter, OnInit } from '@angular/core';
import {IProduct} from '../Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.development'

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  myProducts: Observable< IProduct[]>;

  myCart:any[]=[];

  constructor(private http:HttpClient)  {
    // this.myProducts=[

    //   {ID:1,Name:'laptop1',Quantity:2,Price:10000,CategoryID:2,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"},
    //   {ID:2,Name:'laptop2',Quantity:5,Price:20000,CategoryID:1,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"},
    //   {ID:3,Name:'laptop3',Quantity:0,Price:24000,CategoryID:2,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"},
    //   {ID:4,Name:'laptop4',Quantity:9,Price:12000,CategoryID:3,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"},
    //   {ID:5,Name:'laptop5',Quantity:1,Price:15000,CategoryID:2,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"},
    //   {ID:6,Name:'laptop6',Quantity:0,Price:30000,CategoryID:1,Image:"https://media.wired.com/photos/6425ef2984ccb2dd1d2ac6cb/16:9/w_2399,h_1349,c_limit/asuszenbooks13oled_GEAR-Featured.jpg"}]

    this.myProducts=this.getAllProducts()

}
  // ngOnInit(): void {

  //   this.http.get('http://localhost:3000/products').subscribe((products:any)=>{
  //     this.myProducts=products
  //   console.log(products);

  //    })


  // }



productSelected = new EventEmitter<any>();


selectProduct(product: any) {
  this.productSelected.emit(product);
}



getAllProducts():Observable<IProduct[]>{

  return this.http.get<IProduct[]>(`${environment.baseAPIURL}/products`)

}



filterItemsByCat(catID:number):Observable<IProduct[]>{

// this.filteredProducts=this.myProducts.filter(product=>{

//   return product.CategoryID==categoryItems
// } )
return this.http.get<IProduct[]>(`${environment.baseAPIURL}/products?CategoryID=${catID}`)

}

getProductByID(id:number):Observable<IProduct>{
// let product;
//   this.myProducts.subscribe(data=>{

//      product= data.find(obj=>{return obj.ID==id})

//   })
//  return product;
//  console.log(product);
return this.http.get<IProduct>(`${environment.baseAPIURL}/products/${id}`)
}


// getProductsByCatID(id:number):IProduct[]{
// let prods;
//   this.myProducts.subscribe(data=>{


//     prods=data.filter(obj=>{

//       return obj.CategoryID==id

//         })
//   })



// }


filterItemsByPrice(filter:string,filteredProducts:IProduct[]){
  if(filter=='lowest'){
    filteredProducts?.sort((a,b)=>{

      return a.Price-b.Price
    })
  }
  else{
    filteredProducts?.sort((a,b)=>{

      return b.Price-a.Price
    })

  }


  }


}
