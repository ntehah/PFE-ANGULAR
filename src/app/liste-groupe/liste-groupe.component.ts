import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-liste-groupe',
  templateUrl: './liste-groupe.component.html',
  styleUrls: ['./liste-groupe.component.scss']
})
export class ListeGroupeComponent implements OnInit {
  DI;
  TCM
 GrpProposes;
 timepropose;
 showEtudiant;
 fillieresMDE;
 selectedMoughataaId;
 departements
 sujets;
 selectedWilayaId;
 nieouGrp;
 moughataas;
 mode;
 EtudiantsComptes;
fillieresMQI;
BA;
RS;
FC;
fillieres;
  niveaus;
  groupes;
  nomFilliere;
SE;
selectedNiveouId
groupeFilter;
OnGetEtudiant;
Etudiants;
etudiants;
RH;
role;
IG;
  pages;

  size:number=5;
    currentPage:number=0;
    totalpages:number;
    Pages:Array<number>;

    currentNom:string="";

  url3="/sujets?projection=s1"
//  GrpProposes;
//  timepropose;
//  showEtudiant;
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
// EtudiantsComptes;
// username;
// groupeFilter;
// OnGetEtudiant;
// Etudiants;

  constructor( private adminService:AdminService,
    private authentiservice:AuthentiService,private router:Router) { }
  ngOnInit() {
    this.adminService.GetUser(this.adminService.url10)
    .subscribe(data=>{
      this.departements=data;
      console.log(data);

    },err=>{
    })
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
    this.AffichageGroupe()

}
  AffichageGroupe(){
    this.mode='tous';
  this.adminService.getEntityPage(this.adminService.url32,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.groupes = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}
  onChercher(form: any) {

    this.currentNom=form.nomGrp;
    this.currentPage=0;
    this.chercheGroup();

  }

  chercheGroup() {

    this.adminService.getGroupbyNom(this.currentNom,this.currentPage,this.size)
      .subscribe(data => {
        this.totalpages = data.totalPages;
        this.Pages = new Array(this.totalpages);
        this.groupes = data;
        console.log(this.groupes);
      },error => {
        console.log(error);
      });
  }


  onPageOuvrage(i) {
    this.currentPage=i;
    // this.chercherNiveou();
    this.AffichageGroupe()

  }
  onSupprime(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeGroup(s.id)
        .subscribe(data => {
          this.AffichageGroupe();
        },error => {
          console.log(error);
        })
  }
  onEdit(o) {
    this.router.navigateByUrl("/EditGroup/"+o.id);
  }
  AffichageGroupesDIL3(){
    this.mode='GroupesDIL3'
    this.adminService.getEntityPage(this.adminService.url32,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.groupes = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}

  AffichageGroupesDIM2(){
    this.mode='GroupesDILM2'
    this.adminService.getEntityPage(this.adminService.url32,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.groupes = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}

  onPageGroupesDIL3(i) {
    this.currentPage=i;
    // this.chercherNiveou();
    this.AffichageGroupesDIL3()

  }
  onPageGroupesDIM2(i) {
    this.currentPage=i;
    // this.chercherNiveou();
    this.AffichageGroupesDIM2()

  }

  onPageGroupesIGL3(i) {
    this.currentPage=i;
    // this.chercherNiveou();
    this.AffichageGroupesIGL3()

  }
  onPageGroupesIGM2(i) {
    this.currentPage=i;
    // this.chercherNiveou();
    this.AffichageGroupesIGM2()

  }

  AffichageGroupesIGL3(){
    this.mode='GroupesDIG3'
    this.adminService.getEntityPage(this.adminService.url32,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.groupes = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}

  AffichageGroupesIGM2(){
    this.mode='GroupesIGLM2'
    this.adminService.getEntityPage(this.adminService.url32,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.groupes = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}




  getdepartements(wilaya){
    this.selectedWilayaId = wilaya;
    this.adminService.getDepertementFilliers(wilaya).subscribe((data)=>{
      this.moughataas = data;



      console.log(this.moughataas);
    })
  }

  setSelectedMoughataa(value){

    console.log(value)
    this.selectedMoughataaId = value;}

    getNiveou(wilaya){
      this.selectedWilayaId = wilaya;
      this.adminService.getFillierNiveou(wilaya).subscribe((data)=>{
        this.niveaus = data;
        console.log(this.niveaus);
      })
    }

    setSelectedNiveou(mgt){
      console.log(mgt)

      // console.log( this.niveaus.mgt)
      this.selectedNiveouId = mgt;
      if (mgt == 'Licence3') {
    this.AffichageGroupesDIL3();
   }
   if (mgt == 'Licence1') {
    this.AffichageGroupesDIL3();
   }
   if (mgt == 'Master2') {
    this.AffichageGroupesDIM2();
   }
    }

    // if (value == 'Develeoppment_Informatique') {
    //   this.FiliereDI();
    // }

    // if (value == 'Informatique du Gestion') {
    //   this.FiliereIG();
    // }
    // if (value == 'Reseaux informatiques et Telecommunications') {
    //   this.FilterParRS();
    // }
    // if (value == 'Finance et Comptabilite') {
    //   this.FillierFC();
    // }
    // if (value == 'Banques & Assurances') {
    //   this.FiliereBA();
    // }
    // if (value == 'Gestion des Ressources Humaines') {
    //   this.FiliereRH();
    // }
    //  if (value == 'Statistique appliquee a l Economie') {
    //    this.FiliereSE();
    // }
    // if (value == 'Techniques  Commerciales et Marketing') {
    //   this.FiliereTCM();
    // }

  // }

  getFillierNiveou(Niveo){
    this.selectedWilayaId = Niveo;
    this.adminService.getFillierNiveou(Niveo).subscribe((data)=>{
      this.nieouGrp = data;
      console.log(this.nieouGrp);
    })
  }
}
