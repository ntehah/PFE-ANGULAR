import { Injectable } from "@angular/core";
import { AuthentiService } from "./authenti.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Sujets } from "./models/Sujet.models";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  public host2: string = "http://localhost:8024";
  url1 = "http://localhost:8024/roles";
  url3 = "http://localhost:8024/addRoleToUser";
  url2 = "http://localhost:8024/users";
  url5 = "http://localhost:8024/register";
  url4 = "http://localhost:8024/saveEtudint";
  url6 = "http://localhost:8024/saveGroup";
  url7 = "http://localhost:8024/addEtudiantToCompte";
  url8 = "http://localhost:8024/etudiants";
  url9 = "http://localhost:8024/saveEnsigniant";
  url10 = "http://localhost:8024/departements";
  url11 = "http://localhost:8024/saveDepertement";
  url12 = "http://localhost:8024/saveFillier";
  url13 = "http://localhost:8024/fillieres";
  url14 = "http://localhost:8024/ensigniants";
  url15 = "http://localhost:8024/groupes";
  url16 = "http://localhost:8024/etudiants?projection=s3";
  url17 = "http://localhost:8024/ensigniants?projection=s4";
  url18 = "http://localhost:8024/fillieres?projection=s5";
  url19 = "http://localhost:8024/niveaus?projection=n1";
  url20 = "http://localhost:8024/saveNiveou";
  url21 = "http://localhost:8024/groupes?projection=s6";
  url22 = "http://localhost:8024/paramatrageAnnees";
  url23 = "http://localhost:8024/PlaningFilliers";
  url24 = "http://localhost:8024/planningSoutenances";
  url25 = "http://localhost:8024/soutenaceFilliers";
  url26 = "http://localhost:8024/groupes?projection=s6";
  url27 = "http://localhost:8024/savePlanigsoutenace";
  url = "/ensigniants";
  url28 = "http://localhost:8024/listNiveaus";
  gethost(url: any): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });

    return this.http.get(this.host2 + url, { headers: headers });
  }

  constructor(
    private authentiService: AuthentiService,
    private http: HttpClient
  ) {}
  getDepertementFilliers(id) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });

    return this.http.get(this.host2 + "/getDepertementFilliers/" + id, {
      headers: headers,
    });
  }

  getEntityPage(url: any, page: number, size: number): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url + "?page=" + page + "&size=" + size, {
      headers: headers,
    });
  }

  getNiveouGroupe(id) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/getNiveouGroupe/" + id, {
      headers: headers,
    });
  }

  getFillierNiveou(id) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/getFillierNiveou/" + id, {
      headers: headers,
    });
  }

  getGroupeFilliere(id) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/getGroupeFilliere/" + id, {
      headers: headers,
    });
  }

  AddRoleToUser(username: string, roleName: string) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 + "/addRoleToUser/" + username + "/" + roleName,
      { headers: headers }
    );
  }
  addEtudiantToGroup(nomGrp: string, matriculeetudiant: string) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(
      this.host2 + "/addEtudiantToGroup/" + matriculeetudiant + "/" + nomGrp,
      { headers: headers }
    );
  }
  // addGrpToEtudiant(nom: string, nomGrp:string){
  //   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  //   return this.http.get(this.host2+'/addEtudiantToGroup/'+nom+'/'+nomGrp, {headers: headers})
  // }
  SaveNiveau(url, data) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.post(url, data, { headers: headers });
  }
  SaveEtudiant(url, data) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.post(url, data, { headers: headers });
  }
  DeletFilliere(id: number) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(this.host2 + "/supprimerFilliere/" + id, {
      headers: headers,
    });
  }

  GetRoles(url) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  GetUser(url) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.get(url, { headers: headers });
  }
  SaveUser(url, data) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.http.post(url, data, { headers: headers });
  }

  getNiveoubyNom(nomNiveou: string, page: number, size: number) {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.authentiService.jwToken,
    });
    return this.gethost(
      "chercherAdherants?nomNiveou=" +
        nomNiveou +
        "&page=" +
        page +
        "&size=" +
        size
    );
  }
}
