const mostrarReloj = () =>{
    let fecha =  new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Marz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let diaDelMes = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anho = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${diaDelMes} ${mes}, ${anho}`;
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
}
// formato de la hora
const formatoHora = (hora ) =>{
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

// se simula la actualizacion de los segundos en tiempo real
setInterval(mostrarReloj, 1000);