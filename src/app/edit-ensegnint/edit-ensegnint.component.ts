import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SujetEnseignatService } from '../sujet-enseignat.service';
import { Sujets } from '../models/Sujet.models';

@Component({
  selector: 'app-edit-ensegnint',
  templateUrl: './edit-ensegnint.component.html',
  styleUrls: ['./edit-ensegnint.component.scss']
})
export class EditEnsegnintComponent implements OnInit {
private currentSujet:Sujets;
url:string;
url2="/sujets";

entreprises;
url3="/groupes"

sujets;
groupes;
mode='list';
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private sujetEnseignatService:SujetEnseignatService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    this.sujetEnseignatService.getRessource(this.url)
    .subscribe(data=>{
      this.currentSujet=data;

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
  }
  onUpdate(value:any){
    // let url =this.sujetEnseignatService.host2+this.url2
    this.sujetEnseignatService.updateRessource(this.url,value)
    .subscribe(data=>{
   alert("Mise a jour effectuee avec succes")
    },err=>{
    console.log(err);
    })
    this.router.navigateByUrl("/ListeproposeEnseignat");
  }
}

