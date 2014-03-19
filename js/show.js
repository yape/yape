$(function() {
    // TODO refactor into a widget and get rid of these plugin methods
	var totalNum = $(".anchorClass").length;var motion=true;$(".panel").mouseover(function(){motion=false;});$(".panel").mouseout(function(){motion=true;});
    $.fn.left = function( using, i ) {
      return this.position({
        my: "right middle",
        at: "left"+i*100+" middle",
        of: "#main-content",
        collision: "none",
        using: using
      });
    };
    $.fn.right = function( using, i ) {
      return this.position({
        my: "left middle",
        at: "right+"+i*100+" middle",
        of: "#main-content",
        collision: "none",
        using: using
      });
    };
    $.fn.center = function( using ) {
      return this.position({
        my: "center middle",
        at: "center middle",
        of: "#main-content",
        using: using
      });
    };
 $( ".anchorClass:eq(0)" ).css({"visibility":"visible"});
 $( ".anchorClass:eq(0)" ).center();
 //$( ".anchorClass:eq(0)" ).show( explode, {}, 500, null );
 $( ".feedBack" ).position({
        my: "center middle",
        at: "center middle",
        of: "#Welcome",
        using: animate
      });
 for(var i=1;i<totalNum;i++){
		$( ".anchorClass:eq("+i+")" ).right(null,i-1);
		$( ".anchorClass:eq("+i+")" ).css({"visibility":"visible"});
 }
 function moveBack(num,current){
	 $("a[data-anchor='"+current+"']").addClass("active",1000,null);
	 $("#back_active").position({
		my: "center middle",
        at: "center middle",
        of: $("a[data-anchor='"+current+"']"),
		using: animate
     });
	 $("a[data-anchor='"+num+"']").removeClass("active");
	 //Do Something 
	 //1. load Chat Message
	  if(current==1) startReceive();
 }
function moveTo(cnum){
	 if(cnum==currentIndex) return false;
	 var fl = currentIndex;
	 currentIndex = cnum;
	 moveBack(fl,cnum);
	 putDivs();
}
    function animate( to ) {
      $( this ).stop( true, false ).animate( to );
    }
	function putDivs(){
		for(var i=0;i<totalNum;i++){
		  if(i<currentIndex){
			  $( ".anchorClass:eq("+i+")" ).left( animate, currentIndex-i-1);
		  }
		  else if(i==currentIndex){
			  $( ".anchorClass:eq("+i+")" ).center( animate);
			  $(document).attr("title",$("a[data-anchor='"+currentIndex+"']").attr("data-page-title"));
		  }
		  else{
			  $( ".anchorClass:eq("+i+")" ).right( animate, i-currentIndex-1);
		  }
	  }
	  motion = true;
	}
    function next( event ) {
      event.preventDefault();
	  if(currentIndex == totalNum-1){
		  motion = true;
		 return false;
	  }
	  currentIndex++;
	  moveBack(currentIndex-1,currentIndex);
	  putDivs();
    }
    function previous( event ) {
		 event.preventDefault();
	  if(currentIndex == 0){
		  motion = true;
		 return false;
	  }
	  currentIndex--;
	  moveBack(currentIndex+1,currentIndex);
	  putDivs();
    }
   // $( "#previous" ).click( previous );
   // $( "#next" ).click( next );

	$("a[data-anchor]").click(function(event){
			event.preventDefault();
			var num = $(this).attr("data-anchor");
			setTimeout(function(){moveTo(num);},400);
			return false;
		});
 
   // $( ".anchorClass" ).click(function( event ) {
    //  $( ".anchorClass" ).index( this ) === 0 ? previous( event ) : next( event );
   // });
 
    $( window ).resize(function() {
      //$( ".anchorClass:eq(0)" ).left( animate );
      //$( ".anchorClass:eq(1)" ).center( animate );
      //$( ".anchorClass:eq(2)" ).right( animate );
	  putDivs();
    });
	$('#main-content').mousewheel(function(event, delta, deltaX, deltaY) {
			if (motion) {
				motion = false;

				event.preventDefault();
				if ($(this).hasClass('sliding')) {
					var element = $(this);
					sliderPosition = element.attr('data-position');
					if (deltaY < 0) {
						sliderPosition++;
						if (sliderPosition > element.find('.carousel-inner').children('div').length) {
							position++;
							element.attr('data-position', sliderPosition - 1);
							scrollPage(false);
						} else {
							changeSlide(element.attr('id'), sliderPosition);
						}
					} else if(deltaY > 0) {
						sliderPosition--;
						if (sliderPosition < 1) {
							position--;
							element.attr('data-position', 1);
							scrollPage(false);
						} else {
							changeSlide(element.attr('id'), sliderPosition);
						}
					} else {
						motion = true;
					}
				} 
				else {
					if(deltaY > 0){
						setTimeout(function(){previous(event)},400);
					} else if (deltaY < 0) {
						setTimeout(function(){next(event)},400);
					}
				}
			}
		});

	
  });