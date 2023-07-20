var escolha_usuario = document.getElementsByClassName("qt");
var res = document.querySelector("div#res");
var total = 0;
var min_pontos_para_corno = 30
var imagem = document.createElement("img")
var insta_corno = document.getElementsByClassName("insta-corno");
var resposta = document.querySelector("p#resposta");



CornoInsta();
function Verificar() {
    total = 0;

    for(var i =0; i < escolha_usuario.length; i++){
        if (escolha_usuario[i].checked) {
            total += 10;
            if(escolha_usuario[0].checked){
                total += 100;


            }
            VerificarTotalPontos();
            // alert("Corno");
            
    
        }
            
        

    }
    NenhamaOpcaoSelecionada();
    

}

function VerificarTotalPontos(){
    
    if(total >= min_pontos_para_corno){
        AlertaDeCornoNaTela();
        

    }else if(total <=10){
        alert("Cuidado!! grande potencial para se tornar um corno bem manso.");

    }
}

function AlertaDeCornoNaTela(){
    alert("Detectamos um corno manso da pior especie!!!!! Favor retirar-se do meu site!");
    resposta.innerHTML = "<strong>Corno Manso</strong> detectado com sucesso! Recomendo rever todos os seus conceitos e tentar novamente mais tarde. Obrigado!"
    imagem.setAttribute("src", "./img/coringa.jpg")
    res.appendChild(imagem)
    res.style.textAlign = "center"
}

function CornoInsta(){
    
    for(var i = 0; i< insta_corno.length;i++){
      
            insta_corno[i].addEventListener("click", AlertaDeCornoNaTela);

    }
}

function NenhamaOpcaoSelecionada(){
    if(total == 0){
        alert("Voce nao escolheu nenhuma das alternativa.Isso mostra que voce e um corno manso que nao acredita em si mesmo.")
    
    }
}

   
