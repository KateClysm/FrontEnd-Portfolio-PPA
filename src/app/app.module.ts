import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CreditsComponent } from "./components/credits/credits.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { LoginComponent } from "./components/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { Page404Component } from "./components/page404/page404.component";
import { interceptorProvider } from "./services/interceptor-service";
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/info/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/info/editeducacion/editeducacion.component';
import { EditSkillComponent } from './components/info/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/info/new-skill/new-skill.component';



//Angular define los módulos como clases a través del decorador @NgModule.
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CreditsComponent,
    HomeComponent,
    InfoComponent,
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
