import { Component, OnInit } from '@angular/core';
import { AuthentiService } from './authenti.service';
import { ProposerGroupeService } from './proposer-groupe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mon-premier-projet';

constructor (private authService:AuthentiService,private router:Router ){}

  ngOnInit() :void{
    this.authService.loadToken();
  }
isEnsigniant(){
  return this.authService.isEnsigniant();

  }
   isEtudiant(){
      return this.authService.isEtudiant();

      }
   isCordinateur(){
        return this.authService.isCordinateur();
  
        }
  isAdmin(){
          return this.authService.isAdmin();
        }
    isAuthenticated(){
        return this.authService.isAuthenticated;
      }
    
      LogOut(){
        this.authService.LogOut();
        this.authService.tokenRefreshCheck= false;
        this.router.navigateByUrl("/");
       
      }
      // getGrp(){
      //   return this.proposerGroupeService.GetGrp();
      // }
    }
   