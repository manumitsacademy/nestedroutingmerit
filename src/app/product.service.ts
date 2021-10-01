import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get("http://localhost:3000/Products")
  }
  getSimpleProds(){
    return this.http.get("http://localhost:3000/products")
  }
  getSimpleProductDetailsById(id){
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
}
