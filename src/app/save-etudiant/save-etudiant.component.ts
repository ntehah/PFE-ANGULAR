import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-save-etudiant',
  templateUrl: './save-etudiant.component.html',
  styleUrls: ['./save-etudiant.component.scss']
})
export class SaveEtudiantComponent implements OnInit {
  selectedNiveouId;
  selectedMoughataaId;
  sujets;
  Niveo
  selectedWilayaId;
  moughataas;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  fillieres;
  niveaus;
  groupes;
  nomFilliere;
  FilliersGroupe
  nieouGrp
  public url1:string="http://localhost:8024/roles";

  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }

  ngOnInit() {
    this.adminService.GetRoles(this.adminService.url26)
    .subscribe(data=>{
      this.groupes=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
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
    
  getNomFillier(nom){
    this.nomFilliere=nom;
  
     console.log(nom);
  }
  

  onsaveEtudiant(dataForm){
    // dataForm.popvisee = parseInt(dataForm.nb011) + parseInt(dataForm.nb1259);
       this.fillieres.map((w)=>{
         if(w.id==this.selectedWilayaId){
           dataForm.wilaya=null;
         }
       })
       this.moughataas.map((m)=>{
         if(m.id==this.selectedMoughataaId)
           dataForm.moughataa = m;
           
       })
      //  this.nieouGrp.map((w)=>{
      //   if(w.id==this.selectedWilayaId){
      //     dataForm.wilaya=null;
      //   }
      // })
      // this.moughataas.map((m)=>{
      //   if(m.id==this.selectedNiveouId)
      //     dataForm.moughataa = m;
          
      // })
      //  this.adminService.getDemographie(this.demo.id).subscribe((demog)=>{
      //    dataForm.demographie = demog;
         //console.log(dataForm);
         this.adminService.SaveEtudiant(this.adminService.url4,dataForm).subscribe((res)=>{
          //  this.router.navigateByUrl("/t/"+this.activatedRoute.snapshot.params.id);
         })
       }
  // onsaveEtudiant(data){
  //   //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
  //   let s=confirm("Etes vous sure?");
  //   if(!s)return;
  //    console.log(data);
  //    this.adminService.SaveEtudiant(this.adminService.url4,data)
  //    .subscribe(data=>{
  //      alert("Ajouter avec succes")
  //    },err=>{
  //      console.log(err)
  //    })
  //   // this.router.navigateByUrl("/ListeEtudiant");
  //  }
   getGroupeFilliere()
  {
    this.adminService.getGroupeFilliere(this.nomFilliere)
    .subscribe(data=>{
      this.FilliersGroupe=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
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


  getNiveouGroupe(Niveo){
    this.selectedWilayaId = Niveo;
    this.adminService.getNiveouGroupe(Niveo).subscribe((data)=>{
      this.nieouGrp = data;
      console.log(this.nieouGrp);
    })
  }

  setSelectedNiveou(mgt1){
    console.log(mgt1)
    this.selectedNiveouId = mgt1;
  }
}
