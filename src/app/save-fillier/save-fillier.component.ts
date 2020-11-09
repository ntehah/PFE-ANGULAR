import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-fillier',
  templateUrl: './save-fillier.component.html',
  styleUrls: ['./save-fillier.component.scss']
})
export class SaveFillierComponent implements OnInit {

  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  departements;
  public url1:string="http://localhost:8024/roles";
  mode;
  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
    this.adminService.GetUser(this.adminService.url10)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.departements=data;
      
      console.log(data);

    },err=>{
      // console.log(err);
    })

  
    
  }
  
  onsaveGroup(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='savegrp';
    let s=confirm("Etes vous sure?");
    if(!s)return;
    //  console.log(data);
     this.adminService.SaveUser(this.adminService.url6,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
    
   }
   Savefilliere(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
   
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url12,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
     this.router.navigateByUrl("/ListeFilliers");
   }
}
