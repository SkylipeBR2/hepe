const pontos = document.querySelectorAll('.ponto');
const imagens = document.querySelectorAll('.itemslider');
const navArrowR = document.querySelector('.right');
const navArrowL = document.querySelector('.left');
const slider = document.querySelector('.slider');
let slideAtual = 0;

console.log(imagens);
navArrowR.addEventListener('click', proximo);
navArrowL.addEventListener('click', anterior);



let repetidor = function () {
    autoPlay = setInterval(autoProximo, 5000)
}
repetidor();

slider.addEventListener('mouseover', () => {
    clearInterval(autoPlay)
})
slider.addEventListener('mouseout', repetidor);

function proximo() {
    slideAtual++;
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('visivel')    
        pontos[i].classList.remove('cheio')   
    }
    
    if(slideAtual <= imagens.length - 1) {
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio')
    } else {
    slideAtual = 0
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio');}
    console.log(slideAtual);
}

function autoProximo() {
    slideAtual++;
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('visivel')    
        pontos[i].classList.remove('cheio')   
    }
    
    if(slideAtual <= imagens.length - 1) {
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio')
    } else {
    slideAtual = 0
    imagens[slideAtual].classList.toggle('visivel');
    pontos[slideAtual].classList.toggle('cheio');}
    
    console.log(slideAtual);
}

function anterior() {
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('visivel')    
        pontos[i].classList.remove('cheio')   
    }
    if (slideAtual === 0) {
        imagens[imagens.length-1].classList.toggle('visivel')
        pontos[pontos.length -1].classList.toggle('cheio');
        slideAtual = imagens.length-1;
    }  else {
        slideAtual--;
        imagens[slideAtual].classList.toggle('visivel')
        pontos[slideAtual].classList.toggle('cheio');
    }
    console.log(slideAtual);
}

// button-h

const burguer = document.querySelector('.burguer');
const nav = document.querySelector('.nav');
const xburguer = document.querySelector('.fechar-burguer');

burguer.addEventListener('click' , abrirBurguer)
xburguer.addEventListener('click' , fecharBurguer)

function abrirBurguer() {
    console.log('O teste foi um grande sucesso!!')
    nav.classList.add('burguerAberto')
    burguer.style.display = 'none'
    xburguer.style.display = 'block'
}

function fecharBurguer() {
    console.log('O teste foi um grande sucesso!!')
    nav.classList.remove('burguerAberto')
    burguer.style.display = 'block'
    xburguer.style.display = 'none'
}


// modal

let btnmodal = document.querySelector('.btnmodal')

btnmodal.addEventListener('click', abrirModal)

function abrirModal() {
    document.querySelector('.janelamodal').style.display = 'block'
    overlay.style.display = 'block'
    principal.style.display = 'block'
}

let close = document.querySelector('.close')
let overlay = document.querySelector('.overlay')


close.addEventListener('click', fecharModal) //ou 'mouseover' na ação

function fecharModal() {
    document.querySelector('.janelamodal').style.display = 'none'
    overlay.style.display = 'none'
}

// arrow-button

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
