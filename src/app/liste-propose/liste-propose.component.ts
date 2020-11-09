import { Component, OnInit } from '@angular/core';
import { ProposerGroupeService } from '../proposer-groupe.service';
import { AuthentiService } from '../authenti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-propose',
  templateUrl: './liste-propose.component.html',
  styleUrls: ['./liste-propose.component.scss']
})
export class ListeProposeComponent implements OnInit {
  url2="/sujets";
  sujets;
  mode='list';public totalPages:number; 
  public pages:Array<number>;
  
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
Etudiants;
public size:number=5;
public currentPage:number=0;
  constructor( private proposerGroupeService:ProposerGroupeService,
    private authentiservice:AuthentiService,private router:Router) { }
  onsaveSujetEnseigniant

  ngOnInit() {
         
    // let url1 =this.proposerGroupeService.host2+this.url3
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    // .subscribe(data=>{
    //   this.sujets=data;
    //   console.log(data);

    // },err=>{
    //   // console.log(err);
    // })
   
    this.proposerGroupeService.GetSujet("/EtudiantListeSujetPropose")
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      console.log(err);
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
 
  onEdit(s){
    let url=s._links.self.href;
    this.router.navigateByUrl("/editEtudPropose/"+btoa(url));
  
  }
   onGet(){
  let url1 =this.proposerGroupeService.host2+this.url3
  // this.proposerGroupeService.GetSujet(this.url3)
 this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
  .subscribe(data=>{
    this.sujets=data;
    console.log(data);

  },err=>{
    // console.log(err);
  })}
  }


  