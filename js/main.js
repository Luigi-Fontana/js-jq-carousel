$(document).ready(function(){
    var giriSlide = 0;
    var isPaused = false; // variabile sentinella
    var clock = setInterval(function(){
        if (isPaused == false) { // se non è in pausa
            nextSlide()
            giriSlide++;
            if (giriSlide === 16) { // quando ha fatto 16 giri automatici di slide stoppa tutto
                clearInterval(clock);
            }
        }
    }, 3000);
    $('.images').mouseenter(function(){ // quando metti il cursore sull'immagine
        isPaused = true; // metti in pausa
        $('.fa-play-circle').addClass('active');
        $('.fa-pause-circle').removeClass('active');
    });
    $('.images').mouseleave(function(){ // quando togli il cursore dall'immagine
        setTimeout(function(){ // dopo 1 secondo togli la pausa
            isPaused = false;
        }, 1000);
        $('.fa-pause-circle').addClass('active');
        $('.fa-play-circle').removeClass('active');
    });
    $('.next').click(function(){
        $('.fa-play-circle').removeClass('active');
        $('.fa-pause-circle').addClass('active');
        nextSlide(); // al click fai questa funzione
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
    $('.prev').click(function(){
        $('.fa-play-circle').removeClass('active');
        $('.fa-pause-circle').addClass('active');
        prevSlide();
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
    $('.fa-pause-circle').click(function(){
        $('.fa-pause-circle').removeClass('active');
        $('.fa-play-circle').addClass('active');
        isPaused = true;
    });
    $('.fa-play-circle').click(function(){
        $('.fa-play-circle').removeClass('active');
        $('.fa-pause-circle').addClass('active');
        setTimeout(function(){
            isPaused = false;
        }, 1000);
    });
    $('.fa-circle.first').click(function(){
        $('.images img').removeClass('active');
        $('.images img.first').addClass('active');
        $('.fa-circle').removeClass('active');
        $('.fa-circle.first').addClass('active');
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
    $('.fa-circle.second').click(function(){
        $('.images img').removeClass('active');
        $('.images img.second').addClass('active');
        $('.fa-circle').removeClass('active');
        $('.fa-circle.second').addClass('active');
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
    $('.fa-circle.third').click(function(){
        $('.images img').removeClass('active');
        $('.images img.third').addClass('active');
        $('.fa-circle').removeClass('active');
        $('.fa-circle.third').addClass('active');
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
    $('.fa-circle.last').click(function(){
        $('.images img').removeClass('active');
        $('.images img.last').addClass('active');
        $('.fa-circle').removeClass('active');
        $('.fa-circle.last').addClass('active');
        isPaused = true;
        setTimeout(function(){
            isPaused = false;
        }, 3000);
    });
});

function nextSlide() {
    if ($('.images img.active').hasClass('last')) { // se è l'ultimo
        $('.images img.active').removeClass('active');
        $('.images img.first').addClass('active'); // torna al primo
        // Pallini
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.first').addClass('active');
    } else {
        var imgAttiva = $('.images img.active');
        var prossimaImg = $('.images img.active').next(); // imgAttiva.next
        imgAttiva.removeClass('active');
        prossimaImg.addClass('active');
        // Pallini
        var pallinaAttiva = $('.slider-nav i.active');
        var prossimaPallina = $('.slider-nav i.active').next();
        pallinaAttiva.removeClass('active');
        prossimaPallina.addClass('active');
    }
}

function prevSlide() {
    if ($('.images img.active').hasClass('first')) { // se è il primo
        $('.images img.active').removeClass('active');
        $('.images img.last').addClass('active'); // torna all'ultimo
        // Pallini
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.last').addClass('active');
    } else {
        var imgAttiva = $('.images img.active');
        var precedenteImg = $('.images img.active').prev(); // imgAttiva.prev
        imgAttiva.removeClass('active');
        precedenteImg.addClass('active');
        // Pallini
        var pallinaAttiva = $('.slider-nav i.active');
        var precedentePallina = $('.slider-nav i.active').prev();
        pallinaAttiva.removeClass('active');
        precedentePallina.addClass('active');
    }
}
