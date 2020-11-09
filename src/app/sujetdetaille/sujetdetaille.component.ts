import { Component, OnInit } from '@angular/core';
import { ProposerGroupeService } from '../proposer-groupe.service';
import { AuthentiService } from '../authenti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sujetdetaille',
  templateUrl: './sujetdetaille.component.html',
  styleUrls: ['./sujetdetaille.component.scss']
})
export class SujetdetailleComponent implements OnInit {
  url2="/sujets";
  sujets;
  mode='list';
  url3="/sujets?projection=s1"
 GrpProposes;
 timepropose;
 showEtudiant;
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
EtudiantsComptes;
username;
groupeFilter;
OnGetEtudiant;
private currentSujet;
Etudiants;
  constructor( private proposerGroupeService:ProposerGroupeService,
    private authentiservice:AuthentiService,private router:Router) { }
  onsaveSujetEnseigniant

  ngOnInit() {
         
    // this.username=this.authentiservice.getUsername
    // this.OnGetAllEtudiant();
    // this.OnGetEtudiant();
    
    let url1 =this.proposerGroupeService.host2+this.url3
    this.proposerGroupeService.GetSujet(this.url3)
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.proposerGroupeService.getGroupe().subscribe(data => {
      console.log(data);
      this.groupeFilter = data;
      
    });
    let url7 =this.proposerGroupeService.host2+this.url6
    this.proposerGroupeService.GetSujet(url7)
    .subscribe(data=>{
      this.timepropose=data;
      console.log(data);

    },err=>{
       console.log(err);
    })
  }
  onCherche(form:any){
    this.proposerGroupeService.getSujetbykeyword(form.keyword)
      // console.log(form);
  .subscribe(data=>{
    this.sujets=data;
  },err=>{
    console.log(err);
    console.log(form);
  });
    }
  // OnGetAllEtudiant(){
  //   // let url8 =this.proposerGroupeService.host2+this.url9
  //   this.authentiservice.getRessource(this.authentiservice.host+"/users?projection=s3").subscribe(
  //     data=>{
  //       data["_embedded"]["users"].forEach(pc=>{
  //         this.authentiservice.getRessource(pc["_links"]["self"]["href"]).subscribe(user=>{
  //           if(user["username"]==this.username){
  //             data=this.Etudiants;
  //             // if(pc["_embedded"]["users"]["etudiants"]){
  //             //   this.OnGetEtudiant(this.authentiservice.host+'/etudiants'+pc["_embedded"]["etudiants"]["etudiant"])
  //             //   this.Etudiant=data;
              
  //             // }
  //         }
  //         })
  //       })
  //     }
      
  //   )
    
  // }
  onDeletSujet(suj){
    let s=confirm("Etes vous sure?");
    if(!s)return;
    this.proposerGroupeService.deletRessource(suj._links.self.href)
    .subscribe(data=>{
    this.proposerGroupeService.GetSujet(this.url3);
    },err=>{
      console.log(err);
    });
  }
  // currentSujet;
  // onEdit(sujets){
  //   this.proposerGroupeService.getRessource((sujets._links.self.href))
  //   .subscribe(data=>{
  //     // this.proposerGroupeService.GetSujet(this.url3);
  //     this.currentSujet=data;
  //     this.mode='edit-sujet';
      
  //   },err=>{
  //       console.log(err);
  //     });
  // }
  
  onEdit(s){
    let url=s._links.self.href;
    this.router.navigateByUrl("/editEtudPropose/"+btoa(url));
  
  }
  }


