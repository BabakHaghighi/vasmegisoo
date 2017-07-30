$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:true,
		mouseDrag:true,
		navText:["<i class='icomoon icon-arrow-left'></i>","<i class='icomoon icon-arrow-right'></i>"],
		dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        // // 992:{
	        // //     items:3
	        // },
	        1200:{
	            items:4
					
	        }
	    }
	});

	$('.color-pallet li').click(function(){
		// console.log("hfghfghf")
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
		$(".image-loader").css('display','block');
	})

	$('.navbar-center-vasmegisoo .dropdown').on('click', function (){
		if ( $(window).width() < 768 ) {
			$(this).toggleClass('open');
		}
	})
 });

 $('img').hide().one("load",function(){
    $(this).fadeIn(500);
	console.log("load image")
}).each(function(){
    if(this.complete) $(this).trigger("load");
});

