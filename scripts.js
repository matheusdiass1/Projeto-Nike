let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let valor = document.querySelector(".texto-real")
const botao = document.querySelector("#carrinho-botao")

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")
    body.style.background = cor
    valor.style.color = cor
    botao.style.background = cor

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);
}

