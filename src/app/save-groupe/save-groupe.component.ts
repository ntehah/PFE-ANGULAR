import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-groupe',
  templateUrl: './save-groupe.component.html',
  styleUrls: ['./save-groupe.component.scss']
})
export class SaveGroupeComponent implements OnInit {
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  nieouGrp
  roles;
  users;
  fillieres;
  selectedNiveouId;
  selectedMoughataaId;
 
  Niveo
  selectedWilayaId;
  moughataas;
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

  
  onsaveGroup(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='savegrp';
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url6,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");
   }
   addGrpToEtudiant(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='addGrpToEtudiant';
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveUser(this.adminService.url6,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    this.router.navigateByUrl("/ListeGroupe");
   }
   getMoughataas(wilaya){
    this.selectedWilayaId = wilaya;
    this.adminService.getFillierNiveou(wilaya).subscribe((data)=>{
      this.moughataas = data;
      console.log(this.moughataas);
    })
  }

  setSelectedMoughataa(mgt){
    console.log(mgt)
    this.selectedMoughataaId = mgt;
  }
}