import { Component, OnInit } from '@angular/core';
import { SujetEnseignatService } from '../sujet-enseignat.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-nouvelle-propos-enseigniat',
  templateUrl: './nouvelle-propos-enseigniat.component.html',
  styleUrls: ['./nouvelle-propos-enseigniat.component.scss']
})
export class NouvelleProposEnseigniatComponent implements OnInit {
  entreprises;
  url2="/sujets";
  idU;
  public host6:string="http://localhost:8024\ensigniants" ;
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  RecherchSujet;
  type:any;
  var:any;
  user: any;
  idUser:any;
  constructor( private sujetEnseignatService:SujetEnseignatService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
    this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url)
    .subscribe(data=>{
      this.ensigniants=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url2)
    .subscribe(data=>{
      this.entreprises=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    let url1 =this.sujetEnseignatService.host2+this.url2
    this.sujetEnseignatService.GetSujet(this.url2)
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      // console.log(err);
    })
     this.authentiservice
    .getActualUser(localStorage.getItem("username"))
     .subscribe((data) => {
       this.idUser = data;
      //  ['idUser.ensigniant.nomEnseigniant'] =this.idU;
       console.log(data);
       
  });
    this.user = (localStorage.getItem("username"));
   
    console.log(this.user);
    // this.idUser = this.user.id
    // console.log(this.idUser);
  }

  onsaveSujetEnseigniant(data){
       data["ensigniant"]="http://localhost:8024/ensigniants/"+ this.idUser["ensigniants.id"];
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
    let url =this.sujetEnseignatService.host2+this.url2
    this.sujetEnseignatService.PostSujet(this.url2,data)
    .subscribe(data=>{
      alert("Ajouter avec succes")
    },err=>{
      console.log(err)
    })
    this.router.navigateByUrl("/ListeproposeEnseignat");
   }

   getIdDomaine(){

      this.type=this.var.target.value;
  }
}

