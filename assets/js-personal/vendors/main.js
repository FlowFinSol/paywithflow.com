// show year
$("#year").text((new Date).getFullYear());

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-111501789-1');

$(document).ready(function(){
  $('div.owl-carousel.screen').owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true
  });
});
$(document).ready(function(){
  $('div#demo.owl-carousel.owl-demo.slide-restaurant-foodtruck').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    lazyLoad: true,
    navText: ["<img src='assets/img/icon/arrow_back@2x.png'>","<img src='assets/img/icon/arrow_next@2x.png'>"],
    responsive:{
       0:{
           items:1
       },
       422:{
           items:2
       },
       1000:{
           items:4
       }
   }
  });
});
// Web Complete Loaded
$(window).on('load', function(e) {
  setTimeout(function(){
    $(".pre-loader").fadeOut(200);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      disable: 'phone'
    });
  }, 200);
})

if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
  skrollr.init({
    smoothScrolling: true,
    smoothScrollingDuration: 500
  });
}

particlesJS.load('particles-js', 'assets/particles.json');

$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height()

  // Back to top show
  if (wScroll > $(window).height()) {
    $(".back-to-top").fadeIn();
  }
  else {
    $(".back-to-top").fadeOut();
  }

  // Paralax Background
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    $('.introduction').css({'background-position': 'center '+ (-wScroll /3) + 'px'})

    if (wScroll > $('.sending-money').offset().top - hWindow) {
      var wSendingMoneyScroll = wScroll - $('.sending-money').offset().top + hWindow;
      $('.sending-money').css({'background-position': 'center '+ (-wSendingMoneyScroll /3 + hWindow/3) + 'px'})
    }
  }
})

$(window).resize(function() {
  if ($(window).width() <= 767) {
    $('.introduction').css({'background-position': 'center 0'})
    $('.sending-money').css({'background-position': 'center 0'})
  }
})

// Expand menu
var isTopBarExpand = false
$('.top-bar .expand-button').click(function() {
  if (!isTopBarExpand) {
    isTopBarExpand = true;
    $('#top-bar').addClass('is-expand');
  }
  else {
    isTopBarExpand = false;
    $('#top-bar').removeClass('is-expand');
  }
})
$('#top-bar').blur(function(){
  $('#top-bar').removeClass('is-expand');
  isTopBarExpand = false
})


// Back to Top
$(".back-to-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1100);
});


function register($form) {
  $.ajax({
    type: "GET",
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    error: function (err) {
      console.log('error')
    },
    success: function (data) {
      if (data.result != "success") {
        var errorMessage = data.msg
        if (errorMessage === "0 - Please enter a value") {
          errorMessage = "Please enter your email address."
        }
        $("#subscribe-result").html("<p class='info-message'>" + errorMessage + "</p>");
      } else {
         $("#subscribe-result").html("<p class='info-message'>Thank you for your subscription!</p>");
      }
      $("#subscribe-result").show();
      setTimeout(function() {  $("#subscribe-result").hide(); }, 10000);
    }
  });
}

$(document).on('submit', '#mc-embedded-subscribe-form', function (event) {
  try {
    var $form = jQuery(this);
    event.preventDefault();
    register($form);
  } catch (error) { console.log(error); }
});
function myMap(LatLng) {
  var mapProp= {
      center:new google.maps.LatLng(38.937608,-76.9930334),
      zoom:16,
  };

  switch (LatLng) {
    case 0:
        var mapProp= {
            center:new google.maps.LatLng(38.937608,-76.9930334),
            zoom:16,
        };
        break;
    case 1:
        var mapProp= {
            center:new google.maps.LatLng(38.9248479,-76.9923427),
            zoom:16,
        };
        break;
    case 2:
        var mapProp= {
            center:new google.maps.LatLng(38.9332235,-76.993434),
            zoom:16,
        };
        break;
    case 3:
        var mapProp= {
            center:new google.maps.LatLng(38.9307911,-76.9928491),
            zoom:16,
        };
        break;
    case 4:
        var mapProp= {
            center:new google.maps.LatLng(38.931396, -77.038096),
            zoom:16,
        };
        break;
    case 5:
        var mapProp= {
            center:new google.maps.LatLng(38.908084, -77.040615),
            zoom:16,
        };
        break;
    case  6:
        var mapProp= {
            center:new google.maps.LatLng(38.8997572, -77.0272501),
            zoom:16,
        };
        break;
    case  7:
        var mapProp= {
            center:new google.maps.LatLng(38.862917, -76.970082),
            zoom:16,
        };
        break;
    case  8:
        var mapProp= {
            center:new google.maps.LatLng(38.9246246,-76.9923205),
            zoom:16,
        };
        break;
    case  9:
        var mapProp= {
            center:new google.maps.LatLng(38.9332427,-76.9928941),
            zoom:16,
        };
        break;
    case  10:
        var mapProp= {
            center:new google.maps.LatLng(38.9123443,-77.0194173),
            zoom:16,
        };
        break;
    case  11:
        var mapProp= {
            center:new google.maps.LatLng(38.919115, -77.036353),
            zoom:16,
        };
        break;
  }

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map
  });
}

// active slide
$('.img-reward').click(function(){
  $('.img-reward').removeClass('active-slide-maps');
  $(this).addClass('active-slide-maps');
});
