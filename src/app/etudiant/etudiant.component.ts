import { Component, OnInit } from '@angular/core';
import { AuthentiService } from '../authenti.service';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  url2="/sujets";
  sujets;
  mode='list';
  // url3="/sujets?projection=s1"
 GrpProposes;
 timepropose;
 showEtudiant;
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
EtudiantsComptes;
// username;
OnGetEtudiant;
Etudiants;
  constructor( private proposerGroupeService:ProposerGroupeService,private authentiservice:AuthentiService) { }
  onsaveSujetEnseigniant
  ngOnInit() {
         
   this.authentiservice.getUsername
    this.OnGetAllEtudiant();
    // this.OnGetEtudiant();
    
    // let url1 =this.proposerGroupeService.host2+this.url3
    // this.proposerGroupeService.GetSujet(this.url3)
    // .subscribe(data=>{
    //   this.sujets=data;
    //   console.log(data);

    // },err=>{
    //   // console.log(err);
    // })
    let url7 =this.proposerGroupeService.host2+this.url6
    this.proposerGroupeService.GetSujet(url7)
    .subscribe(data=>{
      this.timepropose=data;
      console.log(data);

    },err=>{
       console.log(err);
    })
  }
  OnGetAllEtudiant(){
    // let url8 =this.proposerGroupeService.host2+this.url9
    this.authentiservice.getRessource(this.authentiservice.host+"/users?projection=s3").subscribe(
      data=>{
        data["_embedded"]["users"].forEach(pc=>{
          this.authentiservice.getRessource(pc["_links"]["self"]["href"]).forEach(user=>{
            // this.authentiservice.getRessource(pc1["id"]).subscribe(user=>{
              if(user["username"]==this.authentiservice.getUsername){
                 console.log("is");
                 this.authentiservice.getUsername();
             }
            
            //         console.log(data);
            //   data["_embedded"]["users"].forEach(pc1=>{
            //     this.authentiservice.getRessource(pc1).subscribe(user1=>{
            //       user1=this.Etudiants;
            //       console.log(data);
            //     })
            //  })
              // alert("ajouter")
              // if(pc["_embedded"]["users"]["etudiants"]){
              //   this.OnGetEtudiant(this.authentiservice.host+'/etudiants'+pc["_embedded"]["etudiants"]["etudiant"])
              //   this.Etudiant=data;
              
              // }
          // }
          })
        })
      }
      
    )
    
  // }
  // onDeletSujet(suj){
  //   let s=confirm("Etes vous sure?");
  //   if(!s)return;
  //   this.proposerGroupeService.deletRessource(suj._links.self.href)
  //   .subscribe(data=>{
  //   this.proposerGroupeService.GetSujet(this.url3);
  //   },err=>{
  //     console.log(err);
  //   });
  // }
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
  

    }}



  


