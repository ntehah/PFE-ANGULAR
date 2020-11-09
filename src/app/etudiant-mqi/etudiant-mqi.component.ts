import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-etudiant-mqi',
  templateUrl: './etudiant-mqi.component.html',
  styleUrls: ['./etudiant-mqi.component.scss']
})
export class EtudiantMQIComponent implements OnInit {
  url3="/sujets?projection=s1"
  GrpProposes;
  timepropose;
  showEtudiant;
  fillieresMDE;
  mode;
  url9="/users?projection=s3";
  timepropose1 =new Date('2021-07-17');
    a=new Date('2020-07-17')
 url6="/paramatragePeriodeProposes";
 EtudiantsComptes;
 fillieresMQI;
 groupeFilter;
 OnGetEtudiant;
 Etudiants;
 RH;
 DI;
 RS;
 role;
 totalPages;
 public size:number=5;
 pages;
 etudiants;
 groupes
 public currentPage:number=0;
 AddToGrp;
 BA;
 IG
   constructor( private adminService:AdminService,
     private authentiservice:AuthentiService,private router:Router, private proposerGroupeService:ProposerGroupeService) { }
   ngOnInit() {
     this.adminService.GetRoles(this.adminService.url15)
     .subscribe(data=>{
       this.groupes=data;
       console.log(data);
 
     },err=>{
       console.log(err);
     })
     this.adminService.GetUser(this.adminService.url16)
     // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
     .subscribe(data=>{
       this.etudiants=data;
       this.totalPages=data["page"].totalPages;
       this.pages=new Array<number>(this.totalPages);
       console.log(data);
 
     },err=>{
       // console.log(err);
     })
     // localStorage.setItem('MATRICULE',(JSON.parse((localStorage.getItem('USER_DATA')) as any).etudiants[0].matriculeetudiant));
     // this.proposerGroupeService.getGroupe(localStorage.getItem('MATRICULE')).subscribe(data => {
      
     //   this.groupeFilter = data;
     //   console.log(data);
     // });
   }
   FiliereIG(){
     this.mode='IG'
   this.adminService.GetUser(this.adminService.url16)
   // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
   .subscribe(data=>{
     this.IG=data;
     this.totalPages=data["page"].totalPages;
     this.pages=new Array<number>(this.totalPages);
     console.log(data);
 
   },err=>{
     // console.log(err);
   })
 }
   FiliereDI(){
     this.mode='DI'
   this.adminService.GetUser(this.adminService.url16)
   // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
   .subscribe(data=>{
     this.DI=data;
     this.totalPages=data["page"].totalPages;
     this.pages=new Array<number>(this.totalPages);
     console.log(data);
 
   },err=>{
     // console.log(err);
   })
 }
   FilterParTous(){
     this.mode='tous'
   this.adminService.GetUser(this.adminService.url16)
   // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
   .subscribe(data=>{
     this.etudiants=data;
     this.totalPages=data["page"].totalPages;
     this.pages=new Array<number>(this.totalPages);
     console.log(data);
 
   },err=>{
     // console.log(err);
   })
 }

 FilterParRS(){
  this.mode='RS'
this.adminService.GetUser(this.adminService.url16)
// this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
.subscribe(data=>{
  this.RS=data;
  this.totalPages=data["page"].totalPages;
  this.pages=new Array<number>(this.totalPages);
  console.log(data);

},err=>{
  // console.log(err);
})
}
 
   FilterParDepertementMQI(){
     this.mode='MQI';
     this.adminService.GetUser(this.adminService.url16)
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
   FilterParDepertementMDE(){
     this.mode='MDE';
     this.adminService.GetUser(this.adminService.url16)
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
 
   getRole(grp){
     this.role=grp;
   
      console.log(grp);
   }
   
   AddEtudToGrp(s){
     //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
     
     let c=confirm("Etes vous sure?");
     if(!c)return;
      
     this.adminService.addEtudiantToGroup(s.matriculeetudiant,this.role)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
      this.router.navigateByUrl("/ListeEtudiant");
    }
 }
 