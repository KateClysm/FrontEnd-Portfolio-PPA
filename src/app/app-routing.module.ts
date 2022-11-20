import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importamos nuestros componentes
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CreditsComponent } from './components/credits/credits.component';
import { Page404Component } from './components/page404/page404.component';


//Definimos nuestras rutas
const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: HomeComponent },
  {path: 'Sobre-Mi', component: InfoComponent },
  {path: 'Experiencia-Y-Proyectos', component: ExperienceComponent},
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


//Se debe importar este módulo en el AppModule.ts que es el módulo que contendrá los componentes dinámicos