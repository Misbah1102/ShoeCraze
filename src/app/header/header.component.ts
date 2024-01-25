import { Component } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../Shared/Model/user';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent {
  // [x: string]: string | any[] | null | undefined;


 user!:User;

  constructor( private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.user=newUser;
    });
  }
  logout(){
    this.userService.logout();
  }

  get authRize(){
    return this.user.token;
  }
}
