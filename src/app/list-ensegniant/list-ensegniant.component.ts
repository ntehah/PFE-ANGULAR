import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-list-ensegniant',
  templateUrl: './list-ensegniant.component.html',
  styleUrls: ['./list-ensegniant.component.scss']
})
export class ListEnsegniantComponent implements OnInit {

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
mode;
totalPages;
public size:number=5;

fillieresMQI;
ensigniants;

fillieresMDE;
departements;
pages;
 pages1;

size1:number=5;
  currentPage1:number=1;
  totalpages1:number;
  Pages1:Array<number>;
  
  currentNom1:string="";
  pages2;

  size2:number=5;
    currentPage2:number=1;
    totalpages2:number;
    Pages2:Array<number>;
    
    currentNom2:string="";

  currentPage:number=1;
  totalpages:number;
  Pages:Array<number>;
  
  currentNom:string="";
  constructor( private adminService:AdminService,
    private authentiservice:AuthentiService,private router:Router) { }
  ngOnInit() {
    
    this.adminService.GetUser(this.adminService.url10)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.departements=data;
      
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.Affichageensigniants()
  

  }
Affichageensigniants(){
  this.mode="tous";
  this.adminService.getEntityPage(this.adminService.url31,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.ensigniants = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}

  onChercher(form: any) {

    this.currentNom=form.nomEnseigniant;
    this.currentPage=0;
    this.chercherEnsegniant();
  }

  chercherEnsegniant() {

    this.adminService.getEnsegniantbyNom(this.currentNom,this.currentPage,this.size)
      .subscribe(data => {
        this.totalpages = data.totalPages;
        this.Pages = new Array(this.totalpages);
        this.ensigniants = data;
        console.log(this.ensigniants);
      },error => {
        console.log(error);
      });}
  FilterParDepertementMDE(){
    this.mode='MDE';
    this.adminService.getEntityPage(this.adminService.url31,this.currentPage,this.size)
    .subscribe(data => {
      this.totalpages=data.totalPages;
      this.Pages=new Array(this.totalpages);
      this.ensigniants = data;
      //console.log("Babs"+this.adherant.nom);
    },error => {
      console.log(error);
    })
  }
  FilterParDepertementMQI(){
    this.mode='MQI';
    this.adminService.getEntityPage(this.adminService.url31,this.currentPage,this.size)
    .subscribe(data => {
      this.totalpages=data.totalPages;
      this.Pages=new Array(this.totalpages);
      this.ensigniants = data;
      //console.log("Babs"+this.adherant.nom);
    },error => {
      console.log(error);
    })
  }
  // onEdit(s){
  //   let url=s._links.self.href;-
  //   this.router.navigateByUrl("/AddComptToEnseigniat/"+btoa(url));
  
  // }
  FilterParDepertement(value) {
    if (value == 1) {
      this.FilterParDepertementMQI();
    }
    else {
      this.FilterParDepertementMDE();
    }
  }
  onPageTous(i) {
    this.currentPage=i;
    this.Affichageensigniants();


  }
  onPageMQI(i) {
    this.currentPage=i;
    this.FilterParDepertementMQI();


  }
  onPageMED(i) {
    this.currentPage=i;
    this.FilterParDepertementMDE();


  }
  onSupprime(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeEnsegniat(s.id)
        .subscribe(data => {
          this.Affichageensigniants();
        },error => {
          console.log(error);
        })
  }
  onSupprimeMQI(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeEnsegniat(s.id)
        .subscribe(data => {
          this.FilterParDepertementMQI();
        },error => {
          console.log(error);
        })
  }
  onSupprimeMDE(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeEnsegniat(s.id)
        .subscribe(data => {
          this.FilterParDepertementMDE();
        },error => {
          console.log(error);
        })
  }
  onEdit(o) {
    this.router.navigateByUrl("/EditEnsegniant/"+o.id);
  }

}
