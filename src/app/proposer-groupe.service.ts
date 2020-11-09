import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { from } from "rxjs";
import { AuthentiService } from "./authenti.service";
//import { url } from 'inspector';
@Injectable({
  providedIn: "root",
})
export class ProposerGroupeService {
  public host2: string = "http://localhost:8024";

  public Mytoken = "Authorization";
  url = "/entreprises";
  url2 = "/sujets?projection=s1";
  url3 = "/groupes";
  constructor(
    private http: HttpClient,
    private authentiService: AuthentiService
  ) {}
  //public authentiService:AuthentiService;
  GetGrp(url) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  getSujetbykeyword(mc: string) {
    //  url=this.host2+url3;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 + "/sujets/search/BytitreSujetContains?mc=" + mc,
      { headers: headers }
    );
  }
  GetSujet(url) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  GetEtudiant(url) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  getRessource(url) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + url, { headers: headers });
  }
  DemandExist(idgroup) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/demandexist/" + idgroup, {
      headers: headers,
    });
  }
  GetPrenom(url) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  GetGrpProposeSujet(url) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  PostSujet(url, data) {
    url = this.host2 + url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.post(url, data, { headers: headers });
  }

  // loadToken(){

  //   this.jwToken=localStorage.getItem('token');

  // }

  saveDemande(idsujet, idgroup) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 + "/savedemande/" + idsujet + "/" + idgroup,
      { headers: headers }
    );
  }

  getGroupe() {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/GroupeEtuduant/", { headers: headers });
  }
  deletRessource(url) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.delete(url, { headers: headers });
  }
  updateRessource(url, data) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.put(url, data, { headers: headers });
  }
  GetSujetpage(page: number, size: number) {
    // url=this.host2+url;
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 + "/sujets?projection=s1?page=" + page + "&size=" + size,
      { headers: headers }
    );
  }
  DemandeEncadrantSujet(titreSujet: string, nomEnseigniant: string) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 +
        "/DemandeEncadrantSujet/" +
        titreSujet +
        "/" +
        nomEnseigniant,
      { headers: headers }
    );
  }
}
