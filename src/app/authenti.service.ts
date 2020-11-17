import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthentiService implements OnInit {
  public host: string = "http://localhost:8024";
  public host2: string = "http://localhost:8024/login";
  public host3: string = "http://localhost:8024/etudiants";
  public host4: string = "http://localhost:8024/ensigniants";
  public jwt: any;
  public jwToken = null;
  username: any = null;
  prenom: any = null;
  tokenRefreshCheck = false;
  Etudiant;
  roles:any[]=null;
  connecter;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loadRoles() {
    var user = JSON.parse(localStorage.getItem("USER_DATA"));
    if (user != null) {
      this.roles = user.roles;
      this.connecter=true;
    }
    console.log(this.roles)
  }

  login(date) {
    return this.http.post(this.host2, date, {observe: 'response'});

  }

  GetMatricule(url) {
    url = this.host3;
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.jwToken})
    return this.http.get(url, {headers: headers});
  }

  saveToken(jwt: string) {

    localStorage.setItem('token', jwt);
    console.log(jwt)
    let decode = window.atob(jwt.split(".")[1])
    this.roles = JSON.parse(decode).roles;
    this.jwToken = jwt;
    this.username = JSON.parse(decode).sub;
    this.prenom = JSON.parse(decode).sub;
    localStorage.setItem('username', this.username);
  }
  loadToken() {
    this.jwToken = localStorage.getItem('token');
  }
  getActualUser(username: string) {
    let headers = new HttpHeaders({Authorization: "Bearer " + this.jwToken});
    return this.http.get(this.host + "/user/" + username, {headers: headers});
  }
  LogOut() {
    this.jwToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('USER_DATA');
    localStorage.removeItem('MATRICULE');
    localStorage.removeItem('USER_NAME');
    // localStorage.removeItem('prenom');
    this.tokenRefreshCheck = false;
    this.intialParams();
    this.roles = null;
    this.connecter=false;
  }

  public isConnected(): boolean {
    return this.tokenRefreshCheck;
  }
  intialParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;

  }
  isEnsigniant() {
    if (this.roles) {
      for (let i = 0; i < this.roles.length; i++)
        if (this.roles[i].roleName=='Ensigniant')
          return true;
    }
    return false;
  }

  isAdmin() {
    if (this.roles) {
      for (let i = 0; i < this.roles.length; i++)
        if (this.roles[i].roleName == 'Admin')
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

  isCordinateur() {
    if (this.roles) {
      for (let i = 0; i < this.roles.length; i++)
        if (this.roles[i].roleName == 'Cordinateur')
          return true;
    }
    return false;
  }

  isEtudiant() {
    if (this.roles) {
      for (let i = 0; i < this.roles.length; i++)
        if (this.roles[i].roleName == 'Etudiant')
          return true;
    }
    return false;
  }

  // for(let r of this.roles){
  //   if(r.authority == "Etudian")
  //   return true;
  // }
  // return false;


  isAuthenticated() {
    if (this.roles != null) return true;
    return false;
  }
  // hasRole(role:string):boolean {
  //      this.loadRole();
  //      for(let r of this.roles){
  //        if(r.authority == role) return true;
  //      }
  //      return false;
  // }

  getUsername() {
    return localStorage.getItem('username');
  }

  getRessource(url) {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.jwToken})
    return this.http.get(url, {headers: headers});

  }
}
