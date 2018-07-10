$("#openNav").click(function() {
  $('#log-in-out').hide();
  $("#mySidenav").css("width", "320px");
  $("#id-close").css("width", "100%");
})

$("#id-closebtn, #id-close").click(function() {
  $('#log-in-out').show();
  $("#mySidenav").css("width", "0px");
  $(".closebtn-overlay").css("width", "0");
})


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height()
  var height = $("#header").height();

// position fixed menu
  if (wScroll >= height) {
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

  // Paralax Background
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    $('.introduction').css({'background-position': 'center '+ (-wScroll /3) + 'px'})

    if (wScroll > $('.sending-money').offset().top - hWindow) {
      var wSendingMoneyScroll = wScroll - $('.sending-money').offset().top + hWindow;
      $('.sending-money').css({'background-position': 'center '+ (-wSendingMoneyScroll /3 + hWindow/3) + 'px'})
    }
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
