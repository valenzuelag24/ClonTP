document.addEventListener("DOMContentLoaded", () => {

    // Carrusel 1 
    const track = document.querySelector('.carrusel-track');
    const track2 = document.querySelector('.carrusel-track_2');
    const track3 = document.querySelector('.carrusel-track_3');

    const leftBtn = document.getElementById('box_body4_right_carrusel_botones_left');
    const rightBtn = document.getElementById('box_body4_right_carrusel_botones_right');

    if (track && leftBtn && rightBtn) {
        const totalSlides1 = track.children.length;
        const slides1 = track.children;
        const slides2 = track2.children;
        const slides3 = track3.children;

        
        let currentIndex1 = 0;
        let currentIndex2 = 1;
        let currentIndex3 = 2;
       

        function animarBaraja(slides) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('animar-baraja'); // Reiniciar si ya tiene
                void slides[i].offsetWidth; // Forzar reflow para reiniciar animación
                slides[i].classList.add('animar-baraja');
            }
        }

        function updateCarousel1() {
            const percentage = -(100 * currentIndex1);
            const percentage2 = -(100 * currentIndex2);
            const percentage3 = -(100 * currentIndex3);
            
            track.style.transform = `translateX(${percentage}%)`;
            track2.style.transform = `translateX(${percentage2}%)`;
            track3.style.transform = `translateX(${percentage3}%)`;
           
        }

        leftBtn.addEventListener('click', () => {
            currentIndex1 = (currentIndex1 - 1 + totalSlides1) % totalSlides1;
            currentIndex2 = (currentIndex2 - 1 + totalSlides1) % totalSlides1;
            currentIndex3 = (currentIndex3 - 1 + totalSlides1) % totalSlides1;

            animarBaraja(slides1);
            animarBaraja(slides2);
            animarBaraja(slides3);
            


            updateCarousel1();
        });

        rightBtn.addEventListener('click', () => {
            currentIndex1 = (currentIndex1 + 1) % totalSlides1;
            currentIndex2 = (currentIndex2 + 1) % totalSlides1;
            currentIndex3 = (currentIndex3 + 1) % totalSlides1;


            animarBaraja(slides1);
            animarBaraja(slides2);
            animarBaraja(slides3);
            

            updateCarousel1();
        });

        updateCarousel1();
    }
    /*
    // Carrusel 2  
    const slides = document.querySelectorAll('.carousel-slider__slide');
    const btnPrev = document.querySelector('.carousel-slider__control-btn.prev');
    const btnNext = document.querySelector('.carousel-slider__control-btn.next');
    const counter = document.getElementById('contador-slider-14372850');
    const container = document.getElementById('carousel-slider__container-14372850');

    if (slides.length > 0 && btnPrev && btnNext && counter && container) {
        let currentIndex2 = 0;
        const totalSlides2 = slides.length;

        function updateCarousel2() {
            const offset = slides[currentIndex2].offsetLeft;
            container.scrollTo({
                left: offset,
                behavior: 'smooth'
            });
            counter.textContent = currentIndex2 + 1;
        }

        btnPrev.addEventListener('click', () => {
            currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
            updateCarousel2();
        });

        btnNext.addEventListener('click', () => {
            currentIndex2 = (currentIndex2 + 1) % totalSlides2;
            updateCarousel2();
        });

        updateCarousel2();
    }
    */
    // Carrusel 3
    const leftBtn1 = document.getElementById('box_body9_contenido_button1');
    const rightBtn1 = document.getElementById('box_body9_contenido_button2');
    const carruselTrack = document.getElementById('box_body9_contenido_1_carrusel_full');
    const cards = carruselTrack.querySelectorAll('.box_body9_contenido_1_carrusel');

    let currentIndex = 0;
    const visibleItems = 3;
    const cardWidth = cards[0].offsetWidth + 32; 

    const maxIndex = cards.length - visibleItems;

    function updateCarousel() {
        carruselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    rightBtn1.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    leftBtn1.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    })

    
    // Carrusel 4 
    const leftBtn2 = document.getElementById('box_body9_contenido_button3');
    const rightBtn2 = document.getElementById('box_body9_contenido_button4');
    const cardTotal = document.getElementById('box_body11_contenido_carrusel_full');
    const cardsIndividual = cardTotal.querySelectorAll('.box_body11_contenido_carrusel_1');

    let indice = 0;
    const cardCargados = 3;

    window.addEventListener('load', () => {
    const cardWidth2 = cardsIndividual[0].offsetWidth + 32;
    const maxIndice = cardsIndividual.length - cardCargados;

    function principalScroll() {
        cardTotal.style.transform = `translateX(-${indice * cardWidth2}px)`;

        // Elimina clases anteriores
        cardsIndividual.forEach(card => card.classList.remove('centrada'));

        // Aplica clase a la tarjeta del medio
        const medio = indice + 1;
        if (cardsIndividual[medio]) {
            cardsIndividual[medio].classList.add('centrada');
        }
    }
    rightBtn2.addEventListener('click', () => {
        if (indice < maxIndice) {
        indice++;
        principalScroll();
        }
    });

    leftBtn2.addEventListener('click', () => {
        if (indice > 0) {
        indice--;
        principalScroll();
        }
    });
    });
    
    // carrusel 5
    const leftBtn3 = document.querySelector('.box_body7_1');
    const rightBtn3 = document.querySelector('.box_body7_1_2');
    const carrusel = document.getElementById('box_body7_left_carrusel_full_js');
    const miniCards = document.getElementById('box_body7_carrusel_mini')
    const carruselIndividual = miniCards.querySelectorAll('.box_body7_minicards')

    let contIndex = 0;
    const totalCarrusle = carrusel.children.length;

    function principalIndividual() {
        const porcentaje = -(100 * contIndex);
        carrusel.style.transform = `translateX(${porcentaje}%)`;

        carruselIndividual.forEach(i=> i.classList.remove('resalto'));

        const posicion = contIndex;
        if (carruselIndividual[posicion]) {
            carruselIndividual[posicion].classList.add('resalto')
        }


    }

    leftBtn3.addEventListener('click', () => {
        contIndex = (contIndex - 1 + totalCarrusle) % totalCarrusle;
        principalIndividual();
    });

    rightBtn3.addEventListener('click', () => {
        contIndex = (contIndex + 1) % totalCarrusle;
        principalIndividual();
    });
    principalIndividual();

    // carrusel 6
    const leftBtn4 = document.getElementById('btn_left_2');
    const rightBtn4 = document.getElementById('btn_right_2');
    const carrusel1 = document.getElementById('box_body7_left_carrusel_full_js_2');
    const miniCards1 = document.getElementById('box_body7_carrusel_mini_2')
    const carruselIndividual1 = miniCards1.querySelectorAll('.box_body7_minicards')

    let contIndex1 = 0;
    const totalCarrusle1 = carrusel1.children.length;

    function principalIndividual1() {
        const porcentaje1 = -(100 * contIndex1);
        carrusel1.style.transform = `translateX(${porcentaje1}%)`;

        carruselIndividual1.forEach(i=> i.classList.remove('resalto'));

        const posicion1 = contIndex1;
        if (carruselIndividual1[posicion1]) {
            carruselIndividual1[posicion1].classList.add('resalto')
        }


    }

    leftBtn4.addEventListener('click', () => {
        contIndex1 = (contIndex1 - 1 + totalCarrusle1) % totalCarrusle1;
        principalIndividual1();
    });

    rightBtn4.addEventListener('click', () => {
        contIndex1 = (contIndex1 + 1) % totalCarrusle1;
        principalIndividual1();
    });

     // carrusel 7
    const leftBtn5 = document.getElementById('btn_left_3');
    const rightBtn5 = document.getElementById('btn_right_3');
    const carrusel2 = document.getElementById('box_body7_left_carrusel_full_js_3');
    const miniCards2 = document.getElementById('box_body7_carrusel_mini_3')
    const carruselIndividual2 = miniCards2.querySelectorAll('.box_body7_minicards')

    let contIndex2 = 0;
    const totalCarrusle2 = carrusel2.children.length;

    function principalIndividual2() {
        const porcentaje2 = -(100 * contIndex2);
        carrusel2.style.transform = `translateX(${porcentaje2}%)`;

        carruselIndividual2.forEach(i=> i.classList.remove('resalto'));

        const posicion2 = contIndex2;
        if (carruselIndividual2[posicion2]) {
            carruselIndividual2[posicion2].classList.add('resalto')
        }


    }

    leftBtn5.addEventListener('click', () => {
        contIndex2 = (contIndex2 - 1 + totalCarrusle2) % totalCarrusle2;
        principalIndividual2();
    });

    rightBtn5.addEventListener('click', () => {
        contIndex2 = (contIndex2 + 1) % totalCarrusle2;
        principalIndividual2();
    });

});
