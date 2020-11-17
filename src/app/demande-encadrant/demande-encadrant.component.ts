import { Component, OnInit } from "@angular/core";
import { SujetEnseignatService } from "../sujet-enseignat.service";

@Component({
  selector: "app-demande-encadrant",
  templateUrl: "./demande-encadrant.component.html",
  styleUrls: ["./demande-encadrant.component.scss"],
})
export class DemandeEncadrantComponent implements OnInit {
  
  mode;
  url2="/sujets";
  sujets;
  sujets1;
  url3="/sujets?projection=s1"
  url4="/sujets?projection=s2"
  enseignat;
  user;
  public totalPages:number;
  public pages:Array<number>;
  constructor( private sujetEnseignatService:SujetEnseignatService) { }
 
  ngOnInit() {
    let url1 =this.sujetEnseignatService.host2+this.url3
      this.sujetEnseignatService.GetSujet(this.url3)
      .subscribe(data=>{
        this.sujets=data;
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        console.log(data);
  
      },err=>{
        // console.log(err);
      })
      this.user = (localStorage.getItem("username"));
     console.log(this.user);
    
  }

     
  
    ValiderDemendeEncadrant(s){
    let c=confirm("vous les vous valider cette demade?")
    if(!c)return;
   // let url1 =this.sujetEnseignatService.host2+this.url3
   this.sujetEnseignatService.ValiderDemendeEncadrant(s.titreSujet)
   .subscribe(data=>{
     alert("Demande Valider avec succes")
     // this.sujets1=data;
     // this.sujets1._embedded.sujets.valider=true
      
   
     console.log(data);

   },err=>{
     // console.log(err);
   })
   
 }
  

 RefuserDemendeEncadrant(s){
  let c=confirm("vous les vous Refuser cette demade?")
  if(!c)return;
 // let url1 =this.sujetEnseignatService.host2+this.url3
 this.sujetEnseignatService.ValiderDemendeEncadrant(s.titreSujet)
 .subscribe(data=>{
   alert("Demande Refuser avec succes")
   // this.sujets1=data;
   // this.sujets1._embedded.sujets.valider=true
    
 
   console.log(data);

 },err=>{
   // console.log(err);
 })
 
}



  }