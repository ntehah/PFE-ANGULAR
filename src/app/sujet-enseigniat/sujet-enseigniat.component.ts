import { Component, OnInit } from "@angular/core";
import { SujetEnseignatService } from "../sujet-enseignat.service";
import icons from "glyphicons";
import { Router } from "@angular/router";
@Component({
  selector: "app-sujet-enseigniat",
  templateUrl: "./sujet-enseigniat.component.html",
  styleUrls: ["./sujet-enseigniat.component.scss"],
})
export class SujetEnseigniatComponent implements OnInit {
  mode = "list";
  url2 = "/sujets";
  sujets;
  url3 = "/EnseignantListeSujetPropose";
  enseignat;
  user;
  recgerchesujet;
  EnsegniantConnecter;
  departement;
  currentPage: number;
  constructor(
    private sujetEnseignatService: SujetEnseignatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sujetEnseignatService.GetSujet(this.url3).subscribe(
      (data) => {
        this.sujets = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
    // localStorage.setItem('NOMENSEIGNIANT', (JSON.parse((localStorage.getItem('USER_DATA')) as any).ensigniants[0].nomEnseigniant));
    // this.sujetEnseignatService.getListEnsegniants(localStorage.getItem('NOMENSEIGNIANT')).subscribe(data => {
    //   console.log(data);
    //   this.EnsegniantConnecter=data;
    // });
    this.user = localStorage.getItem("username");
    console.log(this.user);
  }
  onCherche(form: any) {
    this.sujetEnseignatService
      .getSujetbykeyword(form.keyword)
      // console.log(form);
      .subscribe(
        (data) => {
          this.sujets = data;
        },
        (err) => {
          console.log(err);
          console.log(form);
        }
      );
  }
  currentSujet;
  onEdit(s) {
    let url = s._links.self.href;
    this.router.navigateByUrl("/edit/" + btoa(url));
  }
}
