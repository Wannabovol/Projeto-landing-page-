var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){
    leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top: 55px"
}

