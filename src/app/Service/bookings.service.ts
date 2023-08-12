import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicles } from '../Class/vehicles';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  temporary_booking:{
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
    rating: string
  }[] = []

  api = "http://localhost:3000/bookings";
  
  constructor(private http:HttpClient) { }

  book_Vehicle(data:any):Observable<Vehicles[]> {
    return this.http.post<Vehicles[]>(this.api, data);
  }

  view_Bookings():Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>(this.api);
  }

  delete_Bookings(id: any){
    return this.http.delete(`${this.api}/${id}`);
  }
}
