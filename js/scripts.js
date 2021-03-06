$(document).ready(function(){

  $('.album1').slick({
    infinite: true,
    centerMode: true,
      slidesToShow: 1,
      centerPadding: "40px",
      autoplay: true,
      autoplaySpeed: 2000,
      speed:800,
      slidesToScroll: 1,
      dots: true,
  });

  if(screen.width < 800){
    $('.album2').slick({
      infinite: true,
        slidesToShow: 2,
        centerPadding: "40px",
        autoplay: true,
        autoplaySpeed: 2000,
        speed:800,
        slidesToScroll: 1,
        dots: true,
    });
  }
  else{
    $('.album2').slick({
      infinite: true,
      centerMode: true,
        slidesToShow: 3,
        centerPadding: "40px",
        autoplay: true,
        autoplaySpeed: 2000,
        speed:800,
        slidesToScroll: 1,
        dots: true,
    });

    setCardSizes('.card.me');
    setCardSizes('.card.cornell');
    setCardSizes('.card.work');
    setCardSizes('.card.projects');
  }

  initCarousel();
  initNav();

});


function setCardSizes( type ){
  var maxHeight = 0;
  $( type ).each(function( index ) {
    h = parseInt($( this ).css('height'));
    if(h > maxHeight){
      maxHeight = h;
    }

    if($( type ).length - index == 1){
      $( type ).each(function( index ) {
        $( this ).css('height', maxHeight);
      })
    }
  });
}

function initCarousel(){
  $('.carousel').carousel({
    interval: false
  })

  $('#myCarousel').on('slide.bs.carousel', function (e) {
    moveAnimation();
  })
  $('#myCarousel').on('slid.bs.carousel', function (e) {
    update( $('.item.active').index(), e.direction );
  })
}

function initNav(){
  $('#tab-me').on('click', function(){  $('.carousel').carousel(0); })
  $('#tab-cornell').on('click', function(){  $('.carousel').carousel(1); })
  $('#tab-work').on('click', function(){  $('.carousel').carousel(2); })
  $('#tab-projects').on('click', function(){  $('.carousel').carousel(3); })
  $('#tab-socmed').on('click', function(){  $('.carousel').carousel(4); })
}

function update( id, direction ){
  moveBodyDiv(id, direction);
  updateNav(id);
  moveAnimation();
  updateProgressBar(id);
  scroll();
}

function updateProgressBar(id){
  percent = id/4 * $(window).width();
  $('.progress-bar').css('width', percent+'px');
}

function updateNav( id ){
  $('#tab-me').removeClass('active')
  $('#tab-cornell').removeClass('active')
  $('#tab-work').removeClass('active')
  $('#tab-projects').removeClass('active')
  $('#tab-socmed').removeClass('active')

  currContent = getContentTab(id);
  currContent.addClass('active');

}

function moveAnimation(){
  ani = $('#animation');
  if( 'animation_idle' == ani.attr('class')){
    ani.removeClass('animation_idle');
    ani.addClass('animation_walk');

    setTimeout(function(){
      ani.removeClass('animation_walk');
      ani.addClass('animation_idle');
    }, 5000);
  }
}

function moveBodyDiv(id, direction){
  curr = $( '.content-wrapper.active' );
  curr.removeClass('active');
  newContent = getContentDiv(id);

  if(direction == 'left'){
    curr.animate({ left: '-90vw'})
    newContent.css({ left: '110vw'})
  } else {
    curr.animate({ left: '110vw'})
    newContent.css({ left: '-90vw'})
  }

  newContent.animate({ left: '10vw'});
  newContent.addClass('active');
}

function scroll(){
  $('html, body').animate({
      scrollTop: $(".progress").offset().top-50
  }, 1000);

}

function getContentTab(id){
  switch(id){
    case 0:
      return $('#tab-me');
    case 1:
      return $('#tab-cornell');
    case 2:
      return $('#tab-work');
    case 3:
      return $('#tab-projects');
    case 4:
      return $('#tab-socmed');
  }
}
function getContentDiv(id){
  switch(id){
    case 0:
      return $('#content-me');
    case 1:
      return $('#content-cornell');
    case 2:
      return $('#content-work');
    case 3:
      return $('#content-projects');
    case 4:
      return $('#content-socmed');
  }
}
