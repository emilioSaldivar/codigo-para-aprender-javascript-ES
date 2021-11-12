//calculo de la estacion del año en javaScript

let mesDelAnhio = 2;
//abril-junio vprimavera
//julio-septiembre verano
//octubre-diciembre otoño
//enero-marzo invierno
if(mesDelAnhio>=4 && mesDelAnhio<=6){
    console.log("La estacion del año es PRIMAVERA");
}
else if(mesDelAnhio>=7 && mesDelAnhio<=9){
    console.log("La estacion del año es VERANO");
}
else if(mesDelAnhio>=10 && mesDelAnhio<=12){
    console.log("La estacion del año es OTOÑO");
}
else if(mesDelAnhio>=1 && mesDelAnhio<=3){
    console.log("La estacion del año es INVIERNO");
}
else {
    console.log("El mes del año no es correcto");
}