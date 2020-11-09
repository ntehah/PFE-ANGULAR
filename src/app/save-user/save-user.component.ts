import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.scss']
})
export class SaveUserComponent implements OnInit {

  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  role;
  mode;
  username;
  etudiants;
  public url1:string="http://localhost:8024/roles";

  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
   
    this.adminService.GetUser(this.adminService.url8)
    .subscribe(data=>{
      this.etudiants=data;
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
  
  onsaveUser(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url5,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
   getUsername(nom){
    this.username=nom;
  
     console.log(nom);
  }
  getRole(nom){
    this.role=nom;
  
     console.log(nom);
  }
  onEffectComnptEtudiant(p,r){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     
    this.adminService.AddRoleToUser(this.username,this.role)
    .subscribe(data=>{
      alert("Ajouter avec succes")
    },err=>{
      console.log(err)
    })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
  

}

