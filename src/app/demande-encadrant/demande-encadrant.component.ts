import { Component, OnInit } from "@angular/core";
import { SujetEnseignatService } from "../sujet-enseignat.service";

@Component({
  selector: "app-demande-encadrant",
  templateUrl: "./demande-encadrant.component.html",
  styleUrls: ["./demande-encadrant.component.scss"],
})
export class DemandeEncadrantComponent implements OnInit {
  mode;
  url2 = "/sujets";
  sujets;
  sujets1;
  url3 = "/getDemands";
  url4 = "/sujets?projection=s2";
  enseignat;
  user;
  note = "";
  id;
  public totalPages: number;
  public pages: Array<number>;
  constructor(private sujetEnseignatService: SujetEnseignatService) {}

  ngOnInit() {
    this.sujetEnseignatService.GetSujet(this.url3).subscribe(
      (data) => {
        this.sujets = data;
        console.log(data);
      },
      (err) => {
        // console.log(err);
      }
    );
  }

  ValiderDemendeEncadrant(id) {
    let c = confirm("vous les vous valider cette demade?");
    if (!c) return;
    this.sujetEnseignatService.ValiderDemendeEncadrant(id).subscribe(
      (data) => {
        if (data === true) {
          alert("Demande Valider avec succes");
          console.log(data);
          window.location.reload();
        } else {
          alert("Il ya un probleme");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  RefuserDemendeEncadrant(id) {
    let c = confirm("vous les vous Refuser cette demade?");
    if (!c) return;

    this.id = id;
  }
  RefuseeAndSaveNote() {
    console.log(this.note);
    this.sujetEnseignatService
      .RefuserDemendeEncadrant(this.id, this.note)
      .subscribe(
        (data) => {
          if (data === true) {
            alert("Demande Refuser avec succes");
            this.sujetEnseignatService.GetSujet(this.url3).subscribe(
              (data) => {
                this.sujets = data;
                console.log(data);
              },
              (err) => {
                // console.log(err);
              }
            );
          } else {
            alert("Il ya un probleme");
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
