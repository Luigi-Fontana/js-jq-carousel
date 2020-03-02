$(document).ready(function(){
    $('.next').click(function(){
        nextSlide(); // al click fai questa funzione
    });
    $('.prev').click(function(){
        prevSlide(); // al click fai questa funzione
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
