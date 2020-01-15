jQuery(document).ready(function(){
	smoothScroll.init({
		speed: 800,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: true
	});
	function retina(){

		if( 'devicePixelRatio' in window && window.devicePixelRatio == 2 ){

			var imgToReplace = $('img.replace-2x').get();	
		    for (var i=0,l=imgToReplace.length; i<l; i++) {
	    		var src = imgToReplace[i].src;
		      	src = src.replace(/\.(png|jpg|gif)+$/i, '@2x.$1');
		      	imgToReplace[i].src = src;
		      	$(imgToReplace[i]).load(function(){
					$(this).addClass('loaded');
				});	      	
		    };

		}
	}
	retina();
});

$(window).load(function(){
	$('body').addClass('loader');
})


