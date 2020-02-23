//Luis Manuel Jaimes
//Declaramos variables
var num1=0;
var num2=0;
var operador= "";
var resultadoOperacion=0;

function init(){


  //variables
  var resultado = document.getElementById('resultado');
  var borrar = document.getElementById('borrar');
  var cero = document.getElementById('cero');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');

  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var menosigual = document.getElementById('menosigual');
  var menosMenos = document.getElementById('menosMenos');
  var Masigual = document.getElementById('Masigual');
  var masMas = document.getElementById('masMas');
  var modulo = document.getElementById('modulo');
  var igual = document.getElementById('igual');
  var diviigual = document.getElementById('diviigual');
  var porigual = document.getElementById('porigual');
  var modigual = document.getElementById('modigual');



  //Eventos de click
  uno.onclick = function(e){

    resultado.textContent += '1'; 
  }
    dos.onclick = function(e){

    resultado.textContent += '2'; 
  }
   tres.onclick = function(e){

    resultado.textContent += '3'; 
  }
   cuatro.onclick = function(e){

    resultado.textContent += '4'; 
  }
   cinco.onclick = function(e){

    resultado.textContent += '5'; 
  }
   seis.onclick = function(e){

    resultado.textContent += '6'; 
  }
   siete.onclick = function(e){

    resultado.textContent += '7'; 
  }
   ocho.onclick = function(e){

    resultado.textContent += '8'; 
  }
   nueve.onclick = function(e){

    resultado.textContent += '9'; 
  }
   cero.onclick = function(e){

    resultado.textContent += '0'; 
  }
  borrar.onclick = function(e){

    resultado.textContent = ""; 
  }
   

  suma.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "+";
  }
  resta.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "-";
  }
  multiplicacion.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "*";
  }
  division.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "/";
  }
  modulo.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "%";
  }
  menosigual.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "-=";
  }
  Masigual.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "+=";
  }
   porigual.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "*=";
  }
   diviigual.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "/=";
  }
  modigual.onclick = function(e){
        num1 = resultado.textContent;
    resultado.textContent = "";
    operador = "%=";
  }
  menosMenos.onclick = function(e){
            resultado.textContent--;
  }
   masMas.onclick = function(e){
            resultado.textContent++;
             
  }
  igual.onclick = function(e){
          num2 = resultado.textContent;
    operacion();

  }


}

function operacion(){
  switch (operador){
     case "+" : 
      resultadoOperacion = parseInt(num1) + parseInt(num2);
      resultado.textContent = resultadoOperacion;
      break;
      case "-" : 
      resultadoOperacion = parseInt(num1) - parseInt(num2);
      resultado.textContent = resultadoOperacion;
      break;
      case "*" : 
      resultadoOperacion = parseInt(num1) * parseInt(num2);
      resultado.textContent = resultadoOperacion;
      break;
      case "/" : 
      resultadoOperacion = parseInt(num1) / parseInt(num2);
      resultado.textContent = resultadoOperacion;
      break;
      case "%" : 
      resultadoOperacion = parseInt(num1) % parseInt(num2);
      resultado.textContent = resultadoOperacion;
      break;
      case "-=" : 
      num1 = parseInt(num1) - parseInt(num2);
      resultado.textContent = num1;
      break;
      case "+=" : 
      num1 = parseInt(num1) + parseInt(num2);
      resultado.textContent = num1;
      break;
      case "*=" : 
      num1 = parseInt(num1) * parseInt(num2);
      resultado.textContent = num1;
      break;
      case "/=" : 
      num1 = parseInt(num1) / parseInt(num2);
      resultado.textContent = num1;
      break;
      case "%=" : 
      num1 = parseInt(num1) % parseInt(num2);
      resultado.textContent = num1;
      break;

      default:
  }
}