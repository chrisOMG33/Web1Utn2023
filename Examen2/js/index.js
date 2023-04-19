function escribir(n){
  var caja = document.calculadora.txtcaja.value;
  document.calculadora.txtcaja.value=caja + n;
  }
  function calcular(){
  var caja = document.calculadora.txtcaja.value;
  document.calculadora.txtcaja.value=eval(caja);
  }
