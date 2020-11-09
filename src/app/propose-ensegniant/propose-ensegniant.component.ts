import { Component, OnInit } from "@angular/core";
import { SujetEnseignatService } from "../sujet-enseignat.service";
import { Router } from "@angular/router";
import { ProposerGroupeService } from "../proposer-groupe.service";

@Component({
  selector: "app-propose-ensegniant",
  templateUrl: "./propose-ensegniant.component.html",
  styleUrls: ["./propose-ensegniant.component.scss"],
})
export class ProposeEnsegniantComponent implements OnInit {
  url2 = "/sujets";
  sujets;
  sujets1;
  url3 = "/EtudiantListeSujetPropose";
  url4 = "/sujets?projection=s2";
  url5 = "/getDemand";
  enseignat;
  demands;
  d;
  groupeFilter;
  constructor(
    private sujetEnseignatService: SujetEnseignatService,
    private proposerGroupeService: ProposerGroupeService
  ) {}

  ngOnInit() {
    this.proposerGroupeService.getGroupe().subscribe((data) => {
      console.log(data);
      this.groupeFilter = data;
      this.DemandExist();
    });
  }
  saveDemande(idSujet) {
    console.log(idSujet + "Group : " + this.groupeFilter.id);
    this.proposerGroupeService
      .saveDemande(idSujet, this.groupeFilter.id)
      .subscribe((data) => {
        console.log(data);
        alert(data);
      });
  }
  DemandExist() {
    this.proposerGroupeService
      .DemandExist(this.groupeFilter.id)
      .subscribe((data) => {
        if (data === true) {
          this.sujetEnseignatService.GetSujet(this.url5).subscribe(
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
        } else {
          this.sujetEnseignatService.GetSujet(this.url3).subscribe(
            (data) => {
              this.sujets = data;
              console.log(data);
            },
            (err) => {
              console.log(err);
            }
          );
        }
      });
  }
}
