import { Component, OnInit } from '@angular/core';
import { SujetEnseignatService } from '../sujet-enseignat.service';
import { ProposerGroupeService } from '../proposer-groupe.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-soumision-etudiant',
  templateUrl: './soumision-etudiant.component.html',
  styleUrls: ['./soumision-etudiant.component.scss']
})
export class SoumisionEtudiantComponent implements OnInit {

  ensigniants;
  url2="/sujets";
  sujets;
  nomEnseigniant;
  groupeFilter;
  sujets1;
  url5="/ensigniants"
  url3="/sujets?projection=s1"
  url4="/sujets?projection=s2"
  enseignat;
  telEnsegniant;
  demands;
  d;
  url6= "/getDemand";
  constructor( private sujetEnseignatService:SujetEnseignatService,private proposerGroupeService:ProposerGroupeService,private adminservice:AdminService) { }
 
  ngOnInit() {

    this.sujetEnseignatService.GetSujet(this.url6).subscribe(
      (data) => {
        this.d = data;
        if (this.d && this.d.etat > 0) {
          this.demands = this.d;
          console.log(data);
        } else {
          alert("Vous avez deja demander un sujet.");
          console.log("DemandExist: " + data);
        }
      },
      (err) => {
        // console.log(err);
      }
     );
    this.adminservice.GetUser(this.adminservice.url)
    .subscribe(data=>{
      this.ensigniants=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    // this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url)
    // .subscribe(data=>{
    //   this.enseignat=data;
    //   console.log(data);

    // },err=>{
    //   console.log(err);
    // })
    let url1 =this.sujetEnseignatService.host2+this.url3
    this.sujetEnseignatService.GetSujet("/SoumisionEtudiant")
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.proposerGroupeService.getGroupe().subscribe(data => {
      console.log(data);
      this.groupeFilter = data;
    }) 
  }

getNomEnseigiant(nom){
  this.nomEnseigniant=nom;

   console.log(nom);
}
  DemandeEncadrantSujet(s){
  //  data1["ensigniant"]="http://localhost:8024/ensigniants/telEnsegniant";
  // ensigniant=this.ensigniants.links.self.href;
  
  let c=confirm("vous les vous envoyer demende?")
  if(!c)return;
 // let url1 =this.sujetEnseignatService.host2+this.url3
 this.proposerGroupeService.DemandeEncadrantSujet(s.titreSujet,this.nomEnseigniant)
 
 .subscribe(data=>{
   alert("demendesr avec succes")
   // this.sujets1=data;
   // this.sujets1._embedded.sujets.valider=true
   data= this.enseignat;
 
   console.log(data);

 },err=>{
   // console.log(err);
 })
 
}}