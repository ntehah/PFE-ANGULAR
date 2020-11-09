import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from } from 'rxjs';
import { AuthentiService } from './authenti.service';
//import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class Proposerjury{
    public host2:string="http://localhost:8024";

  public Mytoken='Authorization';
  url="/jury"
  constructor(private http:HttpClient, private authentiService:AuthentiService) { }
  getGroupe(url2){
    url2=this.host2+url2;
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.get(url2,{headers: headers});
  }
  getJury(url2){
    url2=this.host2+url2;
     let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
       return this.http.get(url2,{headers: headers});
   }
   getgetDate(url2){
    url2=this.host2+url2;
     let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
       return this.http.get(url2,{headers: headers});

  //PostPlanningt(url,data){
    //url=this.host2+url;
     //let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
       //return this.http.post(url,data,{headers: headers});
   }

  // loadToken(){

  //   this.jwToken=localStorage.getItem('token');

  // }
   getRessource(url){
     return this.http.get(url);

   }
   deletRessource(url){
     let headers=new HttpHeaders({'Authorization': 'Bearer'+ this.authentiService.jwToken})
     return this.http.delete(url,{headers: headers});
   }
  }



