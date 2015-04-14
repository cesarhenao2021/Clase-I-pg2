/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicio);

var acumulado = 0;

function inicio(){
    document.getElementById('btnMostrarNombre').onclick     = mostrarNombre;
    document.getElementById('btnSumaValores').onclick       = suma;
    document.getElementById('btnSumaTresValores').onclick   = sumaTres;
    document.getElementById('btnSumaMultiplica').onclick    = SumaMultiplica;
    document.getElementById('btnAreaCuadrado').onclick      = areaCuadrado;
    document.getElementById('btnCalcDolares').onclick       = cambioDolares;
    document.getElementById('btnAcumular').onclick          = acumularValor;
    document.getElementById('btnVerResto').onclick          = calculaResto;
    document.getElementById('btnCalculaSumRest').onclick    = sumaResta;
    document.getElementById('btnCuadradoMinus').onclick     = sqrMinus;
    document.getElementById('btnCalcImporte').onclick       = calcularImporte;
    document.getElementById('btnCalcMasIva').onclick        = calcImporteMasIva;
    document.getElementById('btnCalcImc').onclick           = calcularImc;
    document.getElementById('btnFahrenheit').onclick        = obtenerTemperatura;
    document.getElementById('btnMostrarAcumulado').onclick = muestraAcumuldado;
}

function mostrarNombre(){
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var nombreCompleto = apellido + ", " + nombre;
    var divResultado = document.getElementById('divMostrarNombre');
        divResultado.innerHTML = nombreCompleto;
}

function suma(){
    var valorUno = parseInt(document.getElementById('numValor1').value);
    var valorDos = parseInt(document.getElementById('numValor2').value);
    var divResultadoSuma = document.getElementById('divMostrarSuma');
 
    var sumaTotal = valorUno + valorDos;
    divResultadoSuma.innerHTML = sumaTotal;
}

function sumaTres(){
    var valorUno = parseInt(document.getElementById('numUno').value);
    var valorDos = parseInt(document.getElementById('numDos').value);
    var valorTres = parseInt(document.getElementById('numTres').value);
    var sumaTotalTresValores = valorUno + valorDos + valorTres;

    var divResultadoSum = document.getElementById('divSumaTresValores');
        divResultadoSum.innerHTML = sumaTotalTresValores;
}


function SumaMultiplica(){
    
    var valorUno = 0;
    var valorDos = 0;
    var sumaTotal = 0;
    var multTotal = 0;
    var divResultadoSum = 0;
    var divResultadoMult = 0;
    
    divResultadoSum = document.getElementById('divSumaDosVal');
    divResultadoMult = document.getElementById('divMulDosVal');
    valorUno = parseInt(document.getElementById('valUno').value);
    valorDos = parseInt(document.getElementById('valDos').value);

    sumaTotal = valorUno + valorDos;
    multTotal = (valorUno * valorDos);
    
    divResultadoSum.innerHTML = sumaTotal;
    divResultadoMult.innerHTML = multTotal;
}

function areaCuadrado() {

    var valorLado = document.getElementById('valorLado').value;
    var divResultArea = document.getElementById('divAreaCuadrado');
    var areaResult = valorLado * valorLado;

        divResultArea.innerHTML = areaResult;
}

function cambioDolares() {
    var dolarCompra = 25.95;
    var dolarVenta = 26.75;

    var valorPesos = document.getElementById('valorPesosUy').value;
    var divCompra = document.getElementById('divResultCompra');
    var divVenta = document.getElementById('divResultVenta');

    var resultCompra = valorPesos / dolarCompra;
    var resultVenta = valorPesos / dolarVenta;

    divCompra.innerHTML = resultCompra;
    divVenta.innerHTML = resultVenta;
}

function acumularValor() {    
    var valorIngreso = parseInt(document.getElementById('valorIngresado').value);
    acumulado = acumulado + valorIngreso;      
}

 function muestraAcumuldado () {
    var divAcumulado = document.getElementById('divAcumulado');
    divAcumulado.innerHTML = acumulado;
    //acumulado = 0;
}


function calculaResto(){
    var divResto = document.getElementById('divResto');
    var valorEntradaUno = document.getElementById('valorIngresoUno').value;
    var valorEntradaDos = document.getElementById('valorIngresoDos').value;

    var resto = valorEntradaUno % valorEntradaDos;

    divResto.innerHTML = resto;
}

function sumaResta(){
    
    var divSumRest = document.getElementById('divSumRest');
    var entradaUno = parseInt(document.getElementById('valorEntrada1').value);
    var entradaDos = parseInt(document.getElementById('valorEntrada2').value);
    var entradaTres =  parseInt(document.getElementById('valorEntrada3').value);
    
    var resultadoSumRest = (entradaUno + entradaDos) - entradaTres;
    
    divSumRest.innerHTML = resultadoSumRest;
}


function sqrMinus(){
    var divCuadradoMinus = document.getElementById('divSqrMinus');
    
    var valorEntradaUno = parseInt(document.getElementById('entradaUno').value);
    var valorEntradaDos = parseInt(document.getElementById('entradaDos').value);
    var valorEntradaTres = parseInt(document.getElementById('entradaTres').value);
    
    var resultCuadradoMinus = (valorEntradaUno * valorEntradaUno) - (valorEntradaDos + valorEntradaTres);
    
    divCuadradoMinus.innerHTML = resultCuadradoMinus;
}


function calcularImporte(){
    var divImporte = document.getElementById('divImporte');
    var valorIngreso = document.getElementById('valorIngreso').value;
    var valorImporte = document.getElementById('valorImporte').value;
    
    var importeResult = (valorIngreso * valorImporte)/100;
    
    divImporte.innerHTML = importeResult;  
}

function calcImporteMasIva() {
    var iva = 22;
    var divIva = document.getElementById('divImporteIva');
    var valorSinIva = parseInt(document.getElementById('valorSinIva').value);
    
    var resultConIva = ((valorSinIva * iva)/100) + valorSinIva;
    
    divIva.innerHTML = resultConIva;
    
}

function calcularImc(){
    var divImc = document.getElementById('divImc');
    var valorPeso = document.getElementById('valorPeso').value;
    var valorAltura = document.getElementById('valorAltura').value;
    
    var imc = (valorPeso)/(valorAltura * valorAltura);
    
    divImc.innerHTML = imc;
}

function obtenerTemperatura(){
    var numChirridos = document.getElementById('numChirridos').value;
    var divFahrenheit = document.getElementById('divFahrenheit');
    var divCelsius = document.getElementById('divCelsius');
    
    var resulFahrenheit = 50 +( (numChirridos - 40) / 4 ); 
    var resulCelsius = (resulFahrenheit - 32)* 5/9;
    
    divFahrenheit.innerHTML = resulFahrenheit;
    
    document.getElementById('btnCelsius').onclick = enCelsius;
    
    function enCelsius(){
        divCelsius.innerHTML = resulCelsius;   
    }
}