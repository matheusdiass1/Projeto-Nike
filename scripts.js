let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let valor = document.querySelector(".texto-real")

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")
    body.style.background = cor
    valor.style.color = cor

    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);
}

