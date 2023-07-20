var escolha_usuario = document.getElementsByClassName("qt");
var res = document.querySelector("div#res");
var total = null;


function Verificar() {
    if (escolha_usuario[0].checked) {
        total += 100;
        VerificarTotalPontos();
        // alert("Corno");
        

    }

}

function VerificarTotalPontos(){
    if(total >=100){
        alert("Corno manso da pior especie!");

    }
}