import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CreditsComponent } from "./components/credits/credits.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { Page404Component } from "./components/page404/page404.component";
import { interceptorProvider } from "./services/interceptor-service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { EditeducacionComponent } from "./components/info/educacion/editeducacion.component";
import { NewExperienciaComponent } from "./components/experiencia-y-proyectos/experiencia/new-experiencia.component";
import { EditExperienciaComponent } from "./components/experiencia-y-proyectos/experiencia/edit-experiencia.component";
import { NeweducacionComponent } from "./components/info/educacion/neweducacion.component";
import { EditSkillComponent } from "./components/info/skills/edit-skill.component";
import { NewSkillComponent } from "./components/info/skills/new-skill.component";
import { EducacionComponent } from "./components/info/educacion/educacion.component";
import { SkillsComponent } from "./components/info/skills/skills.component";
import { ExperienciaYProyectosComponent } from "./components/experiencia-y-proyectos/experiencia-y-proyectos.component";
import { ExperienciaComponent } from "./components/experiencia-y-proyectos/experiencia/experiencia.component";
import { EditAcercaDeComponent } from './components/home/edit-acerca-de.component';
import { ProyectosComponent } from './components/experiencia-y-proyectos/proyectos/proyectos.component';
import { NewProyectoComponent } from './components/experiencia-y-proyectos/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/experiencia-y-proyectos/proyectos/edit-proyecto.component';



//Angular define los módulos como clases a través del decorador @NgModule.
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreditsComponent,
    HomeComponent,
    InfoComponent,
    ExperienciaYProyectosComponent,
    ExperienciaComponent,
    ContactComponent,
    LoginComponent,
    Page404Component,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EducacionComponent,
    SkillsComponent,
    EditAcercaDeComponent,
    ProyectosComponent,
    NewProyectoComponent,
    EditProyectoComponent
  ],
  //Modulos necesarios para que éste módulo funcione correctamente
    imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,     
  ],
  //Proveedores de servicios necesarios
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
