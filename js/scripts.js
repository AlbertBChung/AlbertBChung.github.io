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
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-90535161-1', 'auto');
		  ga('send', 'pageview');