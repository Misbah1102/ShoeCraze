import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavstatus:boolean=false;
list=[
{
  number:'1',
  name:' ALL(43)',
  

},
{
  number:'2',
  name:'CASUALS(6)',

},
{
  number:'3',
  name:'FORMAL(6)',
  

},
{
  number:'4',
  name:'JUTI(6)',

},
{
  number:'5',
  name:'NIKE(6)',
  

},
{
  number:'6',
  name:'PUMA(6)',

},
{
  number:'7',
  name:'REEBOK(7)',
  

},
{
  number:'1',
  name:'ADIDAS(6)',
  

}

]
}
