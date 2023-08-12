import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from 'src/app/Service/bookings.service';
import { ProdService } from 'src/app/Service/prod.service';
import { Validators } from '@angular/forms';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  booking!: FormGroup
  collected_item!: any

  itemId: any | undefined
  vehicleId: any | undefined
  product!: any
  detail!: any

  constructor(private fbuilder: FormBuilder, private book:BookingsService, private router: Router, private service:ProdService,
    private activeRoute:ActivatedRoute, private storage: StorageService){}

  ngOnInit(): void {
    this.booking = this.fbuilder.group({
      color: ['', Validators.required],
      advance: ['', [Validators.required, Validators.pattern('^[0-9.+]{4,10}$')]]
    })

    this.activeRoute.paramMap.subscribe((res)=>{
      this.itemId = res.get('item_id')
      this.vehicleId = res.get('vehicle_id')
      this.product = this.service.vehicles.find((data: any)=>data.vehicle_id===this.itemId)
      this.detail = this.product.prod_item.find((data: any)=>data.item_id===this.vehicleId)
      
    })
    
  }

  submitData(){
    console.log('Submitted Data: ', this.booking.value);
    this.collected_item=this.booking.value
    console.log('Submitted Data: ', this.collected_item);

    let vehi = this.book.temporary_booking[0];
    let reg_mail = this.storage.getData()[0].email;
    // console.log(vehi);
    
    let vehical = {
      ...vehi,
      ...this.collected_item,
      reg_mail
    }

    this.book.book_Vehicle(vehical).subscribe((res:any) => {
      console.log(res);
      if (sessionStorage.getItem('token')!==null){
          alert("Booking successfully done");
      this.router.navigate(['/archive'])
        return true;
      }
        else{
          alert("You need to login first")
          return false;
        }
    })

    this.booking.reset();
  }
}
