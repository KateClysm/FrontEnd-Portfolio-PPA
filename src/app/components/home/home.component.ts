import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  persona: persona = new persona("","","","");
  isLogged= false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {    
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.getPersona().subscribe(data => {this.persona = data})}
}