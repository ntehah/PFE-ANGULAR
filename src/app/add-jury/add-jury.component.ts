import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SujetEnseignatService } from "../sujet-enseignat.service";

@Component({
  selector: "app-add-jury",
  templateUrl: "./add-jury.component.html",
  styleUrls: ["./add-jury.component.scss"],
})
export class AddJuryComponent implements OnInit {
  ListId: any[] = [];
  ListEnseingant;
  // ListName: any[] = [];
  constructor(
    private sujetEnseignatService: SujetEnseignatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sujetEnseignatService.GetEnsigniants("/ensigniantslist").subscribe(
      (data) => {
        console.log(data);
        this.ListEnseingant = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  AddEnseingant(value) {
    if (!this.ListId.includes(value)) this.ListId.push(value);

    console.log(this.ListId);
  }

  AddJury() {
    this.sujetEnseignatService.PostSujet("/addjury", this.ListId).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => {
        console.log(err);
      }
    );
    // this.router.navigateByUrl("/listeplanning");
  }
}
