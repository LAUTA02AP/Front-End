
const check = document.getElementById("redondear");
const selector = document.getElementById('opciones');
var inputA = document.getElementById('inputA'); 
var inputB = document.getElementById('inputB');


var valor1 = selector.value;

    if (valor1 === "0") {
        
        inputA.disabled = true;
        inputB.disabled = true;
    }


selector.addEventListener('change', function() {

    limpiar()
    var valor = selector.value;
        inputA.disabled = false;
        inputB.disabled = false;
    

    switch(valor) {

        case "1":
           
            console.log("Elegiste la opción 1");
            placeholder("Kg","Libras","kg","lbs");
            multiplica(2.20462262,0.45359237);
            break;
        case "2":
            console.log("Elegiste la opción 2");
            placeholder("Gramos","Onzas","g","oz");
            multiplica(0.03527396194958041,28.349523125);
            break;
        case "3":
            console.log("Elegiste la opción 3");
            placeholder("Cm","Pulgadas","cm", "in");
            multiplica(0.3937,2.54);
            break;
        case "4":
            console.log("Elegiste la opción 4");
            placeholder("Metros","Pies","m","ft");
            multiplica(3.2808,0.3048);
            break;
        case "5":
            console.log("Elegiste la opción 5");
            placeholder("Metros","Yardas","m","yd");
            multiplica(1.0936,0.9144);
            break;
        case "6":
            console.log("Elegiste la opción 6");
            placeholder("Km","Millas","km","mi");
            multiplica(0.6214,1.609344);
            break;
        case "7":
            console.log("Elegiste la opción 7");
            placeholder("Litros","Galones","L","gal");
            multiplica(0.264172052,3.7854117891320313);
            break;
        case "8":
            console.log("Elegiste la opción 8");
            placeholder("Celcuis","Fahrenheit","C°","F°");
            temperatura();
            break;
        default:
            console.log("No seleccionaste nada");
    }
});

function placeholder(valor1, valor2,v1,v2){
    inputA.placeholder = valor1;
    inputB.placeholder = valor2;

    const p1 = document.getElementById("p1");
    p1.textContent = v1;

    const p2 = document.getElementById("p2");
    p2.textContent = v2;
}


function multiplica(factor1,factor2 ){
    // uso oninput para no acumular múltiples listeners si cambiás la opción
    inputA.oninput = function () {
        const numero = parseFloat(inputA.value);
        if (!isNaN(numero)){
            if(check.checked){
                
                inputB.value = (numero * factor1).toFixed(2); 

            }else{
                inputB.value = numero * factor1; 
            }
        } else {
            inputB.value = "";
        }
    };


     inputB.oninput = function () {
        const numero = parseFloat(inputB.value);
        if (!isNaN(numero)){ if(check.checked){
            inputA.value = (numero * factor2).toFixed(2);
        }else{
            inputA.value = numero * factor2; 
        }
            
        } else {
            inputA.value = "";
        }
    };
}

function temperatura(){


    const div = document.getElementById("inputs");
    var inputC = document.createElement("input");
    inputC.type = "number";
    inputC.id = "inputC";
    inputC.step ="any";
    inputC.placeholder = "Kelvin";
    div.appendChild(inputC);

    if (inputC){
        const svg = document.getElementById("flecha");
        const copia = svg.cloneNode(true);
        copia.id ="copia";
        inputC.parentNode.insertBefore(copia,inputC);

        const p = document.createElement('p');
        p.textContent = "K°"
        p.id="k"
        inputC.parentNode.insertBefore(p, inputC);

    }
    
    //celcuis
    inputA.oninput = function () {
        var c = parseFloat(inputA.value)
        if (!isNaN(c)){
            if(check.checked){
                inputB.value = ((c*1.8) + 32).toFixed(2);
                inputC.value = (c + 273.15).toFixed(2);

            }else{
                inputB.value = (c*1.8) + 32;
                inputC.value = (c + 273.15);
            }
        }else {
            inputB.value = "";
            inputC.value = "";

        }
    };

    //Fahrenheit
    inputB.oninput = function () {
        var f = parseFloat(inputB.value)
        if (!isNaN(f)){ 
            if(check.checked){
                inputA.value = ((f-32) * (5/9)).toFixed(2);
                inputC.value = ((f-32) * (5/9) + 273.15).toFixed(2);

            }else{
                inputA.value = (f-32) * (5/9);
                inputC.value = (f-32) * (5/9) + 273.15
            }
           
        }else {
            inputA.value = "";
            inputC.value = "";

        }
    };


    //Kelvin
    inputC.oninput = function () {
        var k = parseFloat(inputC.value)
        if (!isNaN(k)){
            if(check.checked){
                inputA.value = (k - 273.15).toFixed(2);
                inputB.value = ((k - 273.15) * (9/5)+ 32).toFixed(2);

            }else{
                inputB.value = ((k - 273.15) * (9/5)+ 32);
                inputA.value = (k - 273.15);
            }
        }else {
            inputB.value = "";
            inputA.value = "";

        }
    };

}


function limpiar(){
    const inputC = document.getElementById("inputC");
    if (inputC) inputC.remove();

    const flechaExtra = document.getElementById("copia");
    if (flechaExtra) flechaExtra.remove();

    const k = document.getElementById("k");
    if (k) k.remove();

    inputA.value = "";
    inputB.value = "";
}

check.addEventListener("change", function () {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = document.getElementById("inputC");
    if (!isNaN(a)) {
        inputA.oninput();
        if (check.checked){ inputA.value = a.toFixed(2);} 
    } else if (!isNaN(b)) {
        inputB.oninput(); 
        if (check.checked) inputB.value = b.toFixed(2);
    } else if (c && !isNaN(parseFloat(c.value))) {
        c.oninput();
        if (check.checked) c.value = parseFloat(c.value).toFixed(2);
    }
});