import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/Service/bookings.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  my_booking:{
    item_id: string,
    desc: string,
    company: string,
    model_name: string,
    price: string,
    color: string,
    itemImg: string,
    itemImg1: string,
    itemImg2: string,
    itemImg3: string,
    engine_capacity: string,
    mileage: string,
    transmission: string,
    kerb_weight: string,
    fuel_tank_capacity: string,
    seat_height: string,
    rating: string,
    advance: string,
    reg_mail: string,
    id:number
  }[] = [];

  filterBook!: any;

  constructor(private book:BookingsService, private storage: StorageService) {}

  ngOnInit():void {
    this.book.view_Bookings().subscribe((res:any) => {
      console.log("response: ", res);
      this.my_booking = res;
      console.log("Booked Vehicle: ", this.my_booking);

      this.filterBook = this.my_booking.filter((x:any) => x.reg_mail == this.storage.getData()[0].email);
    })
  }

  onCancel(id: any){
    console.log(id);
    let response = confirm("Are you sure you want to cancel booking")

    if (response == true){
      this.book.delete_Bookings(id).subscribe((res:any)=>{
        alert('Booking Cancelled')
        console.log("response: ",res);
        this.book.view_Bookings().subscribe((res:any) => {
          console.log("response: ", res);
          this.my_booking = res;
          console.log("Booked Vehicle: ", this.my_booking);
          this.filterBook = this.my_booking.filter((x:any) => x.reg_mail == this.storage.getData()[0].email);
        })
        
      })
    }
    
    // this.book.delete_Bookings(id).subscribe((res:any)=>{
    //   alert('Booking Cancelled')
    //   console.log("response: ",res);
    //   this.book.view_Bookings().subscribe((res:any) => {
    //     console.log("response: ", res);
    //     this.my_booking = res;
    //     console.log("Booked Vehicle: ", this.my_booking);
    //   })
      
    // })
  }
}
