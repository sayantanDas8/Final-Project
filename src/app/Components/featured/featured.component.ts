import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProdService } from 'src/app/Service/prod.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  notify!: FormGroup
  collected_item!: any

  Bikes!: any;
  Cars!: any;
  viewBikes: boolean = true
  viewCars: boolean = false
  before_notify: boolean = true
  after_notify: boolean = false

  constructor(private service: ProdService, private fbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.notify = this.fbuilder.group({
      contact: ['']
    })

    this.Bikes = this.service.latest_bikes;
    console.log(this.Bikes);

    this.Cars = this.service.latest_cars;
    console.log(this.Cars);
  }

  submitData() {
    alert('Notification will be sent at given number')
    console.log('Submitted Data: ', this.notify.value);
    this.collected_item = this.notify.value
    console.log('Submitted Data: ', this.collected_item);
    this.before_notify = false
    this.after_notify = true
  }

  clickBike() {
    this.viewBikes = true;
    this.viewCars = false;
  }
  clickCar() {
    this.viewBikes = false;
    this.viewCars = true;
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
