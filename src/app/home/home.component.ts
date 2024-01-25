import { Component, OnInit } from '@angular/core';
import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';
import { Shoes } from '../Shared/Model/Shoe';
import { ActivatedRoute } from '@angular/router';
@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shoes: Shoes[] = [];
  constructor(private ss: ShoeserviceService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        this.shoes = this.ss
          .getAll()
          .filter((shoe) =>
            shoe.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
          else if(params['tag'])
          this.shoes=this.ss.getAllshoesByTag(params['tag']);
      else this.shoes = this.ss.getAll();
    });
  }
  
  
}
