import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-enseigniat',
  templateUrl: './save-enseigniat.component.html',
  styleUrls: ['./save-enseigniat.component.scss']
})
export class SaveEnseigniatComponent implements OnInit {

  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  public url1:string="http://localhost:8024/roles";
  departements;
  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
  
    this.adminService.GetRoles(this.adminService.url10)
    .subscribe(data=>{
      this.departements=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  }
  
  onsaveEnseigniat(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveEtudiant(this.adminService.url9,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    this.router.navigateByUrl("/ListEnsegniant");
   }
}
