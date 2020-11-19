import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  public curenteGroup;
  public id:number;
  public  url:any;

  constructor(private adminService:AdminService,private router:Router,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.id=this.activatedRoute.snapshot.params.id;
    this.adminService.getGrouptById(this.id)

      .subscribe(data=>{
        this.curenteGroup=data;
        console.log(data);
      },err=>{
        console.log(err);})
  }


  updateGroup(value:any){
    //this.url=this.service.gethost("modifierDomaine/"+this.curentdomaine.id);
    this.adminService.updateGroup(this.curenteGroup.id,value)
      .subscribe(data=>{
        alert("Mise à jour effecctuée avec succés");
        // this.router.navigateByUrl("/ListeDepertement/");




      },err=>{
        console.log(err);})
  }


}
