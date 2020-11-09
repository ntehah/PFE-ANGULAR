import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-add-etudiant-to-grp',
  templateUrl: './add-etudiant-to-grp.component.html',
  styleUrls: ['./add-etudiant-to-grp.component.scss']
})
export class AddEtudiantToGrpComponent implements OnInit {
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  etudiants;
  users;
  role;
  username;
  groupes;
  public url1:string="http://localhost:8024/roles";

  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
    this.adminService.GetRoles(this.adminService.url15)
    .subscribe(data=>{
      this.groupes=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    
    this.adminService.GetUser(this.adminService.url8)
    .subscribe(data=>{
      this.etudiants=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
  
    
  }
  getRole(grp){
    this.role=grp;
  
     console.log(grp);
  }
  getUsername(nom){
    this.username=nom;
  
     console.log(nom);
  }

  AddEtudToGrp(r,p){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let s=confirm("Etes vous sure?");
    if(!s)return;
     
    this.adminService.addEtudiantToGroup(this.role,this.username)
    .subscribe(data=>{
      alert("Ajouter avec succes")
    },err=>{
      console.log(err)
    })
     this.router.navigateByUrl("/SaveEtudiant");
   }
  
}

