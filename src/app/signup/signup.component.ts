import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IuserSignup } from '../Shared/interfaces/iuserSignup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signup!: FormGroup;
  isSubmitted = false;

  returnurl = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.signup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.returnurl = this.activateRoute.snapshot.queryParams['returnurl'];
  }

  get FormCon() {
    return this.signup.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.signup.invalid) return;

    const formValid = this.signup.value;

    const user: IuserSignup = {
      name: formValid.name,
      email: formValid.email,
      password: formValid.password,
    };
    this.userService.signup(user).subscribe(() => {
      this.route.navigateByUrl(this.returnurl);
    });
  }
}
