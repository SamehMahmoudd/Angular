import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { environment } from 'environment.development';


@Injectable({
  providedIn: 'root'
})
export class AdminProductServiceService {
  currentID:number|undefined=undefined;

  constructor(private http:HttpClient)  {}


getAllProducts():Observable<IProduct[]>{

  return this.http.get<IProduct[]>(`${environment.baseAPIURL}/products`)

}

addProduct(product:IProduct):Observable<IProduct>{

  return this.http.post<IProduct>(`${environment.baseAPIURL}/products`,product)


}

deleteProduct(id:number):Observable<IProduct>{

  return this.http.delete<IProduct>(`${environment.baseAPIURL}/products/${id}`)

}

editProduct(product:IProduct,id:number):Observable<IProduct>{

  return this.http.put<IProduct>(`${environment.baseAPIURL}/products/${id}`,product)

}




}
