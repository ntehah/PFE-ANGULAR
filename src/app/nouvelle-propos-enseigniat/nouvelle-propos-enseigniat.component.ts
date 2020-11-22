import {Component, OnInit} from '@angular/core';
import {SujetEnseignatService} from '../sujet-enseignat.service';
import {Router} from '@angular/router';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {AuthentiService} from '../authenti.service';

@Component({
  selector: 'app-nouvelle-propos-enseigniat',
  templateUrl: './nouvelle-propos-enseigniat.component.html',
  styleUrls: ['./nouvelle-propos-enseigniat.component.scss']
})
export class NouvelleProposEnseigniatComponent implements OnInit {
  entreprises;
  url2 = "/sujets";
  idU;
  public host6: string = "http://localhost:8024\ensigniants";
  sujets;
  url3 = "/sujets?projection=s1"
  ensigniants;
  RecherchSujet;
  type: any;
  var: any;
  user: any;
  idUser: any;
  dropdownSettings = {};
  listIdCompetence: any[] = []
  competence = [];

  constructor(private sujetEnseignatService: SujetEnseignatService, private router: Router, private authentiservice: AuthentiService) {
  }

  ngOnInit() {
    this.competence = [
      {item_id: 1, item_text: 'Python'},
      {item_id: 2, item_text: 'Java'},
      {item_id: 3, item_text: 'C'},
      {item_id: 4, item_text: 'C++'},
      {item_id: 5, item_text: 'JavaScript'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url)
      .subscribe(data => {
        this.ensigniants = data;
        console.log(data);

      }, err => {
        console.log(err);
      })
    this.sujetEnseignatService.GetEnsigniants(this.sujetEnseignatService.url2)
      .subscribe(data => {
        this.entreprises = data;
        console.log(data);

      }, err => {
        console.log(err);
      })
    let url1 = this.sujetEnseignatService.host2 + this.url2
    this.sujetEnseignatService.GetSujet(this.url2)
      .subscribe(data => {
        this.sujets = data;
        console.log(data);

      }, err => {
        // console.log(err);
      })
    this.authentiservice
      .getActualUser(localStorage.getItem("username"))
      .subscribe((data) => {
        this.idUser = data;
        //  ['idUser.ensigniant.nomEnseigniant'] =this.idU;
        console.log(data);

      });
    this.user = (localStorage.getItem("username"));

    console.log(this.user);
    // this.idUser = this.user.id
    // console.log(this.idUser);
  }

  onItemSelect(item: any) {
    this.listIdCompetence.push(item.id);
  }

  onSelectAll(items: any) {
    for (let i = 0; i < items.length; i++) {
      this.listIdCompetence.push(items[i].id)
    }
  }

  onsaveSujetEnseigniant(data) {
    data["ensigniant"] = "http://localhost:8024/ensigniants/" + this.idUser["ensigniants.id"];

    let s = confirm("Etes vous sure?");
    if (!s) return;
    console.log(data);
    let url = this.sujetEnseignatService.host2 + this.url2
    this.sujetEnseignatService.PostSujet(this.url2, data)
      .subscribe(data => {
        alert("Ajouter avec succes")
      }, err => {
        console.log(err)
      })
    this.router.navigateByUrl("/ListeproposeEnseignat");
  }

  getIdDomaine() {

    this.type = this.var.target.value;
  }
}

