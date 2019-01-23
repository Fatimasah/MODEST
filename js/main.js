$(document).ready(function(){

    // carousel code start
    $('.owl-team').owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });

    $('.owl-clients').owlCarousel({   //carousel without nav btn
        loop:true,
        nav:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    });




});