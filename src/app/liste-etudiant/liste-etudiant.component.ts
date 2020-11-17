import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';
import { Etudiant } from '../models/Etudiant.models';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss']
})
export class ListeEtudiantComponent implements OnInit {
  
  url3="/sujets?projection=s1"
  DI;
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
SE;
groupeFilter;
OnGetEtudiant;
Etudiants;
etudiants;
RH;
role;
IG;
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";

totalPages;

groupes
TCM;

AddToGrp;

clickMessage = '';

pages;

size:number=5;
  currentPage:number=1;
  totalpages:number;
  Pages:Array<number>;
  
  currentNom:string="";

  pages1;
  etudiant:Etudiant;
size1:number=5;
  currentPage1:number=1;
  totalpages1:number;
  Pages1:Array<number>;
  
  currentNom1:string="";
  pages2;

  size2:number=5;
    currentPage2:number=1;
    totalpages2:number;
    Pages2:Array<number>;
    
    currentNom2:string="";
selectedNiveouId;
  constructor( private adminService:AdminService,
    private authentiservice:AuthentiService,private router:Router, private proposerGroupeService:ProposerGroupeService) { }
  ngOnInit() {
    this.adminService.GetUser(this.adminService.url10)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.departements=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })

    this.adminService.GetUser(this.adminService.url16)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.fillieresMDE=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.adminService.GetRoles(this.adminService.url15)
    .subscribe(data=>{
      this.groupes=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    this.adminService.GetRoles(this.adminService.url26)
    .subscribe(data=>{
      this.groupes=data;
      console.log(data);

    },err=>{
      console.log(err);
    })
    // this.mode="tous";
    // this.adminService.GetUser(this.adminService.url16)
  
    // // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    // .subscribe(data=>{
    //   this.etudiants=data;
    //   this.totalPages=data["page"].totalPages;
    //   this.pages=new Array<number>(this.totalPages);
    //   console.log(data);

    // },err=>{
    //   // console.log(err);
    // })
    // localStorage.setItem('MATRICULE',(JSON.parse((localStorage.getItem('USER_DATA')) as any).etudiants[0].matriculeetudiant));
    // this.proposerGroupeService.getGroupe(localStorage.getItem('MATRICULE')).subscribe(data => {
     
    //   this.groupeFilter = data;
    //   console.log(data);
    // });
    this.AffichageEtudiants()
  

  }
AffichageEtudiants(){
  this.mode="tous";
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.etudiants = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}
  onChercher(form: any) {

    this.currentNom=form.matriculeetudiant;
    this.currentPage=0;
    this.chercherEtudiant();
  }

  chercherEtudiant() {

    this.adminService.getEtudiantbyNom(this.currentNom,this.currentPage,this.size)
      .subscribe(data => {
        this.totalpages = data.totalPages;
        this.Pages = new Array(this.totalpages);
        this.etudiants = data;
        console.log(this.etudiant);
      },error => {
        console.log(error);
      });
  }
  FiliereSE(){
    this.mode='SE'
    this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
    .subscribe(data => {
      this.totalpages=data.totalPages;
      this.Pages=new Array(this.totalpages);
      this.SE = data;
      //console.log("Babs"+this.adherant.nom);
    },error => {
      console.log(error);
    });
}
 



  FiliereRH(){
    this.mode='RH'
    this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
    .subscribe(data => {
      this.totalpages=data.totalPages;
      this.Pages=new Array(this.totalpages);
      this.IG = data;
      //console.log("Babs"+this.adherant.nom);
    },error => {
      console.log(error);
    });
}


FiliereDI(){
  this.mode='DI'
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.DI = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });}

FilterParRS(){
  this.mode='RS'
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.RS = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}
 
