import { Component ,OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import {ProductService} from "../../Services/product-service.service"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0;
  product!: IProduct ;
  products:IProduct[]=[]
   id!:number;
   
  constructor(
    private prdService: ProductService,
    private activedRoute: ActivatedRoute,
    private router:Router,
    private location:Location
  ) {}



  ngOnInit(): void {

    this.prdID = this.activedRoute.snapshot.paramMap.get('prodID') ?

                 Number(this.activedRoute.snapshot.paramMap.get('prodID'))
                 : 0;

// if(this.prdService.getProductByID(this.prdID)){

//     this.product =  this.prdService.getProductByID(this.prdID);
// }
// else{
//   this.router.navigate(['/not-Found-product'])
// }
        this.prdService.getAllProducts().subscribe(data=>{
          this.products=[...data]
        })

        this.prdService.getProductByID(this.prdID).subscribe(data=>{
          this.product=data;
          console.log(data);

        });

        this.id=this.products.findIndex(product=>{product.id=this.prdID})


  }

  prev(){

    if(this.id>=0){  --this.id}

     this.prdID=this.products[this.id].id

    this.router.navigate([`productDetails/`,this.prdID])
    this.prdService.getProductByID(this.prdID).subscribe(data=>{
      this.product=data;


    });

  }
  nxt(){
    if(this.id<this.products.length){  ++this.id}


    this.prdID=this.products[this.id].id

    this.router.navigate([`productDetails/`,this.prdID])
    this.prdService.getProductByID(this.prdID).subscribe(data=>{
      this.product=data;


    });


  }


}
