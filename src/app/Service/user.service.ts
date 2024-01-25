import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../Shared/Model/user';
import { IuserLogin } from '../Shared/interfaces/Iuser';
import { HttpClient } from '@angular/common/http';
import { Shoes_Url_login, Shoes_Url_signup } from '../Shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IuserSignup } from '../Shared/interfaces/iuserSignup';

const User_key = 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;

  }

  login(userLogin: IuserLogin): Observable<User> {
    return this.http.post<User>(Shoes_Url_login, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastr.success(
            `Welcome To The ShoeCraZe ${user.name} ,
            Login Sucessfull`
          );
        },
        error: (errorResponse) => {
          this.toastr.error(errorResponse.error, 'Login Failed');
        },
      })
    );
  }

signup(userSignup:IuserSignup):Observable<User>{
  return this.http.post<User>(Shoes_Url_signup , userSignup).pipe(tap({
    next:(user)=>{
      this.setUserToLocalStorage(user);
      this.userSubject.next(user);
      this.toastr.success(`Welcome To The ShoeCraze ${user.name}`,'SignUp Successfull!!')
    },
    error:(errorResp)=>{
      this.toastr.error(errorResp.error, 'SignUp Failed!')
    }
  }))

}





  logout(){
    this.userSubject.next(new User());
  
    localStorage.removeItem(User_key);

   
    this.toastr.warning(
      
      ` You have been Logout ${User.name} `, 
      
    );
    setTimeout(()=>{
      window.location.reload();
    },1000)
    ;
    
  }
  private setUserToLocalStorage(user: User) {
    localStorage.setItem(User_key, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(User_key);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
