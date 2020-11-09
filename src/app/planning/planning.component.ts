import { Component, OnInit } from "@angular/core";
import { PropositionGroupeplannigService } from "../proposition-group_planning.service";
import { from } from "rxjs";
import { salle } from "../models/salle.models";
import { jury } from "../models/Jury.models";
import { Router } from "@angular/router";
import { SujetEnseignatService } from "../sujet-enseignat.service";
//import { Proposerjury } from '../proposer-jury.service';
@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.scss"],
})
export class PlanningComponent implements OnInit {
  url2 = "/getjurys";
  groupes;
  grppropose;
  sujets;
  jury;
  salle;
  filliers;
  fillier;
  sujet = null;
  valide: boolean = false;
  sals: any[] = [
    { id: 1, name: "salle 1" },
    { id: 1, name: "salle 2" },
    { id: 1, name: "salle 3" },
    { id: 1, name: "salle 4" },
    { id: 1, name: "salle 5" },
    { id: 1, name: "salle 6" },
    { id: 1, name: "salle 7" },
    { id: 1, name: "salle 8" },
    { id: 1, name: "salle 9" },
    { id: 1, name: "salle 10" },
    { id: 1, name: "salle 11" },
    { id: 1, name: "salle 12" },
    { id: 1, name: "salle 13" },
    { id: 1, name: "salle 14" },
    { id: 1, name: "salle 15" },
    { id: 1, name: "amphi 1" },
    { id: 1, name: "amphi 2" },
    { id: 1, name: "amphi 3" },
    { id: 1, name: "amphi 4" },
    { id: 1, name: "amphi 5" },
  ];
  jurys;
  message;
  constructor(
    private PropositionGroupeplannigService: PropositionGroupeplannigService,
    private router: Router,
    private sujetEnseignatService: SujetEnseignatService
  ) {}

  getGroupes(id) {
    this.PropositionGroupeplannigService.getGroupe(
      "/groupefillier/" + id
    ).subscribe(
      (data) => {
        this.groupes = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getSujets(id) {
    this.PropositionGroupeplannigService.getGroupe(
      "/sujetsfillier/" + id
    ).subscribe(
      (data) => {
        this.sujets = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
    this.getJury();
    this.getFilliers();
  }
  planningSoutenance(data) {
    if (
      data.date_Planning != "" &&
      data.finDate != "" &&
      this.salle &&
      data.heureDebut != "" &&
      data.heure_fin != "" &&
      this.jury &&
      this.fillier
    ) {
      this.PropositionGroupeplannigService.getJury(
        "/planning/" +
          data.date_Planning +
          "/" +
          this.jury.idJury +
          "/" +
          data.heureDebut +
          ":00"
      ).subscribe(
        (dat) => {
          this.message = dat;
          if (this.message.dispo == true) {
            var soutenance = {
              dateSoutence: data.date_Planning,
              salle: this.salle,
              heure_debut: data.heureDebut + ":00",
              heure_fin: data.HeureFin + ":00",
              sujets: this.sujet,
              jury_planning: this.jury,
              filliere: this.fillier,
              groupe: this.grppropose,
              soutene: false,
              note: 0,
              mention: "",
            };

            this.sujetEnseignatService
              .PostSujet("/addplanningsoutenance", soutenance)
              .subscribe(
                (data) => {
                  console.log(data);
                  if (data == true) {
                    this.router.navigateByUrl("/listeplanning");
                  } else {
                    alert("il ya une problem");
                  }
                },
                (err) => {
                  console.log(err);
                }
              );
          } else {
            alert(this.message.message);
          }
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }

    // this.router.navigateByUrl("/listeplanning");
  }
  GetSalle() {
    return this.PropositionGroupeplannigService.getGroupe(
      this.PropositionGroupeplannigService.url
    );
  }
  getJury() {
    this.PropositionGroupeplannigService.getJury(this.url2).subscribe(
      (data) => {
        console.log(data);
        this.jurys = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  Planning(date, idjury) {}
  CheckDateSoutenace(value) {
    console.log(value);
    this.getGroupes(value);
    this.getSujets(value);

    for (let i = 0; i < this.filliers.length; i++) {
      if (this.filliers[i].id == value) {
        this.fillier = this.filliers[i];
      }
    }
    console.log(this.fillier);
  }
  getFilliers() {
    this.PropositionGroupeplannigService.getFilliers("/getfilliers").subscribe(
      (data) => {
        console.log(data);
        this.filliers = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
