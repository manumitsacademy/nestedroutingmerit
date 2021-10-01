import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productnest',
  templateUrl: './productnest.component.html',
  styleUrls: ['./productnest.component.css']
})
export class ProductnestComponent implements OnInit {

  constructor(public ps:ProductService) { }
  products;
  ngOnInit(): void {
    this.ps.getSimpleProds().subscribe((products)=>{
      this.products=products;
    })
  }

}
