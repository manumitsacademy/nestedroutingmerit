import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(public aR:ActivatedRoute) { }
  productDetails;
  productID;
  ngOnInit(): void {
    this.aR.params.subscribe((x)=>{
      console.log(x);
    })
    this.aR.queryParams.subscribe((data)=>{
      console.log("query params::",data)
      this.productDetails=data
    })
  }

}
