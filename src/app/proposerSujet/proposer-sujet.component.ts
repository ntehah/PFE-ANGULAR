import { Component, OnInit } from '@angular/core';
import { ProposerGroupeService } from '../proposer-groupe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-proposerSujet',
  templateUrl: './proposer-sujet.component.html',
  styleUrls: ['./proposer-sujet.component.scss']
})
export class ProposerSujetComponent implements OnInit {
  entreprises;
  url3 = "/groupes"
  url2 = "/sujets";
  sujets;
  groupes;
  mode = 'list';
  groupe: any;
  groupeFilter;
  constructor(private proposergroupService: ProposerGroupeService, private router: Router) { }

  ngOnInit() {
    this.proposergroupService.GetGrp(this.proposergroupService.url)
      .subscribe(data => {
        this.entreprises = data;
         console.log(data);

      }, err => {
        console.log(err);
      })
    this.proposergroupService.GetGrp(this.proposergroupService.url3)
      .subscribe(data => {
        this.groupes = data;
        // console.log(data);

      }, err => {
        console.log(err);
      })
    let url1 = this.proposergroupService.host2 + this.url2
    this.proposergroupService.GetSujet(this.url2)
      .subscribe(data => {
        this.sujets = data;
        // console.log(data);

      }, err => {
        console.log(err);
      })
    this.proposergroupService.getGroupe().subscribe(data => {
      // console.log(data);
      this.groupeFilter = data;
    });
  }

  onsaveSujetGrp(data) {
    // console.log(data);
    data["groupe"]="http://localhost:8024/groupes/"+this.groupeFilter["id"];
    console.log(data);
    let url = this.proposergroupService.host2 + this.url2
    this.proposergroupService.PostSujet(this.url2, data)
      .subscribe(data => {

      }, err => {
        console.log(err)
      })
    this.router.navigateByUrl("/ListeproposeEtudiant");
  }
  GetGrp() {
    return this.proposergroupService.GetGrp(this.proposergroupService.url)
  }
  GetSujet() {
    return this.proposergroupService.GetSujet(this.url2)
  }
  currentSujet
  onEdit(sujets) {
    this.proposergroupService.getRessource((sujets._links.self.href))
      .subscribe(data => {
        // this.proposerGroupeService.GetSujet(this.url3);
        this.currentSujet = data;
        this.mode = 'edit-sujet';

      }, err => {
        console.log(err);
      });
  }
}
