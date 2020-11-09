import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthentificationComponent } from './authentification/authentification.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProposerSujetComponent } from './proposerSujet/proposer-sujet.component';
import { ListeProposeComponent } from './liste-propose/liste-propose.component';
import { ProposeEnsegniantComponent } from './propose-ensegniant/propose-ensegniant.component';
//import { EnseignatComponent } from './enseignat/enseignat.component';
//mport { EnseigniantPropositionComponent } from './enseigniant-proposition/enseigniant-proposition.component';
import { NouvelleProposEnseigniatComponent } from './nouvelle-propos-enseigniat/nouvelle-propos-enseigniat.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SujetEnseigniatComponent } from './sujet-enseigniat/sujet-enseigniat.component';
import { CordinateurComponent } from './cordinateur/cordinateur.component';
// import { NeouveouSujetEnsegniatComponent } from './neouveou-sujet-ensegniat/neouveou-sujet-ensegniat.component';
//import { ListeusrComponent } from './listeusr/listeusr.component';
import { ListeplanningComponent } from './listeplanning/listeplanning.component';
import { PlanningComponent } from './planning/planning.component';
import { ConsultPlaningComponent } from './consult-planing/consult-planing.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EditEnsegnintComponent } from './edit-ensegnint/edit-ensegnint.component';
import { EditProposeEtudiantComponent } from './edit-propose-etudiant/edit-propose-etudiant.component';
import { SoumisionEtudiantComponent } from './soumision-etudiant/soumision-etudiant.component';
import { SujetValiderComponent } from './sujet-valider/sujet-valider.component';
import { SujetdetailleComponent } from './sujetdetaille/sujetdetaille.component';
import { EsseyComponent } from './essey/essey.component';
import { DemandeEncadrantComponent } from './demande-encadrant/demande-encadrant.component';
import { GroupeEncadreComponent } from './groupe-encadre/groupe-encadre.component';
import { AdminComponent } from './admin/admin.component';
import { SaveEtudiantComponent } from './save-etudiant/save-etudiant.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { SaveGroupeComponent } from './save-groupe/save-groupe.component';
import { CompteToEtudiantComponent } from './compte-to-etudiant/compte-to-etudiant.component';
import { SaveEnseigniatComponent } from './save-enseigniat/save-enseigniat.component';
import { SaveDeprtementComponent } from './save-deprtement/save-deprtement.component';
import { SaveFillierComponent } from './save-fillier/save-fillier.component';
import { AddEtudiantToGrpComponent } from './add-etudiant-to-grp/add-etudiant-to-grp.component';
import { AddComptToEnseigniatComponent } from './add-compt-to-enseigniat/add-compt-to-enseigniat.component';
import { ListeFillierComponent } from './liste-fillier/liste-fillier.component';
import { ListeDepertementComponent } from './liste-depertement/liste-depertement.component';

import { ListeGroupeComponent } from './liste-groupe/liste-groupe.component';

import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListEnsegniantComponent } from './list-ensegniant/list-ensegniant.component';
import { AddCopmteToEnsegnignaiComponent } from './add-copmte-to-ensegnignai/add-copmte-to-ensegnignai.component';
import { SaveNiveauComponent } from './save-niveau/save-niveau.component';
import { ListeNiveouComponent } from './liste-niveou/liste-niveou.component';
import { OComponent } from './o/o.component';
import { EtudiantMDEComponent } from './etudiant-mde/etudiant-mde.component';
import { EtudiantMQIComponent } from './etudiant-mqi/etudiant-mqi.component';
import { DepotSujetFilliersComponent } from './depot-sujet-filliers/depot-sujet-filliers.component';
import { SoutenaceFilliersComponent } from './soutenace-filliers/soutenace-filliers.component';
import { SavePlaningSoutenaceComponent } from './save-planing-soutenace/save-planing-soutenace.component';
import { AddJuryComponent } from './add-jury/add-jury.component';

@NgModule({
  declarations: [
    AppComponent,

   // AuthentificationComponent,
   PlanningComponent,
    EtudiantComponent,
    ListeplanningComponent,
    ProposerSujetComponent,

    ListeProposeComponent,

    ProposeEnsegniantComponent,

    //EnseignatComponent,

    //EnseigniantPropositionComponent,

    NouvelleProposEnseigniatComponent,

    LoginComponent,

    SujetEnseigniatComponent,

    CordinateurComponent,

    ConsultPlaningComponent,

    NevbarComponent,

    AcceuilComponent,

    EditEnsegnintComponent,

    EditProposeEtudiantComponent,

    SoumisionEtudiantComponent,

    SujetValiderComponent,

    SujetdetailleComponent,

    EsseyComponent,

    DemandeEncadrantComponent,

    GroupeEncadreComponent,

    AdminComponent,

    SaveEtudiantComponent,

    SaveUserComponent,

    SaveGroupeComponent,

    CompteToEtudiantComponent,

    SaveEnseigniatComponent,

    SaveDeprtementComponent,

    SaveFillierComponent,

    AddEtudiantToGrpComponent,

    AddComptToEnseigniatComponent,

    ListeFillierComponent,

    ListeDepertementComponent,

    ListeGroupeComponent,

    ListeEtudiantComponent,

    ListEnsegniantComponent,

    AddCopmteToEnsegnignaiComponent,

    SaveNiveauComponent,

    ListeNiveouComponent,

    OComponent,

    EtudiantMDEComponent,

    EtudiantMQIComponent,

    DepotSujetFilliersComponent,

    SoutenaceFilliersComponent,

    SavePlaningSoutenaceComponent,

    AddJuryComponent,

    // NeouveouSujetEnsegniatComponent,

    
    //ListeusrComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
