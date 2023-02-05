export class persona{
    //con ? luego del id indicamos que ese dato no es necesario (porque lo generamos automáticamente en el back)
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String,apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}