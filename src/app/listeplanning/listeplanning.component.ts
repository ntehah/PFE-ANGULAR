import { Component, OnInit } from "@angular/core";
import { ProposerGroupeService } from "../proposer-groupe.service";
import { AuthentiService } from "../authenti.service";
import { jsPDF } from "jspdf";

@Component({
  selector: "app-listeplanning",
  templateUrl: "./listeplanning.component.html",
  styleUrls: ["./listeplanning.component.scss"],
})
export class ListeplanningComponent implements OnInit {
  url2 = "/sujets";
  sujets;
  mode = "list";
  url3 = "/sujets?projection=s1";
  GrpProposes;
  soutenaces;
  id;
  mention;
  note;

  constructor(
    private proposerGroupeService: ProposerGroupeService,
    private authService: AuthentiService
  ) {}
  onsaveSujetEnseigniant;
  ngOnInit() {
    this.getSoutenances();
  }

  getSoutenances() {
    this.proposerGroupeService.GetSujet("/getsoutenances").subscribe(
      (data) => {
        this.soutenaces = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  savetoPdf(soutenance) {
    let s = confirm("Etes vous sure?");
    if (!s) return;
    var en = "";
    for (let i = 0; i < soutenance.jury_planning.ensigniants.length; i++) {
      let e = soutenance.jury_planning.ensigniants[i];
      en = en + e.nomEnseigniant + "  " + e.prenom + "\n";
    }
    const doc = new jsPDF().setProperties({ title: "Pv soutenace" });
    doc.setFontSize(22);
    doc.setFont("Helvetica", "bold");
    doc.text("PV SOUTENANCE SUJET", 20, 20);
    doc.setFontSize(16);
    doc.setFont("courier", "bolditalic");
    doc.text(
      "DATE DE SOUTENANCE : " +
        soutenance.dateSoutence.substring(0, 10) +
        "\n\n" +
        "GROUPE :" +
        soutenance.groupe.nomGrp +
        "\n\n" +
        "FILLIER :" +
        soutenance.filliere.nomfilliere +
        "\n\n" +
        "SALLE :" +
        soutenance.salle +
        "\n\n" +
        "JURY : \n" +
        en +
        "\n\n",
      25,
      30
    );
    doc.save("PV SOUTENACE GROUPE - " + soutenance.groupe.nomGrp + ".pdf");
  }
  onUpdate(id) {
    this.id = id;
  }
  SaveNoteAndMention() {
    this.proposerGroupeService
      .getRessource(
        "/updatesoutenance/" + this.id + "/" + this.mention + "/" + this.note
      )
      .subscribe(
        (data) => {
          window.location.reload();
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  isCordinateur() {
    return this.authService.isCordinateur();
  }
}
