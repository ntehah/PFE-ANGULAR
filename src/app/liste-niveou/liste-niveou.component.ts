import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-liste-niveou',
  templateUrl: './liste-niveou.component.html',
  styleUrls: ['./liste-niveou.component.scss']
})
export class ListeNiveouComponent implements OnInit {

  url3="/sujets?projection=s1"
 GrpProposes;
 timepropose;
 showEtudiant;
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
EtudiantsComptes;
username;
groupeFilter;
OnGetEtudiant;
Etudiants;
Niveo

totalPages;

pages;
niveaus;
size:number=2;
  currentPage:number=1;
  totalpages:number;
  Pages:Array<number>;
  
  currentNom:string="";
  constructor( private adminService:AdminService
    ,
    private authentiservice:AuthentiService,private router:Router) { }
  ngOnInit() {
    
    // this.adminService.GetUser(this.adminService.url19)
    // // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    // .subscribe(data=>{
    //   this.niveaus=data;
    //   this.totalPages=data["page"].totalPages;
    //   this.pages=new Array<number>(this.totalPages);
    //   console.log(data);

    // },err=>{
    //   // console.log(err);
    // })}

    this.AffichageNiveou()
     



  }
AffichageNiveou(){
  this.adminService.getEntityPage(this.adminService.url28,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.niveaus = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}
  onChercher(dataForm) {

    this.currentNom=dataForm.nom;
    this.currentPage=0;
    this.chercherNiveou();
  }

  chercherNiveou() {

    this.adminService.getNiveoubyNom(this.currentNom,this.currentPage,this.size)
      .subscribe(data => {
        this.totalpages = data.totalPages;
        this.Pages = new Array(this.totalpages);
        this.Niveo = data;
        console.log(this.Niveo);
      },error => {
        console.log(error);
      });
  }

  onPageOuvrage(i) {
    this.currentPage=i;
    this.chercherNiveou();


  }
  }


