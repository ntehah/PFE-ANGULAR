import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  entreprises;
  username;
  role;
  // url2="/sujets";
  public host6:string="http://localhost:8024\ensigniants" ;
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  public url1:string="http://localhost:8024/roles";

  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
    this.adminService.GetRoles(this.adminService.url1)
    .subscribe(data=>{
      this.roles=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    
    this.adminService.GetUser(this.adminService.url2)
    .subscribe(data=>{
      this.users=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  
    
  }
  getUsername(nom){
    this.username=nom;
  
     console.log(nom);
  }
  getRole(nom){
    this.role=nom;
  
     console.log(nom);
  }
  onsaveRoleUser(p,r){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     
    this.adminService.AddRoleToUser(this.username,this.role)
    .subscribe(data=>{
      alert("Ajouter avec succes")
    },err=>{
      console.log(err)
    })
     this.router.navigateByUrl("/SaveUser");
   }
   onsaveUser(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
   
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
}
