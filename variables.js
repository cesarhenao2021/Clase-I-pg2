/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(inicio);

function inicio(){
    document.getElementById('btnMostrarNombre').onclick = mostrarNombre;
    document.getElementById('btnSumaValores').onclick = suma;
    document.getElementById('btnSumaTresValores').onclick = sumaTres;
    document.getElementById('btnSumaMultiplica').onclick = SumaMultiplica;
}

function mostrarNombre(){
    var nombre = "";
    var apellido = "";
    var nombreCompleto = "";
    
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var nombreCompleto = nombre + ", " + apellido;
    var divResultado = document.getElementById('divMostrarNombre');
    divResultado.innerHTML = nombreCompleto ;
}

function suma(){
    
    var valorUno = 0;
    var valorDos = 0;
    var sumaTotal = 0;
    var divResultadoSum = 0;
    
    divResultadoSum = document.getElementById('divMostrarSuma');
    valorUno = parseInt(document.getElementById('numValor1').value);
    valorDos = parseInt(document.getElementById('numValor2').value);
 
    sumaTotal = valorUno + valorDos;
    
    divResultadoSum.innerHTML = sumaTotal;
}

function sumaTres(){
    
    var valorUno = 0;
    var valorDos = 0;
    var valorTres = 0;
    var sumaTotal = 0;
    var divResultadoSum = 0;
    
    divResultadoSum = document.getElementById('divSumaTresValores');
    valorUno = parseInt(document.getElementById('numUno').value);
    valorDos = parseInt(document.getElementById('numDos').value);
    valorTres = parseInt(document.getElementById('numTres').value);
 
    sumaTotal = valorUno + valorDos + valorTres;
    
    divResultadoSum.innerHTML = sumaTotal;
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

