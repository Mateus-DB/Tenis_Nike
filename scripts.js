let body = document.querySelector('body');
let tenis= document.querySelector('.tenis');
let botao= document.querySelector('.button');

function mudarVisual(cor,imagem){

    tenis.classList.add('troca-efeito')
    

    body.style.background=cor
    
    botao.style.background=cor

    setTimeout(()=>{
        tenis.setAttribute('src', imagem)
        tenis.classList.remove('troca-efeito')
       
    },500);

    
}