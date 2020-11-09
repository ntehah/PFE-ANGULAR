import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ProposerSujetComponent} from './proposerSujet/proposer-sujet.component';
import { ListeProposeComponent } from './liste-propose/liste-propose.component';
import { ProposeEnsegniantComponent } from './propose-ensegniant/propose-ensegniant.component';
//import { EnseigniantPropositionComponent } from './enseigniant-proposition/enseigniant-proposition.component';
import { NouvelleProposEnseigniatComponent } from './nouvelle-propos-enseigniat/nouvelle-propos-enseigniat.component';
import { LoginComponent } from './login/login.component';
import { SujetEnseigniatComponent } from './sujet-enseigniat/sujet-enseigniat.component';
import { CordinateurComponent } from './cordinateur/cordinateur.component';
import { ListeplanningComponent } from './listeplanning/listeplanning.component';
import { PlanningComponent } from './planning/planning.component';
import { ConsultPlaningComponent } from './consult-planing/consult-planing.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
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
import { SaveFillierComponent } from './save-fillier/save-fillier.component';
import { SaveDeprtementComponent } from './save-deprtement/save-deprtement.component';
import { AddEtudiantToGrpComponent } from './add-etudiant-to-grp/add-etudiant-to-grp.component';
import { ListeFillierComponent } from './liste-fillier/liste-fillier.component';
import { ListeDepertementComponent } from './liste-depertement/liste-depertement.component';
import { ListeGroupeComponent } from './liste-groupe/liste-groupe.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListEnsegniantComponent } from './list-ensegniant/list-ensegniant.component';
import { AddComptToEnseigniatComponent } from './add-compt-to-enseigniat/add-compt-to-enseigniat.component';
import { ListeNiveouComponent } from './liste-niveou/liste-niveou.component';
import { SaveNiveauComponent } from './save-niveau/save-niveau.component';
import { EtudiantMDEComponent } from './etudiant-mde/etudiant-mde.component';
import { EtudiantMQIComponent } from './etudiant-mqi/etudiant-mqi.component';
import { DepotSujetFilliersComponent } from './depot-sujet-filliers/depot-sujet-filliers.component';
import { SoutenaceFilliersComponent } from './soutenace-filliers/soutenace-filliers.component';
import { SavePlaningSoutenaceComponent } from './save-planing-soutenace/save-planing-soutenace.component';
import { AddJuryComponent } from './add-jury/add-jury.component';


const routes: Routes = [
  {path :"SavePlaningSoutenace",component:SavePlaningSoutenaceComponent
},
  {path :"SoutenaceFilliers",component:SoutenaceFilliersComponent
},
  {path :"DepotSujetFilliers",component:DepotSujetFilliersComponent
},
  {path :"EtudiantMDE",component:EtudiantMDEComponent
},
{path :"EtudiantMQI",component:EtudiantMQIComponent
},
  {path :"SaveNiveau",component:SaveNiveauComponent
},
  {path :"ListeNiveou",component:ListeNiveouComponent
},
  {path :"AddEtudiantToGrp",component:AddEtudiantToGrpComponent
},
{path :"AddComptToEnseigniat",component:AddComptToEnseigniatComponent
},
{path :"edit/:id",component:EditEnsegnintComponent
},
  {path :"ListeEtudiant",component:ListeEtudiantComponent
},
{path :"ListEnsegniant",component:ListEnsegniantComponent
},
  {path :"ListeGroupe",component:ListeGroupeComponent
},
  {path :"ListeDepertement",component:ListeDepertementComponent
},
  {path :"ListeFilliers",component:ListeFillierComponent
},
{path :"SaveDeprtement",component:SaveDeprtementComponent
},
{path :"SaveFillier",component:SaveFillierComponent
},
{path :"SaveEnseigniat",component:SaveEnseigniatComponent
},
{path :"CompteToEtudiant",component:CompteToEtudiantComponent
},
{path :"SaveGroupe",component:SaveGroupeComponent
},
{path :"SaveEtudiant",component:SaveEtudiantComponent
},
{path :"SaveUser",component:SaveUserComponent
},
{path :"donnerRole",component:AdminComponent
},
{path :"GroupeEncadreComponent",component:GroupeEncadreComponent
},
{path :"ListeDemandeEncadrant",component:DemandeEncadrantComponent
},
{path :"",redirectTo:"login",pathMatch:"full"
},
{path :"login",component:LoginComponent
},
{path :"essey",component:EsseyComponent
},
{path :"SujetValider",component:SujetValiderComponent
},
{path :"SoumisionEtudiant",component:SoumisionEtudiantComponent
},

{path :"Detaille/:id",component:SujetdetailleComponent
},
{path :"editEtudPropose/:id",component:EditProposeEtudiantComponent
},
{path :"Acceuil",component:AcceuilComponent
},
{path :"propose",component:ProposerSujetComponent
},
{path :"ListeproposeEtudiant",component:ListeProposeComponent
},
{path :"ListeproposeEnseignat",component:SujetEnseigniatComponent
},
{path :"ProposeEnsegniant",component:ProposeEnsegniantComponent
},
{path :"LesPropositions",component:CordinateurComponent
},
{path :"NouvelleProposEnseigniat",component:NouvelleProposEnseigniatComponent
},
{path : "listeplanning",component:ListeplanningComponent},
{path: "planning",component :PlanningComponent},
{path: "Consulterplanning",component :ConsultPlaningComponent},
{path: "addjury",component :AddJuryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
