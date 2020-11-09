import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-liste-groupe',
  templateUrl: './liste-groupe.component.html',
  styleUrls: ['./liste-groupe.component.scss']
})
export class ListeGroupeComponent implements OnInit {

  
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

totalPages;
public size:number=5;
pages;
groupes;
public currentPage:number=0;
  constructor( private adminService:AdminService,
    private authentiservice:AuthentiService,private router:Router) { }
  ngOnInit() {
    
    this.adminService.GetUser(this.adminService.url21)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.groupes=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })

  }}
