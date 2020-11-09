import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';
import { ProposerGroupeService } from '../proposer-groupe.service';

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss']
})
export class ListeEtudiantComponent implements OnInit {
  DI;
  url3="/sujets?projection=s1"
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
 url9="/users?projection=s3";
 timepropose1 =new Date('2021-07-17');
   a=new Date('2020-07-17')
url6="/paramatragePeriodeProposes";
EtudiantsComptes;
fillieresMQI;
groupeFilter;
OnGetEtudiant;
Etudiants;
RH;
role;
IG;
totalPages;
public size:number=5;
pages;
etudiants;
groupes
TCM;
public currentPage:number=0;
AddToGrp;
BA;
clickMessage = '';
RS;
FC;
SE;
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
    this.mode="tous";
    this.adminService.GetUser(this.adminService.url16)
  
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.etudiants=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })
    // localStorage.setItem('MATRICULE',(JSON.parse((localStorage.getItem('USER_DATA')) as any).etudiants[0].matriculeetudiant));
    // this.proposerGroupeService.getGroupe(localStorage.getItem('MATRICULE')).subscribe(data => {
     
    //   this.groupeFilter = data;
    //   console.log(data);
    // });
  }
  FiliereSE(){
    this.mode='SE'
  this.adminService.GetUser(this.adminService.url16)
  // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
  .subscribe(data=>{
    this.SE=data;
    this.totalPages=data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages);
    console.log(data);

  },err=>{
    // console.log(err);
  })
}
 



  FiliereRH(){
    this.mode='RH'
  this.adminService.GetUser(this.adminService.url16)
  // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
  .subscribe(data=>{
    this.RH=data;
    this.totalPages=data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages);
    console.log(data);

  },err=>{
    // console.log(err);
  })
}


FiliereDI(){
  this.mode='DI'
this.adminService.GetUser(this.adminService.url16)
// this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
.subscribe(data=>{
  this.DI=data;
  this.totalPages=data["page"].totalPages;
  this.pages=new Array<number>(this.totalPages);
  console.log(data);

},err=>{
  // console.log(err);
})}

FilterParRS(){
  this.mode='RS'
this.adminService.GetUser(this.adminService.url16)
// this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
.subscribe(data=>{
  this.RS=data;
  this.totalPages=data["page"].totalPages;
  this.pages=new Array<number>(this.totalPages);
  console.log(data);

},err=>{
  // console.log(err);
})
}
 
FiliereIG(){
  this.mode='IG'
this.adminService.GetUser(this.adminService.url16)
// this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
.subscribe(data=>{
  this.IG=data;
  this.totalPages=data["page"].totalPages;
  this.pages=new Array<number>(this.totalPages);
  console.log(data);

},err=>{
  // console.log(err);
})
}
FiliereTCM(){
  this.mode='TCM'
this.adminService.GetUser(this.adminService.url16)
// this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
.subscribe(data=>{
  this.TCM=data;
  this.totalPages=data["page"].totalPages;
  this.pages=new Array<number>(this.totalPages);
  console.log(data);

},err=>{
  // console.log(err);
})
}
FillierFC(){
  this.mode='FC'
  this.adminService.GetUser(this.adminService.url16)
  // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
  .subscribe(data=>{
    this.FC=data;
    this.totalPages=data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages);
    console.log(data);
 
  },err=>{
    // console.log(err);
  })
}
 FiliereBA(){
   this.mode='BA'
 this.adminService.GetUser(this.adminService.url16)
 // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
 .subscribe(data=>{
   this.BA=data;
   this.totalPages=data["page"].totalPages;
   this.pages=new Array<number>(this.totalPages);
   console.log(data);

 },err=>{
   // console.log(err);
 })
}
  FilterParTous(){
    this.mode='tous'
  this.adminService.GetUser(this.adminService.url16)
  // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
  .subscribe(data=>{
    this.etudiants=data;
    this.totalPages=data["page"].totalPages;
    this.pages=new Array<number>(this.totalPages);
    console.log(data);

  },err=>{
    // console.log(err);
  })
}
 
  FilterParDepertementMQI(){
    this.mode='MQI';
    this.adminService.GetUser(this.adminService.url16)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.fillieresMQI=data;
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(data);

    },err=>{
      // console.log(err);
    })
  }
  FilterParDepertementMDE(){
    this.mode='MDE';
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
}


