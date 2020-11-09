import { Component, OnInit } from '@angular/core';
import { SujetEnseignatService } from '../sujet-enseignat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordinateur',
  templateUrl: './cordinateur.component.html',
  styleUrls: ['./cordinateur.component.scss']
})
export class CordinateurComponent implements OnInit {
mode;
  url2="/sujets";
  sujets;
  sujets1;
  url3="/sujets?projection=s1"
  url4="/sujets?projection=s2"
  enseignat;
  constructor( private sujetEnseignatService:SujetEnseignatService, private router:Router) { }
 
  ngOnInit() {
    // this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url)
    // .subscribe(data=>{
    //   this.enseignat=data;
    //   console.log(data);

    // },err=>{
    //   console.log(err);
    // })
    
    
  }
   
  onGetSujetEnsegnint(s){
    this.mode='listeEnsegniant';
    let url1 =this.sujetEnseignatService.host2+this.url3
      this.sujetEnseignatService.GetSujet(this.url3)
      .subscribe(data=>{
        this.sujets=data;
        console.log(data);
  
      },err=>{
        // console.log(err);
      })
    }
     
    onGetSujetEtudiant(s){
      this.mode='listetEtudiant';
      let url1 =this.sujetEnseignatService.host2+this.url3
     
        this.sujetEnseignatService.GetSujet(this.url3)
        .subscribe(data=>{
          this.sujets=data;
          console.log(data);
    
        },err=>{
          // console.log(err);
        })
      }
  onValider(s){
    let c=confirm("vous les vous valider cette sujet?")
    if(!c)return;
   // let url1 =this.sujetEnseignatService.host2+this.url3
   this.sujetEnseignatService.ValideSujet(s.titreSujet)
   .subscribe(data=>{

     alert("Sujet Valider avec succes")
     // this.sujets1=data;
     // this.sujets1._embedded.sujets.valider=true
      
   
     console.log(data);

   },err=>{
     // console.log(err);
   })
   
 }
  
 onRefuse(s){
  let c=confirm("vous les vous refuser cette sujet?")
  if(!c)return;
 // let url1 =this.sujetEnseignatService.host2+this.url3
 this.sujetEnseignatService.RefuserSujet(s.titreSujet)
 .subscribe(data=>{
   alert("Sujet refuser avec succes")
   // this.sujets1=data;
   // this.sujets1._embedded.sujets.valider=true
    
 
   console.log(data);

 },err=>{
   // console.log(err);
 })
 
}
 
Detaille(s){
  
  this.router.navigateByUrl("/Detaille/"+s.id);
  

}

  }


