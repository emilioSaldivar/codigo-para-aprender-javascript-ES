let persona = {
    //atributos
    nombre: "Emilio",
    apellido: "Saldivar",
    email: "emiliomatasc@gmail.com",
    edad: 23,
    idioma: "es_py",
    //metodos
    //geters

    get lang(){
        return this.idioma.toUpperCase();
    },
    
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    },

    //sters
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    }, //cada vez que se hace un valor de asignacion se llama a el metodo set por que detecta que se va  ahacer una modificacion a la funcin o propiedad o atributo del objeto en cuestion
}
    persona.lang = "ingles";//al hacer la asignacion se llama a el metodo set pr que se detecta el opetando de igualdad o sea la modificacion del atributo en cuestion pasa por un "VALIDADOR"

    console.log( persona.lang ) ;

    
