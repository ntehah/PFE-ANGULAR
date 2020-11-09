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
pages;
fillieresMQI;
ensigniants;
public currentPage:number=0;
fillieresMDE;
departements;
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
    this.mode='tous';
    this.adminService.GetUser(this.adminService.url17)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.ensigniants=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })

  }
  FilterParDepertementMDE(){
    this.mode='MDE';
    this.adminService.GetUser(this.adminService.url17)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.fillieresMDE=data;
      
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })
  }
  FilterParDepertementMQI(){
    this.mode='MQI';
    this.adminService.GetUser(this.adminService.url17)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.fillieresMQI=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
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
}
