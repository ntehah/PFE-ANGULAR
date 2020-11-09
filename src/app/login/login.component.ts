import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router } from "@angular/router";
import { AuthentiService } from "../authenti.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthentiService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }
  onLogin(data) {
    this.authService.login(data).subscribe(
      (resp) => {
        //console.log(resp);

        let jwt = resp.headers.get("Authorization");
        this.authService.saveToken(jwt);
        this.authService.getActualUser(data.username).subscribe(
          (x) => {
            console.log(data);
            localStorage.setItem("USER_DATA", JSON.stringify(x));
          },
          (err) => {
            localStorage.setItem("USER_DATA", err.error.text);
          }
        );
        localStorage.setItem("USER_NAME", JSON.stringify(resp));
        this.router.navigateByUrl("/Acceuil");
      },
      (err) => {}
    );
  }
  isEnsigniant() {
    return this.authService.isEnsigniant();
  }
  isEtudiant() {
    return this.authService.isEtudiant();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
