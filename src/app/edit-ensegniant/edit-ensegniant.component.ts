import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-ensegniant',
  templateUrl: './edit-ensegniant.component.html',
  styleUrls: ['./edit-ensegniant.component.scss']
})
export class EditEnsegniantComponent implements OnInit {

  public curenteEnsegniant;
  public id:number;
  public  url:any;

  constructor(private adminService:AdminService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.id=this.activatedRoute.snapshot.params.id;
    this.adminService.getEnsegniatById(this.id)

      .subscribe(data=>{
        this.curenteEnsegniant=data;
        console.log(data);
      },err=>{
        console.log(err);})
  }


  updateEnsegniat(value:any){
    //this.url=this.service.gethost("modifierDomaine/"+this.curentdomaine.id);
    this.adminService.updateEnsegniat(this.curenteEnsegniant.id,value)
      .subscribe(data=>{
        alert("Mise à jour effecctuée avec succés");
        this.router.navigateByUrl("/ListeDepertement/");




      },err=>{
        console.log(err);})
  }


}
