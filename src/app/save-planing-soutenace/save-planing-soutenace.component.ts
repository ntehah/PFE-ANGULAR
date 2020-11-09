import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-planing-soutenace',
  templateUrl: './save-planing-soutenace.component.html',
  styleUrls: ['./save-planing-soutenace.component.scss']
})
export class SavePlaningSoutenaceComponent implements OnInit {
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  fillieres;
  niveaus;
  public url1:string="http://localhost:8024/roles";
  mode;
  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
  
    this.adminService.GetRoles(this.adminService.url13)
    .subscribe(data=>{
      this.fillieres=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    this.adminService.GetRoles(this.adminService.url19)
    .subscribe(data=>{
      this.niveaus=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  }

  
  onsaveSoutenace(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='savegrp';
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url27,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
     this.router.navigateByUrl("/SoutenaceFilliers");
   }
 
}
