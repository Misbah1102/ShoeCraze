import { Component, OnInit } from '@angular/core';
import { Tag } from '../Shared/Model/Tag';
import { ShoeserviceService } from '../Service/ShoeS/shoeservice.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent  implements OnInit{

   tags:Tag[]=[];

   constructor(private ss : ShoeserviceService){}
   
   ngOnInit(): void {
    this.ss.getAlltag().subscribe((servershoe)=>{
      this.tags=servershoe;
    })
   }
}
