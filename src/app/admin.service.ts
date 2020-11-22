import { Injectable } from '@angular/core';
import { AuthentiService } from './authenti.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujets } from './models/Sujet.models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public host2:string="http://localhost:8024";
url1="http://localhost:8024/roles";
url3="http://localhost:8024/addRoleToUser"
url2="http://localhost:8024/users";
url5="http://localhost:8024/register";
url4="http://localhost:8024/saveEtudint";
url6="http://localhost:8024/saveGroup";
url7="http://localhost:8024/addEtudiantToCompte";
url8="http://localhost:8024/etudiants";
url9="http://localhost:8024/saveEnsigniant";
url10="http://localhost:8024/departements";
url11="http://localhost:8024/saveDepertement";
url12="http://localhost:8024/saveFillier";
url13="http://localhost:8024/fillieres";
 url14="http://localhost:8024/ensigniants";
url15="http://localhost:8024/groupes";
url16="http://localhost:8024/etudiants?projection=s3";
url17="http://localhost:8024/ensigniants?projection=s4";
url18="http://localhost:8024/fillieres?projection=s5"
url19="http://localhost:8024/niveaus?projection=n1";
url20="http://localhost:8024/saveNiveou";
url21="http://localhost:8024/groupes?projection=s6"
url22="http://localhost:8024/paramatrageAnnees";
url23="http://localhost:8024/PlaningFilliers";
url24="http://localhost:8024/planningSoutenances";
url25="http://localhost:8024/soutenaceFilliers";
url26="http://localhost:8024/groupes?projection=s6";
url27="http://localhost:8024/savePlanigsoutenace";
url="http://localhost:8024/ensigniants";
url28="http://localhost:8024/listNiveaus"
url29="http://localhost:8024/listEtudiant"
url30="http://localhost:8024/listFilliere"
url31="http://localhost:8024/listEnsigniant"
url32="http://localhost:8024/listGroupe"
// url33="http://localhost:8024/afficherByIdNiveau"


gethost(url: any): Observable<any> {
   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

  return this.http.get(this.host2 + url, {headers: headers});
}

  constructor(private authentiService:AuthentiService ,private http:HttpClient,) { }
  getDepertementFilliers(id){

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.get(this.host2+'/getDepertementFilliers/'+id, {headers: headers})
  }

  getEntityPage(url:any,page: number, size: number): Observable<any> {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
   return this.http.get(url+"?page=" + page + "&size=" + size, {headers: headers});
  }


  getNiveouGroupe(id){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+'/getNiveouGroupe/'+id, {headers: headers})
  }

  getFillierNiveou(id){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+'/getFillierNiveou/'+id, {headers: headers})
  }

  getGroupeFilliere(id){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+'/getGroupeFilliere/'+id, {headers: headers})
  }

  AddRoleToUser(username: string, roleName:string){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+'/addRoleToUser/'+username+'/'+roleName, {headers: headers})
  }
  addEtudiantToGroup( nomGrp: string,matriculeetudiant:string){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+'/addEtudiantToGroup/'+matriculeetudiant+'/'+nomGrp, {headers: headers})
  }
  // addGrpToEtudiant(nom: string, nomGrp:string){
  //   let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
  //   return this.http.get(this.host2+'/addEtudiantToGroup/'+nom+'/'+nomGrp, {headers: headers})
  // }
  SaveNiveau(url,data){

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.post(url,data,{headers: headers});
  }
   SaveEtudiant(url,data){

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.post(url,data,{headers: headers});
  }
  DeletFilliere(id: number){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerFilliere/"+id, {headers: headers})
  }


   GetRoles(url){

     let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
       return this.http.get(url,{headers: headers});
   }
   GetUser(url){

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.get(url,{headers: headers});
  }
  SaveUser(url,data){
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
      return this.http.post(url,data,{headers: headers});
  }

  getNiveoubyNom(nomNiveou:string,page: number, size: number):Observable<any> {

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get( this.host2 +"/chercherNiveaus?nomNiveou="+nomNiveou+"&page=" + page + "&size=" + size,{headers: headers});
  }

  getEtudiantbyNom(matriculeetudiant:string,page: number, size: number):Observable<any> {

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get( this.host2 +"/chercherEtudiant?matriculeetudiant="+matriculeetudiant+"&page=" + page + "&size=" + size,{headers: headers});
  }


  getEnsegniantbyNom(nomEnseigniant:string,page: number, size: number):Observable<any> {

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get( this.host2 +"/chercherEnsigniant?nomEnseigniant="+nomEnseigniant+"&page=" + page + "&size=" + size,{headers: headers});
  }

  getFillirebyNom(nomfilliere:string,page: number, size: number):Observable<any> {

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get( this.host2 +"/chercherFilliere?nomfilliere="+nomfilliere+"&page=" + page + "&size=" + size,{headers: headers});
  }

  SuprimeNiveou(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerNiveou/"+id,{headers: headers});
  }

  SuprimeFillier(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerFilliere/"+id,{headers: headers});
  }
  SuprimeGroup(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerGoupe/"+id,{headers: headers});
  }
  SuprimeDepartement(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerDepartement/"+id,{headers: headers});
  }
  SuprimeEnsegniat(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerEnsegnint/"+id,{headers: headers});
  }

  SuprimeEtudiant(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/supprimerEtudiant/"+id,{headers: headers});
  }
  updateNiveou (id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierNiveau/"+id,data,{headers: headers});
  }

  updateFilliere(id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierFilliere/"+id,data,{headers: headers});
  }

  updateDepertement(id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierDepartement/"+id,data,{headers: headers});
  }
  updateEtudiant(id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierEtudiant/"+id,data,{headers: headers});
  }
  updateEnsegniat(id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierEnsegniant/"+id,data,{headers: headers});
  }
  updateUser(data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/updateuser",data,{headers: headers});
  }
  updateGroup(id:number,data)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.put(this.host2+"/modifierGroupe/"+id,data,{headers: headers});
  }


  getGroupbyNom(nomGrp:string,page: number, size: number) :Observable<any>{

    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})

    return this.http.get( this.host2 +"/chercherGroupe?nomGrp="+nomGrp+"&page=" + page + "&size=" + size,{headers: headers});
  }


  getNiveouById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdNiveau/"+id,{headers: headers});

  }
  getdepartementById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdDepartement/"+id,{headers: headers});

  }
  getGrouptById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdGroup/"+id,{headers: headers});

  }
  getFillierById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdFillier/"+id,{headers: headers});

  }
  getEtudiantById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdEtudiant/"+id,{headers: headers});

  }
  getEnsegniatById(id:number)
  {
    let headers=new  HttpHeaders({'Authorization':'Bearer '+this.authentiService.jwToken})
    return this.http.get(this.host2+"/afficherByIdEnsegniant/"+id,{headers: headers});

  }


}