FiliereIG(){
  this.mode='IG'
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.IG = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}
FiliereTCM(){
  this.mode='TCM'
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.TCM = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}
FillierFC(){
  this.mode='FC'
  this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
  .subscribe(data => {
    this.totalpages=data.totalPages;
    this.Pages=new Array(this.totalpages);
    this.FC = data;
    //console.log("Babs"+this.adherant.nom);
  },error => {
    console.log(error);
  });
}
 FiliereBA(){
   this.mode='BA'
   this.adminService.getEntityPage(this.adminService.url29,this.currentPage,this.size)
   .subscribe(data => {
     this.totalpages=data.totalPages;
     this.Pages=new Array(this.totalpages);
     this.BA = data;
     //console.log("Babs"+this.adherant.nom);
   },error => {
     console.log(error);
   });
}
 
 
 

  getRole(grp){
    this.role=grp;
  
     console.log(grp);
  }
  
  AddEtudToGrp(s){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    
    let c=confirm("Etes vous sure?");
    if(!c)return;
     
    this.adminService.addEtudiantToGroup(s.matriculeetudiant,this.role)
    .subscribe(data=>{
      alert("Ajouter avec succes")
    },err=>{
      console.log(err)
    })
     this.router.navigateByUrl("/ListeEtudiant");
   }
  //  FilterParDepertement(value) {
  //   if (value == 1) {
  //     this.FilterParDepertementMQI();
  //   }
  //   else {
  //     this.FilterParDepertementMDE();
  //   }
  // }
   
  getdepartements(wilaya){
    this.selectedWilayaId = wilaya;
    this.adminService.getDepertementFilliers(wilaya).subscribe((data)=>{
      this.moughataas = data;


      
      console.log(this.moughataas);
    })
  }

  setSelectedMoughataa(value){
    
    console.log(value)
    this.selectedMoughataaId = value;

    if (value == 'Develeoppment_Informatique') {
      this.FiliereDI();
    }
    
    if (value == 'Informatique du Gestion') {
      this.FiliereIG();
    }
    if (value == 'Reseaux informatiques et Telecommunications') {
      this.FilterParRS();
    }
    if (value == 'Finance et Comptabilite') {
      this.FillierFC();
    }
    if (value == 'Banques & Assurances') {
      this.FiliereBA();
    }
    if (value == 'Gestion des Ressources Humaines') {
      this.FiliereRH();
    }
     if (value == 'Statistique appliquee a l Economie') {
       this.FiliereSE();
    }
    if (value == 'Techniques  Commerciales et Marketing') {
      this.FiliereTCM();
    }
   
  }

  getFillierNiveou(Niveo){
    this.selectedWilayaId = Niveo;
    this.adminService.getFillierNiveou(Niveo).subscribe((data)=>{
      this.nieouGrp = data;
      console.log(this.nieouGrp);
    })
  }

  setSelectedNiveou(mgt1){
    console.log(mgt1)
    this.selectedNiveouId = mgt1;
  }
  onPageTous(i) {
    this.currentPage=i;
    this.AffichageEtudiants();


  }
  onPageDI(i){
    this.currentPage=i;
    this.FiliereDI();
  }
  onPageIG(i){
    this.currentPage=i;
    this.FiliereIG();
  }

  onPageRH(i){
    this.currentPage=i;
    this.FiliereRH();
  }
  onPageRS(i){
    this.currentPage=i;
    this.FilterParRS();
  }
  onPageTCM(i){
    this.currentPage=i;
    this.FiliereTCM();
  }
  onPageFC(i){
    this.currentPage=i;
    this.FillierFC();
  }
  onPageBA(i){
    this.currentPage=i;
    this.FiliereBA();
  }

  onPageSE(i){
    this.currentPage=i;
    this.FiliereSE();
  }

  onSupprimeDI(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeEtudiant(s.id)
        .subscribe(data => {
          this.FiliereDI();
        },error => {
          console.log(error);
        })
  }
  onSupprime(s) {
    let conf=confirm("est vous sur?");
    if(conf)
      this.adminService.SuprimeEtudiant(s.id)
        .subscribe(data => {
          this.AffichageEtudiants();
        },error => {
          console.log(error);
        })
  }
  onEdit(o) {
    this.router.navigateByUrl("/editNiveou/"+o.id);
  }

}


