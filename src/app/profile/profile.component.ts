import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile;
  etudiant;
  enseingant;

  constructor(private adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem("USER_DATA"))
    if (this.profile.ensigniants !== null && this.profile.ensigniants.length !== 0) {
      this.enseingant = this.profile.ensigniants[0];
    }
    if (this.profile.etudiants !== null && this.profile.etudiants.length !== 0) {
      this.etudiant = this.profile.etudiants[0];
    }
    console.log(this.profile);
    console.log(this.enseingant);
    console.log(this.etudiant);


  }

  updateProfile(data) {
    let object = {
      data: data,
      id: this.profile.id,
    }
    if (data.motdepass !== data.confirmermotdepass) {
      alert("mot de pass incorect");
      return;
    }
    console.log(object);
    this.adminService.updateUser(object)
      .subscribe(data => {
        alert("Mise à jour effecctuée avec succés");
        console.log(data);
        this.router.navigateByUrl("/Acceuil");

      }, err => {
        console.log(err);
      })
  }

}
