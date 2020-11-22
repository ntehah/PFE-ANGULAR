import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthentiService } from '../authenti.service';

@Component({
  selector: 'app-soutenace-filliers',
  templateUrl: './soutenace-filliers.component.html',
  styleUrls: ['./soutenace-filliers.component.scss']
})
export class SoutenaceFilliersComponent implements OnInit {
  listIdFilliers:any[]=[];
  sujets;
  url3="/sujets?projection=s1"
  ensigniants;
  roles;
  users;
  departements;
  public url1:string="http://localhost:8024/roles";
  mode;
  fillieres;
  paramatrageAnnees;
  planningSoutenances;
  selectedMoughataaId;

  selectedWilayaId;
  moughataas;
  totalPages
  pages
  constructor( private adminService:AdminService, private router:Router,private authentiservice:AuthentiService) { }
  dropdownSettings = {};
  ngOnInit() {
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'nomfilliere',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
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
    this.adminService.GetUser(this.adminService.url18)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.fillieres=data;

      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.adminService.GetUser(this.adminService.url24)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.planningSoutenances=data;

      console.log(data);

    },err=>{
      // console.log(err);
    })
    this.adminService.GetUser(this.adminService.url22)
    // this.proposerGroupeService.GetSujetpage(this.currentPage,this.size)
    .subscribe(data=>{
      this.paramatrageAnnees=data;

      console.log(data);

    },err=>{
      // console.log(err);
    })

  }
  onItemSelect(item: any) {
    this.listIdFilliers.push(item.id);
  }
  onSelectAll(items: any) {
    for (let i=0;i<items.length;i++){
      this.listIdFilliers.push(items[i].id)
    }
  }

  onsaveGroup(data){
    //  data["ensigniant"]="http://localhost:8024/ensigniants/3679082";
    this.mode='savegrp';
    let s=confirm("Etes vous sure?");
    if(!s)return;
    //  console.log(data);
     this.adminService.SaveUser(this.adminService.url6,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)
     })
    // this.router.navigateByUrl("/ListeproposeEnseignat");

   }
   SavefillierePlaningSoutenace(data){

console.log(data);
    let s=confirm("Etes vous sure?");
    if(!s)return;
     console.log(data);
     this.adminService.SaveNiveau(this.adminService.url25,data)
     .subscribe(data=>{
       alert("Ajouter avec succes")
     },err=>{
       console.log(err)

     })
    //  this.router.navigateByUrl("/ListeFilliers");
   }
   getdepartements(wilaya){
    this.selectedWilayaId = wilaya;
    this.adminService.getDepertementFilliers(wilaya).subscribe((data)=>{
      this.moughataas = data;
      console.log(this.moughataas);
    })
  }

  setSelectedMoughataa(mgt){
    console.log(mgt)
    this.selectedMoughataaId = mgt;
  }
}

