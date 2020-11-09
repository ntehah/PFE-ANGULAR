import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import {HttpClient,HttpClientModule, HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';
import { Key } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AuthentiService {
     public host:string="http://localhost:8024" ;
     public host2:string="http://localhost:8024/login";
      public host3:string="http://localhost:8024/etudiants";
      public host4:string="http://localhost:8024/ensigniants";
     public jwt:any ;
     public jwToken = null;
     username:any=null;
     prenom:any=null;
     tokenRefreshCheck = false;
    Etudiant;
      roles:Array<string>;

  constructor(private http:HttpClient) { }
  login(date){
    return this.http.post(this.host2, date, {observe:'response'});
    
    }
    
    GetMatricule(url){
      url=this.host3;
       let headers=new  HttpHeaders({'Authorization':'Bearer '+this.jwToken})
         return this.http.get(url,{headers: headers});
     }
  saveToken(jwt: string){

      localStorage.setItem('token',jwt);
      console.log(jwt)
      let decode= window.atob(jwt.split(".")[1])
      this.roles = JSON.parse(decode).roles;

      this.username =JSON.parse(decode).sub;
      this.prenom=JSON.parse(decode).sub;
      localStorage.setItem('username',this.username);
      // localStorage.setItem('prenom',this.prenom);
     //localStorage.setItem('token',jwt);
     //console.log(jwt)
     //let decode= window.atob(jwt.split(".")[1])
     //this.roles = JSON.parse(decode).roles;
     //this.username =JSON.parse(decode).sub;
     //localStorage.setItem('username',this.username);
    //   this.jwt=jwt;
    //  this.parseJWt();
  }
  //  parseJWt(){
  //  let jwtHelper=new JwtHelperService();
  //  let objJWT=jwtHelper.decodeToken(this.jwt);
  //  this.username=objJWT.obj;
  //  this.roles=objJWT.roles;
  //  //localStorage.setItem('username',this.username);

  //  getActualUser(username: string){
  //   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.jwToken})
  //  return this.http.get(this.host + "/ActualUser/"  + username,{headers: headers});
  //  }
  // }
  loadToken(){

      this.jwToken=localStorage.getItem('token');

  }
  //   loadRole(){
  //     let decode = window.atob(localStorage.getItem('token').replace("Bearer",'').split(".")[1]);
  //     this.roles = JSON.parse(decode).roles;
  //  }


  
  getActualUser(username: string) {
     let headers = new HttpHeaders({ Authorization: "Bearer " + this.jwToken });
     return this.http.get(this.host + "/user/" + username, { headers: headers });
   }

LogOut(){
   
    this.jwToken=null;
     localStorage.removeItem('token');
     localStorage.removeItem('username');
     localStorage.removeItem('USER_DATA');
    localStorage.removeItem('MATRICULE');
    localStorage.removeItem('USER_NAME');
    // localStorage.removeItem('prenom');
    this.tokenRefreshCheck = false;
     this.intialParams();
      this.roles=undefined;
   }

   public isConnected(): boolean {
    return this.tokenRefreshCheck;
}

// public isnotConnected(): boolean {
//   return this.tokenRefreshCheck=true;
// }

   intialParams(){
     this.jwt=undefined;
     this.username=undefined;
     this.roles=undefined;

   }
//   getTasks(){
//     if(this.jwToken ==null) this.loadToken();
//     return this.http.get(this.host + "/tasks",{headers: new HttpHeaders({'Authorization':this.jwToken})});
//   }
  isEnsigniant(){
    if (this.roles){
      if
        (this.roles.indexOf('Ensigniant')>=0)
        return true;
      }
      return false;
    }
    isAdmin(){
      if (this.roles){
        if
          (this.roles.indexOf('Admin')>=0)
          return true;
        }
        return false;
      }
    //return this.roles.indexOf('Ensigniant')>=0;
    // for(let r of this.roles){
    //   if(r.authority == "Ensigniant")
    //   return true;
    // }
    // return false;ng

    isCordinateur(){
      if (this.roles){
        if
          (this.roles.indexOf('Cordinateur')>=0)
          return true;
        }
        return false;
      }
  isEtudiant(){
    if (this.roles){
      if
        (this.roles.indexOf('Etudiant')>=0)
        return true;
      }
      return false;
    }
    // for(let r of this.roles){
    //   if(r.authority == "Etudian")
    //   return true;
    // }
    // return false;


    isAuthenticated(){
      if(this.roles!=undefined) return true;
      return false;
    }

    // hasRole(role:string):boolean {
    //      this.loadRole();
    //      for(let r of this.roles){
    //        if(r.authority == role) return true;
    //      }
    //      return false;
    // }

  getUsername(){
    return localStorage.getItem('username');
  }

  getRessource(url){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+ this.jwToken})
    return this.http.get(url,{headers: headers});

   }
}
