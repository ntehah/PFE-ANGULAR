import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-deprtement',
  templateUrl: './save-deprtement.component.html',
  styleUrls: ['./save-deprtement.component.scss']
})
export class SaveDeprtementComponent implements OnInit {
  ensigniants;
  roles;
  users;
  public url1:string="http://localhost:8024/roles";
  mode;
  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
  
    
  }
  
  onsaveDepertement(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='savegrp';
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url11,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
   Savefilliere(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='addGrpToEtudiant';
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url12,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
}
