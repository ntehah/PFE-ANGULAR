import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-essey',
  templateUrl: './essey.component.html',
  styleUrls: ['./essey.component.scss']
})
export class EsseyComponent implements OnInit {
  etablissemet: any[];
  url3 = "/sujets?projection=s1"
  GrpProposes;
  timepropose;
  showEtudiant;
  url9 = "/users?projection=s3";
  timepropose1 = new Date('2021-07-17');
  a = new Date('2020-07-17')
  url6 = "/paramatragePeriodeProposes";
  EtudiantsComptes;
  username;
  groupeFilter;
  OnGetEtudiant;
  Etudiants;

  totalPages;
  public size: number = 5;
  pages;
  fillieresMDE;
  fillieresMQI;
  mode;
  departements;
  public currentPage: number = 0;
  constructor(private adminService: AdminService,
    private authentiservice: AuthentiService, private router: Router) {

  }

  ngOnInit() {

    this.adminService.GetUser(this.adminService.url10)
      // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
      .subscribe(data => {
        this.departements = data;
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        console.log(data);

      }, err => {
        // console.log(err);
      })

  }
  
  FilterParFilliersMQI() {
    this.mode = 'FMQI';
    this.adminService.GetUser(this.adminService.url18)
      // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
      .subscribe(data => {
        this.fillieresMDE = data;

        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        console.log(data);

      }, err => {
        // console.log(err);
      })
  }

  FilterParFilliersMDE() {
    this.mode = 'FMDE';
    this.adminService.GetUser(this.adminService.url18)
      // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
      .subscribe(data => {
        this.fillieresMDE = data;

        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        console.log(data);

      }, err => {
        // console.log(err);
      })
  }

  FilterParDepertementMDE() {
    this.mode = 'MDE';
    this.adminService.GetUser(this.adminService.url18)
      // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
      .subscribe(data => {
        this.fillieresMDE = data;

        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        console.log(data);

      }, err => {
        // console.log(err);
      })
  }
  FilterParDepertementMQI() {
    this.mode = 'MQI';
    this.adminService.GetUser(this.adminService.url18)
      // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
      .subscribe(data => {
        this.fillieresMQI = data;
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        console.log(data);

      }, err => {
        // console.log(err);
      })
  }
  FilterParDepertement(value) {
    if (value == 1) {
      this.FilterParDepertementMQI();
    }
    else {
      this.FilterParDepertementMDE();
    }
  }
  FilterFilliers(value2) {
    if (value2 == 1) {
      this.FilterParDepertementMQI();
    }
    else {
      this.FilterParDepertementMDE();
    }
  }
  SupprimerFilliere(s) {
    let c = confirm("vous les vous  Supprimer?")
    if (!c) return;
    // let url1 =this.sujetEnseignatService.host2+this.url3
    this.adminService.DeletFilliere(s.id)
      .subscribe(data => {
        alert("Supprimer  avec succes")
        // this.sujets1=data;
        // this.sujets1._embedded.sujets.valider=true


        console.log(data);

      }, err => {
        // console.log(err);
      })
  }
}
