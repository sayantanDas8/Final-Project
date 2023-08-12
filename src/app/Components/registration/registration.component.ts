import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  register!: FormGroup
  collected_item!: any
  selected_image!: File
  formValues: any;

  constructor(private fbuilder: FormBuilder,private service: AuthServiceService,
    private router:Router) { }

    ngOnInit(): void {

      this.register = this.fbuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
        // email: ['', Validators.required, Validators.pattern('^([a-z0-9A-Z.-]+)@([a-z]{2,15}).([a-z.]{2,20})$')],
     // password: ['', Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[i@#$%&*]).{4,12}$')]
      })
  
    }

    onFileSelection(event: any) {
      this.selected_image = event.target.files[0]
      console.log("selected Image: ", this.selected_image);
  
    }
  
    submitData() {
      console.log('Submitted Data: ', this.register.value);
      this.collected_item = this.register.value
      console.log('Submitted Data: ', this.collected_item);
      console.log('Submitted Data: ', this.register.value);
    this.collected_item = this.register.value
    this.formValues = this.register.value
    const formData: FormData = new FormData();
    formData.append('first_name', this.formValues.first_name);
    formData.append('last_name', this.formValues.last_name);
    formData.append('email', this.formValues.email);
    formData.append('password', this.formValues.password);
    formData.append('profile_pic', this.selected_image, this.selected_image.name);
    this.service.registration(formData).subscribe((res: any) => {
      console.log("Api response: ",res);
      alert(res.message);
      // this.router.navigate(['/profile'])
    })
    }

}
