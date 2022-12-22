import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CreditsComponent } from './components/credits/credits.component';
import { Page404Component } from './components/page404/page404.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/info/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/info/editeducacion/editeducacion.component';
import { NewSkillComponent } from './components/info/new-skill/new-skill.component';
import { EditSkillComponent } from './components/info/edit-skill/edit-skill.component';


//Mis rutas
const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: HomeComponent },
  {path: 'Sobre-Mi', component: InfoComponent },
  {path: 'Experiencia-Y-Proyectos', component: ExperienciaComponent},
  {path: 'Contacto', component: ContactComponent},
  {path: 'Acceso', component: LoginComponent},
  {path: 'Creditos', component: CreditsComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  //Importamos el Router Module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


//Se debe importar este módulo en el AppModule.ts que es el módulo que contendrá los componentes dinámicos