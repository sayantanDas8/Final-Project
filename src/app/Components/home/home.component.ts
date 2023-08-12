import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/Service/prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  bike!: any
  car!: any
  viewbike: boolean = true
  viewcar: boolean = false

  constructor(private service: ProdService){}

  ngOnInit(): void {
    this.bike = this.service.bikes
    // console.log(this.bike);
    this.car = this.service.cars
  }

  clickBike(){
    this.viewbike = true
    this.viewcar = false
  }

  clickCar(){
    this.viewbike = false
    this.viewcar = true
  }

}
