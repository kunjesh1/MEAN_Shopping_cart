import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

   
   }

   getCategories()
   {
     return this.http.get(environment.apiBaseUrl+'/categories'); 
   }
}
