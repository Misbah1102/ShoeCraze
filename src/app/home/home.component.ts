import { Component, OnInit } from '@angular/core';
import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';
import { Shoes } from '../Shared/Model/Shoe';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shoes: Shoes[] = [];
  constructor(private ss: ShoeserviceService, private router: ActivatedRoute) {
    let ObservableShoe:Observable<Shoes[]>;
    this.router.params.subscribe((params) => {
      if (params['searchItem'])
        ObservableShoe= this.ss.getAllshoesBySearch(params['searchItem']);
          else if(params['tag'])
          ObservableShoe=this.ss.getAllshoesByTag(params['tag']);
      else ObservableShoe = this.ss.getAll();

      ObservableShoe.subscribe((servershoe)=>{
        this.shoes=servershoe;
      })
    });



  }

  ngOnInit(): void {
    
  }
  
  
}
