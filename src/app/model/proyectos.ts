export class Proyectos {
    id? : number;
    nombreP : string;
    descripcionP : string;
    fechaP : string;
    linkP: string;
    gitP: string;
    imgP: string;

    constructor(nombreP: string, descripcionP: string, fechaP: string, linkP: string, gitP: string, imgP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.linkP = linkP;
        this.gitP = gitP;
        this.imgP = imgP;
    }
}