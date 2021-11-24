"use strict"
//promesa con asyn await y time out
async function funcionCombinacionAsyncAwaitSetTimeout(){
    let miPromesa = new Promise(
        resolver => {
            setTimeout( () => resolver("promesa con await y setTimeOut\n"), 3000);
        }
    );
    console.log(await miPromesa);
}

funcionCombinacionAsyncAwaitSetTimeout();