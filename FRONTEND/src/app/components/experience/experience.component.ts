import { Component, OnInit } from '@angular/core';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// export class ExperienceComponent implements OnInit {

//   experienciaList:any;
//   proyectosList:any;

//   constructor(private datosPortfolio:PortfolioService) { }

//   ngOnInit(): void {
//     this.datosPortfolio.obtenerDatos().subscribe(data =>{
//       this.experienciaList=data.experiencia;

//       this.proyectosList=data.proyectos;
//     })
//   }
// }
