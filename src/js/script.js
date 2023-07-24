var escolha_usuario = document.getElementsByClassName("qt");
var res = document.querySelector("div#res");
var total = 0;
var min_pontos_para_corno = 30
var imagem = document.createElement("img")
var insta_corno = document.getElementsByClassName("insta-corno");
var resposta = document.querySelector("p#resposta");
let totalPontos = document.querySelector("#total-pontos");
const op3 = document.querySelector("li.op-3");


function Verificar() {
    total =0;

    for (var i = 0; i < escolha_usuario.length; i++) {
        if (escolha_usuario[i].checked) {
            total += 10;
            
        }

    }
    if(total == 0){
        NenhamaOpcaoSelecionada();
        return

    }
    VerificarTotalPontos();
    MostrarPontosNaTela();
    
}

function MostrarPontosNaTela(){
    totalPontos.innerHTML = `${total} pontos `
    
}
function VerificarTotalPontos() {
    
    AlertaDeCornoNaTela();
}

function AlertaDeCornoNaTela() {
    

    if (total <= 10) {
        alert("Cuidado!! grande potencial para se tornar um corno bem manso.");

    }
    else if (total > 10 && total <= 20) {
        imagem.setAttribute("src","./src/img/imgAnimal/c-n1.jpg")
        res.appendChild(imagem)

        resposta.innerHTML = "<p>Detectamos um corno nivel 1!</p> Mas nao se preocupe ,voce ainda tem cura!"
        
    }

    else if (total >= 30 && total < 40) {
        imagem.setAttribute("src","./src/img/coringa.jpg")
        res.appendChild(imagem)

        resposta.innerHTML = "<p>Detectamos um corno nivel 2!</p> Cuidado ,talvez nao tenha mais cura!"

    } else if (total >= 40 && total <=50) {
       

        imagem.setAttribute("src", "./src/img/imgAnimal/c-n3.jpg")
        res.appendChild(imagem)

        alert("Detectamos um corno manso da pior especie!!!!! Favor retirar-se do meu site!");
        resposta.innerHTML = "<strong>Corno Manso</strong> detectado com sucesso! Recomendo rever todos os seus conceitos e tentar novamente mais tarde. Obrigado!"
    }

    res.style.textAlign = "center"
    
}

function NenhamaOpcaoSelecionada() {
    
        alert("Voce nao escolheu nenhuma das alternativa.Isso mostra que voce e um corno manso que nao acredita em si mesmo.")
        imagem.setAttribute("src","./src/img/imgAnimal/c-n4.jpg")
        res.appendChild(imagem)

}


function trocarOpcao5(){

    let op5 = document.querySelector("label#op-5");
    op5.innerHTML = "Sou corno!."

}

function Invisivel(){
    
    if(op3.style.visibility = "visible"){
        op3.style.visibility = "hidden"

    }
   
    
}



