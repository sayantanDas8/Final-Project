import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from 'src/app/Service/prod.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  itemId: any = "";
  product!: any;
  filteredVehicle!: any
  prodLen!: number

  constructor(
    private service: ProdService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((data) => {
      this.itemId = data.get('item_id')
      this.filteredVehicle = this.service.vehicles.filter((res: any) => res.vehicle_id === this.itemId)
      this.product = this.filteredVehicle[0].prod_item;
      console.log(this.product);
      this.prodLen = this.product.length;
    })
  }

  afterSearch(data: NgForm) {
    let searchText = data.value.searchItem;
    console.log("Recieved searched text: ", searchText);

    if (searchText == "") {
      this.product = this.product;

    }
    else {
      this.product = this.product.filter((item: any) => item.company.toLowerCase().includes(searchText.toLowerCase()) || item.model_name.toLowerCase().includes(searchText.toLowerCase()))
      this.prodLen = this.product.length;
      console.log(this.product);
      console.log(this.prodLen);
    }
  }
}