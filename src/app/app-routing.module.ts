import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EditAcercaDeComponent } from './components/home/edit-acerca-de.component';

import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CreditsComponent } from './components/credits/credits.component';
import { Page404Component } from './components/page404/page404.component';

import { ExperienciaYProyectosComponent } from './components/experiencia-y-proyectos/experiencia-y-proyectos.component';
import { EditExperienciaComponent } from './components/experiencia-y-proyectos/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-y-proyectos/experiencia/new-experiencia.component';

import { InfoComponent } from './components/info/info.component';
import { NeweducacionComponent } from './components/info/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/info/educacion/editeducacion.component';
import { NewSkillComponent } from './components/info/skills/new-skill.component';
import { EditSkillComponent } from './components/info/skills/edit-skill.component';
import { NewProyectoComponent } from './components/experiencia-y-proyectos/proyectos/new-proyecto.component';


//Mis rutas
const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},

  {path: 'Inicio', component: HomeComponent },
  {path: 'editAcercaDe/:id', component: EditAcercaDeComponent},

  {path: 'Sobre-Mi', component: InfoComponent },
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},  
  {path: 'editskill/:id', component: EditSkillComponent},

  {path: 'Experiencia-Y-Proyectos', component: ExperienciaYProyectosComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  

  {path: 'Contacto', component: ContactComponent},
  {path: 'Acceso', component: LoginComponent},
  {path: 'Creditos', component: CreditsComponent},

  {path: '**', component: Page404Component}
];

@NgModule({
  //Importamos el Router Module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }