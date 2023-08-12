import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signin!: FormGroup
  collected_item!: any

  constructor(private fbuilder: FormBuilder, private service: AuthServiceService,
    private storageService: StorageService, private router: Router){}

  ngOnInit(): void {
    this.signin = this.fbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      // email: ['', Validators.required, Validators.pattern('^([a-z0-9A-Z.-]+)@([a-z]{2,15}).([a-z.]{2,20})$')],
     // password: ['', Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[i@#$%&*]).{4,12}$')]
    })
  }

  submitData(){
    console.log('Submitted Data: ', this.signin.value);
    this.collected_item=this.signin.value
    console.log('Submitted Data: ', this.collected_item);
    this.service.login(this.collected_item).subscribe(
      (data: any)=> {
       console.log(data);
      //  alert(data.message);
      let userResponse=data;
      console.log("Collected value from userresponse: ", userResponse);
      
      if(data.status===200){
        alert(userResponse.message)
        this.storageService.setData(userResponse.data.first_name, userResponse.data.last_name, userResponse.data.email, userResponse.token, userResponse.data.profile_pic);
        // this.router.navigate(['/profile']);
      } 
     })
     this.signin.reset();
  }

}
