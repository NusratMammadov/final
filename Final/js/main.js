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
                items: 6
            }
        }
    });
    var owl = $('#students-say');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

 
  var navOption = $("#menu-bar .nav-item")
  var navDropdown = $("#menu-bar .nav-item .dropdown-menu")

  for (let i = 0; i < navOption.length; i++) {

      $(navOption[i]).on("mouseover mouseout", function () {
          $(navDropdown[i]).toggleClass("show")
          $(navOption[i]).toggleClass("show")
      })
  }

  var myImg = $("#our-blog .courses")
  var myIcon = $("#our-blog .courses-user-image .courses-user-icon")
  for (let i = 0; i < myImg.length; i++) {
      $(myImg[i]).mouseover(function () {
          $(myIcon[i]).stop();
          $(myIcon[i]).animate({ top: "75px" });
      })

      $(myImg[i]).mouseout(function () {
          $(myIcon[i]).stop();
          $(myIcon[i]).animate({ top: "255px" });
      })

  }

    
}); 
AOS.init({
    duration: 1200,
  });
