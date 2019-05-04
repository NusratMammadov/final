$(document).ready(function () {
    var owl = $('#services');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('.servicesPrev').click(function (e) {
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    })

    $('.servicesNext').click(function (e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });
    
    var owl = $('#our-clients');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    
}); 
AOS.init({
    duration: 1200,
  });
