"use strict"
//async con await
async function funcionAsyncConAwait(){
    let miPromesa = new Promise( resolved => {
        resolved("Promesa con await");
    });

    console.log( await miPromesa );
}

funcionAsyncConAwait();
