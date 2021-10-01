import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html',
  styleUrls: ['./proddetails.component.css']
})
export class ProddetailsComponent implements OnInit {

  constructor(public aR:ActivatedRoute,public pS:ProductService) { }
  id;
  prodDetails;
  ngOnInit(): void {
    this.aR.params.subscribe((x)=>{
      this.id=x.id;
      this.pS.getSimpleProductDetailsById(this.id).subscribe((details)=>{
        this.prodDetails=details;
      })
    })
    
  }

}
