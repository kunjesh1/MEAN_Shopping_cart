import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) {


   }

   create(dateCreated){
      return   this.http.post(environment.apiBaseUrl+"/createCart",dateCreated);
   }
}
