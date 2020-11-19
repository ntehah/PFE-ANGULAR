import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Niveaus } from '../models/Niveau.models';

@Component({
  selector: 'app-edit-niveou',
  templateUrl: './edit-niveou.component.html',
  styleUrls: ['./edit-niveou.component.scss']
})
export class EditNiveouComponent implements OnInit {
  public curenteNiveou;
  public id:number;
  public  url:any;

  constructor(private adminService:AdminService ,private router:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.id=this.activatedRoute.snapshot.params.id;
    this.adminService.getNiveouById(this.id)
      .subscribe(data=>{
        this.curenteNiveou=data;
        console.log(data);
      },err=>{
        console.log(err);})
  }


  onUpdateNiveu(value:any){
    //this.url=this.service.gethost("modifierDomaine/"+this.curentdomaine.id);
    this.adminService.updateNiveou(this.curenteNiveou.id,value)
      .subscribe(data=>{
        alert("Mise à jour effecctuée avec succés");
        // this.router.navigateByUrl("/ListeNiveou/"+this.curenteNiveou.id);
      },err=>{
        console.log(err);})
  }


}
