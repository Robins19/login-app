import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSignUpService } from 'src/app/core/service/api-service/registration-api-service/user-registration-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder,private userSignUpService:UserSignUpService) { }

  ngOnInit() {
    this.initSignUpForm();
  }
  private initSignUpForm(): void {
    this.signUpForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      role:['Admin']
    })

  }

  public userRegistration():void{
    this.userSignUpService.usersRegistration(this.signUpForm.value).subscribe((response) => {
      if (response) {
        console.log(response);
      }
    })
  }
}
