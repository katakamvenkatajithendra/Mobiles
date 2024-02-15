
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobiledataService {
  
  constructor(private http:HttpClient) { }
  url='http://localhost:5000'
  
  getdata(){
   return this.http.get(this.url+'/getmobile')
  }
  deletemobile(id:number){
    return this.http.delete(this.url+'/deletemobile/'+id)
  }
  
}
