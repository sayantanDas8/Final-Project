import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/Service/bookings.service';
import { OrdersService } from 'src/app/Service/orders.service';
import { ProdService } from 'src/app/Service/prod.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  itemId: any | undefined
  vehicleId: any | undefined
  product!: any
  detail!: any

  constructor(
    private service:ProdService,
    private activeRoute:ActivatedRoute,
    private order: OrdersService,
    private book:BookingsService
    ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((res)=>{
      this.itemId = res.get('item_id')
      this.vehicleId = res.get('vehicle_id')
      this.product = this.service.vehicles.find((data: any)=>data.vehicle_id===this.itemId)
      this.detail = this.product.prod_item.find((data: any)=>data.item_id===this.vehicleId)
      
    })
  }

  onBooking(data:any){
    this.book.temporary_booking.push(data);
  }

}
