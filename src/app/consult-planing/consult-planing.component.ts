import { Component, OnInit } from '@angular/core';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-consult-planing',
  templateUrl: './consult-planing.component.html',
  styleUrls: ['./consult-planing.component.scss']
})
export class ConsultPlaningComponent implements OnInit {
  url2="/sujets";
  sujets;
  mode='list';
  url3="/sujets?projection=s1"
 GrpProposes;
 timepropose;
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
  constructor( private proposerGroupeService:ProposerGroupeService) { }
  onsaveSujetEnseigniant
  ngOnInit() {

    let url1 =this.proposerGroupeService.host2+this.url3
    this.proposerGroupeService.GetSujet(this.url3)
    .subscribe(data=>{
      this.sujets=data;
      console.log(data);

    },err=>{
      // console.log(err);
    })
    let url7 =this.proposerGroupeService.host2+this.url6
    this.proposerGroupeService.GetSujet(url7)
    .subscribe(data=>{
      this.timepropose=data;
      console.log(data);

    },err=>{
       console.log(err);
    })
    
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
  currentSujet;
  onEdit(sujets){
    this.proposerGroupeService.getRessource((sujets._links.self.href))
    .subscribe(data=>{
      // this.proposerGroupeService.GetSujet(this.url3);
      this.currentSujet=data;
      this.mode='edit-sujet';
      
    },err=>{
        console.log(err);
      });
  }

  }


