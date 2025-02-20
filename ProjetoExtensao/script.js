//Carrossel
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    slides[currentSlide].classList.add('active');


    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active'); 
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
        slides[currentSlide].classList.add('active'); 
        document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlide * 100}%)`; 
    }

    document.querySelector('.next').addEventListener('click', () => {
        changeSlide(1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        changeSlide(-1);
    });


    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            changeSlide(1);
        } else if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        }
    });


    setInterval(() => {
        changeSlide(1);
    }, 4000); 
});


//Botão Modo Claro e Escuro
const meuBotaoSwitch = document.querySelector('#flexSwitchCheckDefault');
const textoEscuro = document.querySelectorAll('.texto-escuro');
const fundoClaro = document.querySelectorAll('.fundo-claro');
const botao = document.querySelector('#botao-modo');
const body = document.querySelector('body');
const box = document.querySelectorAll('.box-cinza');
const saiba = document.querySelector('.botao-saiba');

meuBotaoSwitch.addEventListener('change', function() {
    if (meuBotaoSwitch.checked) {
        // Modo Claro
        textoEscuro.forEach(element => {
            element.style.color = "black";
        });
        fundoClaro.forEach(element => {
            element.style.background = "white"; 
        });
        box.forEach(element => {
            element.style.background = "rgba(255, 255, 255, 0.9)"; 

        });
        botao.style.color = "black";
        botao.textContent = "Modo Escuro"
        body.style.background = "white";
    } else {
        // Modo Escuro
        textoEscuro.forEach(element => {
            element.style.color = "white";
        });
        fundoClaro.forEach(element => {
            element.style.background = "black";
        });
        box.forEach(element => {
            element.style.background = "rgb(78, 78, 78)"; 

        });
        botao.style.color = "white";
        botao.textContent = "Modo Claro"
        body.style.background = "black"; 
    }
});
    document.querySelectorAll('.img-clickable').forEach(img => {
        img.addEventListener('click', () => {
          const modalImage = document.getElementById('modalImage');
          modalImage.src = img.src; 
        });
      });