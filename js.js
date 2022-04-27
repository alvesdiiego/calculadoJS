function somar() {
  var campo1 = document.querySelector(".campo1mais").value;
  var campo2 = document.querySelector(".campo2mais").value;

  
  var resultado = parseInt(campo1) + parseInt(campo2);
  document.querySelector(".resultadomais").innerHTML = resultado; 
}

function diminuir() {
    var campo1menos =  document.querySelector(".campo1menos").value;
    var campo2menos = document.querySelector(".campo2menos").value;

    var resultadomenos = parseInt(campo1menos) - parseInt(campo2menos);
    document.querySelector(".resultadomenos").innerHTML = resultadomenos;    
}

function multiplicar() {
    var campo1vezes = document.querySelector(".campo1vezes").value;
    var campo2vezes = document.querySelector(".campo2vezes").value;

    var resultadovezes = parseInt(campo1vezes) * parseInt(campo2vezes);
    document.querySelector(".resultadovezes").innerHTML = resultadovezes;
}

function dividir() {
    var campo1divisao = document.querySelector(".campo1divisao").value;
    var campo2divisao = document.querySelector(".campo2divisao").value;

    var resultadodivisao = parseInt(campo1divisao) / parseInt(campo2divisao);
    document.querySelector(".resultadodivisao").innerHTML = resultadodivisao;
}

function tabuada(){
    var campotabuada = document.querySelector(".campotabuada").value;
    var resultadotabuada = '';
  
    for(var count=1; count<=10; count++)
        resultadotabuada += campotabuada + " x " + count + "  =  " + campotabuada * count + " <br/> ";
     
    document.querySelector(".resultadotabuada").innerHTML = resultadotabuada;
}