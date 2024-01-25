import { Injectable } from '@angular/core';
// import { retry } from 'rxjs';
import { Shoes } from 'src/app/Shared/Model/Shoe';
import {HttpClient} from '@angular/common/http';
import { Tag } from 'src/app/Shared/Model/Tag';
import { Observable } from 'rxjs';
import { Shoes_Url, Shoes_Url_By_Tag, Shoes_Url_Id, Shoes_Url_Search, Shoes_Url_Tags } from 'src/app/Shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ShoeserviceService {

  
  constructor(private http :HttpClient) {}
  getAll():Observable<Shoes[]> {
    return this.http.get<Shoes[]>(Shoes_Url);
    }

  
   getAllshoesBySearch(searchItem:string){
    return this.http.get<Shoes[]>(Shoes_Url_Search+ searchItem);
    }   

  getShoeById(id: number): Observable<Shoes> {
    return this.http.get<Shoes>(Shoes_Url_Id +id) ;
  }


  getAllshoesByTag(tag: string): Observable<Shoes[]> {
      if(tag=='All')
      return this.getAll()
     else
     return  this.http.get<Shoes[]>(Shoes_Url_By_Tag + tag);
  }

  getAlltag():Observable<Tag[]>{
    return this.http.get<Tag[]>(Shoes_Url_Tags );

  }

  
}
