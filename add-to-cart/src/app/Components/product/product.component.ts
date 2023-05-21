import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productList : any;

  constructor(private api : ApiService) {}

  ngOnInit(): void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })
    
  }

}
