import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Niveaus } from '../models/Niveau.models';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.scss']
})
export class EditDepartementComponent implements OnInit {

  public curenteDepartement;
  public id:number;
  public  url:any;

  constructor(private adminService:AdminService ,private router:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.id=this.activatedRoute.snapshot.params.id;
    this.adminService.getdepartementById(this.id)

      .subscribe(data=>{
        this.curenteDepartement=data;
        console.log(data);
      },err=>{
        console.log(err);})
  }


  updateDepertement(value:any){
    //this.url=this.service.gethost("modifierDomaine/"+this.curentdomaine.id);
    this.adminService.updateDepertement(this.curenteDepartement.id,value)
      .subscribe(data=>{
        alert("Mise à jour effecctuée avec succés");
        this.router.navigateByUrl("/ListeDepertement/");




      },err=>{
        console.log(err);})
  }


}
