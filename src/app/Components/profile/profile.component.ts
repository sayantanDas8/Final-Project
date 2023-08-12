import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  profile!: any
  img_path!: string
  baseURL: string = "https://wtsacademy.dedicateddevelopers.us/"
  folderPath: string = "uploads/user/profile_pic/"

  constructor(private service: AuthServiceService, private storage: StorageService, private router: Router){}

  ngOnInit(): void {
    this.service.user_profile().subscribe((res: any)=> {
      console.log("Response: ", res);
      this.profile = res;
      console.log("profile", this.profile);
      this.img_path=this.baseURL+this.folderPath+res.data.profile_pic
      console.log('"photo: ',this.img_path);
    })
  }

  loggingOut(){
    this.storage.getDestroy();
    alert('Logged out successfully');
    console.log("loggout");
    this.router.navigate(['/home']);
  }

}
