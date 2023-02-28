export class Skill {
    id: number;
    nombreS: string;
    descripcionS: string;
    imgS: string;

    constructor(nombreS:string, descripcionS:string, imgS:string){
        this.nombreS = nombreS;
        this.descripcionS = descripcionS ;
        this.imgS = imgS;
    }
}