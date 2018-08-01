$("#openNav").click(function() {
  $('#log-in-out').hide();
  $("#mySidenav").css("width", "320px");
  $("#id-close").css("width", "100%");
})

$(window).on('load', function(e) {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    disable: window.innerWidth < 992
  });
})

$("#id-closebtn, #id-close").click(function() {
  $('#log-in-out').show();
  $("#mySidenav").css("width", "0px");
  $(".closebtn-overlay").css("width", "0");
})


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();
// });


$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height();
  var wWindow = $(window).outerWidth();
  var height = $("#header").height();
// position fixed menu
  if ((wScroll >= height) && (wWindow > 575)) {
    $('.menu-business').addClass("fixed");
  } else {
    $('.menu-business').removeClass("fixed");
  }

  // Back to top show
  if (wScroll > $(window).height()) {
    $(".back-to-top").fadeIn();
  }
  else {
    $(".back-to-top").fadeOut();
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


// click menu to div

// var elementpos= $('#order-ahead').offset().top; //get position of element to scroll to.


// var speed = 1100; //time, in milliseconds, for the scroll action to complete.
//
// $('#order, #more').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#order-ahead').offset().top - 193; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
//
// $('#location').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#location-based').offset().top - 193; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
//
// $('#tablet').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#tablet-printer').offset().top - 193; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
//
// $('#offer').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#offer-reward').offset().top - 193; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
//
// $('#prices').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#affordable-price').offset().top - 193; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
//
// $('#experience').click(function(e){ //select anchor links that start with #
//   e.preventDefault(); //prevent normal jump to anchor action
//   var elementpos= $('#new-experience').offset().top - 193; //get position of element to scroll to.
//   var elementpos2= $('#new-experience').offset().top; //get position of element to scroll to.
//   $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
// });
