import {Component, OnInit} from '@angular/core';
import {AuthentiService} from './authenti.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mon-premier-projet';
  constructor(private authService: AuthentiService, private router: Router) {
  }

  name;

  ngOnInit(): void {
    this.authService.loadToken();
    this.authService.loadRoles();
    console.log(this.authService.connecter)
  }

  onClickProfile() {
    console.log(name);
    this.router.navigateByUrl("/profile")
  }

  isEnsigniant() {
    return this.authService.isEnsigniant();

  }

  isEtudiant() {
    return this.authService.isEtudiant();

  }

  isCordinateur() {
    return this.authService.isCordinateur();

  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  LogOut() {
    this.authService.LogOut();
    this.authService.loadRoles();
    this.authService.tokenRefreshCheck = false;
    this.router.navigateByUrl("/");
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  // getGrp(){
  //   return this.proposerGroupeService.GetGrp();
  // }
}
