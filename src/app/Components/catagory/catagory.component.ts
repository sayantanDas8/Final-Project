import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/Service/prod.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit{
  vehicle!: any;

  constructor(private service: ProdService){}

  ngOnInit(): void {
    this.vehicle = this.service.vehicles
    console.log("Vehicles: ", this.vehicle);
    
  }

}
