
// Owlcarousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        items:3,
        autoplay:true,
        dots:true,
      
        
        autoplayTimeout:2000,
        smartSpeed:450,
        margin:10,
        responsiveClass:true,
        nav:true,
        navText:[
            "<i class='fa-solid fa-backward text-light'></i>","<i class='fa-solid fa-forward text-light'></i>"
        ],
        responsive:{
            0:{
                items:1,
                
            },
            768:{
                items:2,
               
            },
            1140:{
                items:3,
               
            }
        }
    })});