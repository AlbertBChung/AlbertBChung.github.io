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
	}
	var showSchedule = false;
    $("#schedule").click(function(){
    	if(!showSchedule){
    		$("#schedule-pic").animate({
            	right: '0px'
        	});
    	} else{
    		$("#schedule-pic").animate({
            	right: '-150vw'
        	});   		
    	}
    	showSchedule = !showSchedule;
    });
});

var towerPos = -100;
var towerDiv = 2*$(window).height();
window.onscroll = function() {scroll()};

function scroll(){
	towerPos = 6 - .00005*Math.pow(Math.abs(towerDiv-document.body.scrollTop),2);
	$('#tower').css("left",towerPos+"%");

}



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-90535161-1', 'auto');
		  ga('send', 'pageview');