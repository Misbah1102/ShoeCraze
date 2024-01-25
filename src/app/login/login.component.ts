import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoes_Url_login } from '../Shared/constants/urls';
// import { User } from '../Shared/Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private Actiroute: ActivatedRoute,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    
 this.returnUrl=this.Actiroute.snapshot.queryParams['returnUrl'];
  }
  get formControl() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.userservice.login({
      email: this.formControl['email'].value,
      password: this.formControl['password'].value,
    }).subscribe(()=>{
      this.Router.navigateByUrl(this.returnUrl);
    })
  }

 
}
