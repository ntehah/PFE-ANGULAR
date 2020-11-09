import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProposerGroupeService } from '../proposer-groupe.service';
import {Sujets} from "../model/Sujets.model";

@Component({
  selector: 'app-edit-propose-etudiant',
  templateUrl: './edit-propose-etudiant.component.html',
  styleUrls: ['./edit-propose-etudiant.component.scss']
})
export class EditProposeEtudiantComponent implements OnInit {
private currentSujet;
  url:string;
url2="/sujets";
entreprises;
url3="/groupes"

sujets;
groupes;
mode='list';


  constructor(private router:Router,private activatedRoute:ActivatedRoute,private proposerGroupeService:ProposerGroupeService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.proposerGroupeService.getRessource(this.url)
    .subscribe(data=>{
      this.currentSujet=Sujets;

    },err=>{
      console.log(err);
    })

    this.proposerGroupeService.GetGrp(this.proposerGroupeService.url)
    .subscribe(data=>{
      this.entreprises=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  }
  onUpdate(value:any){
    // let url =this.sujetEnseignatService.host2+this.url2
    this.proposerGroupeService.updateRessource(this.url,value)
    .subscribe(data=>{
   alert("Mise a jour effectuee avec succes")
    },err=>{
    console.log(err);
    })
    this.router.navigateByUrl("/ListeproposeEtudiant");
  }



}
