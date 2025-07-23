let filas = 20
let columnas = 20
let lado = 60 //anchura, son px  

let minas = filas * columnas  * 0.10 //el %10 del area de las seldas van a tener mians

let tablero = [] //esto es para el tablero logico


nuevoJuego()
//esta funcion ejecuta la generacion de tablero
function nuevoJuego(){
    generacionTableroHTML() //estructura visual
    generarTableroJuego() // genera minas y pistas
    refrescarTablero()//estructura logica para mostrar elementos

}

function generacionTableroHTML(){   //este es el tablero visual 
    let html =""
    //aca recorro las f y las c
    for (let f = 0; f <filas; f++){
        html += `<tr>`
        for (let c = 0; c < columnas; c++){
            //genero los elemento de la matriz con sus respectivas coordenadas, formando una matriz

            html += `<td id="celda-${c}-${f}"  style = "width:${lado}px,heigth:${lado}px">`
                html += `${c}-${f}`
            html += `</td>`
        }
        html += `</tr>`
    }
    let tableroHTML = document.getElementById("tablero")

    tableroHTML.innerHTML = html

    //personalizo el ancho y alto del tablero

    tableroHTML.style.width = columnas * lado + "px"
    tableroHTML.style.height = filas * lado+ "px"
}





// comportamiento visual dependidiendo del estado del tablero
function refrescarTablero(){
     for (let f = 0; f <filas; f++){
        for (let c = 0; c < columnas; c++){

        }
    }
}


    //seguimiento logico a lo que el jugador no debe ver 
function generarTableroJuego(){
    vaciarTablero()//vaciar tablero para que hayan interferencias con partidas pasadas
    ponerMinas()//poner minas 
    contadoresMinas()//poner las pistas de celdas osea los contadores
}

function vaciarTablero(){
//poner el tablero en estado inicial
    tablero = []
    for (let c = 0; c < columnas; c++) {
        tablero.push([]); 
    }
}



function ponerMinas(){
    for (let i = 0; i < minas; i++){
        let c
        let f 
        //aca un do while para que las minas se interpongan
        do{
            c = Math.floor(Math.random()* columnas)
            f = Math.floor(Math.random()* filas)
        } while (tablero[c][f]);
        tablero[c][f] ={valor: -1} //se inserta la mina , se trata la casilla valor como un objeto 

    }
}


function contadoresMinas(){
    for (let f = 0; f <filas; f++){
        for (let c = 0; c < columnas; c++){
            if (!tablero[c][f]){
                tablero[c][f] = {valor:0} //pongo todo en 0 provisionalmente
            }

        }
    }
}
