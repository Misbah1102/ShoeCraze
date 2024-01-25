import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {


    @Input() visible:boolean=false;
    @Input() notfoungmsg:string=" Shoe Not Found!";
    @Input() resetLinkText:string="Refresh";
    @Input() resetLinkRoute:string="/home";

}
