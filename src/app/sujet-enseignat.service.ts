import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentiService } from './authenti.service';
import { Observable } from 'rxjs';
import { Sujets } from './models/Sujet.models';

@Injectable({
  providedIn: 'root'
})
export class SujetEnseignatService {


  public host2:string="http://localhost:8024";

  public Mytoken='Authorization';
  url="/ensigniants"
  url3="/sujets/search/BytitreSujetContains?mc"
  url2="/entreprises";
constructor(private http:HttpClient, private authentiService:AuthentiService) { }
//public authentiService:AuthentiService;
GetEnsigniants(url){
  // url=this.host2+url;
   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
     return this.http.get(this.host2+url,{headers: headers});
 }
ValideSujet(titreSujet: string){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.get(this.host2+'/sujetValider/'+titreSujet, {headers: headers})
}
ValiderDemendeEncadrant(id){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.get(this.host2+'/acceptDemand/'+id, {headers: headers})
}
RefuserDemendeEncadrant(id,note){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.get(this.host2+'/refuseDemand/'+id+"/"+note, {headers: headers})
}

RefuserSujet(titreSujet: string){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.get(this.host2+'/RefuserSujet/'+titreSujet, {headers: headers})
}
GetSujet(url){
  url=this.host2+url;
   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
     return this.http.get(url,{headers: headers});
 }
 getListEnsegniants(nomEnseigniant :string){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.get(this.host2 +  '/ensigniants/' + nomEnseigniant, {headers: headers})
}
 getSujetbykeyword(mc:string){
  //  url=this.host2+url3;
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.get(this.host2+"/sujets/search/BytitreSujetContains?mc="+mc,{headers: headers});
  }
  // getSujetbykeyword(mc:string,page: number,size:number){
  //   //  url=this.host2+url3;
  //     let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  //       return this.http.get(this.host2+"/sujets/search/BytitreSujetContains?mc="+mc+"&page="+page+"&size="+size,{headers: headers});
  //   }
 GetGrpProposeSujet(url){
  url=this.host2+url;
   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
     return this.http.get(url,{headers: headers});
 }
PostSujet(url,data){
  url=this.host2+url;
   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
     return this.http.post(url,data,{headers: headers});
 }

// loadToken(){

//   this.jwToken=localStorage.getItem('token');

// }
getRessource(url):Observable<Sujets>{
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  // @ts-ignore
  return this.http.get(url,{headers: headers});

 }

 updateRessource(url,data){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.put(url,data,{headers: headers});

 }
deletRessource(url){
  let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  return this.http.delete(url,{headers: headers});

}
}
