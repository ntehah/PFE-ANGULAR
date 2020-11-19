import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-fillier',
  templateUrl: './edit-fillier.component.html',
  styleUrls: ['./edit-fillier.component.scss']
})
export class EditFillierComponent implements OnInit {

  public curenteGroup;
  public id:number;
  public  url:any;
  curenteFillier;
  constructor(private adminService:AdminService,private router:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.id=this.activatedRoute.snapshot.params.id;
    this.adminService.getFillierById(this.id)

      .subscribe(data=>{
        this.curenteFillier=data;
        console.log(data);
      },err=>{
        console.log(err);})
  }


  updateGroup(value:any){
    //this.url=this.service.gethost("modifierDomaine/"+this.curentdomaine.id);
    this.adminService.updateFilliere(this.curenteFillier.id,value)
      .subscribe(data=>{
        alert("Mise à jour effecctuée avec succés");
        // this.router.navigateByUrl("/ListeDepertement/");




      },err=>{
        console.log(err);})
  }


}