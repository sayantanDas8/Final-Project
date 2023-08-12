import { Component } from '@angular/core';
import { StorageService } from './Service/storage.service';
import { Router } from '@angular/router';
import { AuthServiceService } from './Service/auth-service.service';
import { BookingsService } from './Service/bookings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project';
  items!: any;

  data!: any;
  fname!: string;
  lname!: string;
  img_path!: string
  baseURL: string = "https://wtsacademy.dedicateddevelopers.us/"
  folderPath: string = "uploads/user/profile_pic/"

  constructor(private storageservice:StorageService, private router: Router, private service: AuthServiceService, private book:BookingsService) {}

  ngOnInit(): void {
    // this.service.user_profile().subscribe((res: any)=> {
    //   this.img_path=this.baseURL+this.folderPath+res.data.profile_pic
    //   console.log('"photo: ',this.img_path);
    // })

    if (this.loggedIn2()){
      this.service.user_profile().subscribe((res: any)=> {
        this.img_path=this.baseURL+this.folderPath+res?.data.profile_pic
        console.log('"photo: ',this.img_path);
      })

    this.book.view_Bookings().subscribe((res:any) => {
      this.items = res
    })
  }


    this.book.view_Bookings().subscribe((res:any) => {
      this.items = res
    })
  }

  loggedIn() {
    let token = this.storageservice.getToken();

    if(token) {
      this.data = this.storageservice.getData();

      this.fname = this.data[0].first_name;
      this.lname = this.data[0].last_name;

      if(this.img_path==null){
        this.img_path=this.baseURL+this.folderPath+this.data[0].proImg
        console.log(this.img_path);
        
      }
    }

    return token;
  }

  loggedIn2(){
    let token = this.storageservice.getToken();
    return token;
  }

  loggingOut(){
    this.storageservice.getDestroy();
    alert('Logged out successfully');
    console.log("loggout");
    this.router.navigate(['/home']);
  }
}
