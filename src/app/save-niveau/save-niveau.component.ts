import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-niveau',
  templateUrl: './save-niveau.component.html',
  styleUrls: ['./save-niveau.component.scss']
})
export class SaveNiveauComponent implements OnInit {
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  fillieres
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
  }
  
  onsaveNiveau(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url20,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
   this.router.navigateByUrl("/ListeNiveou");
   }
   
}
