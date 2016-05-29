(function($) {

    $.fn.stackAside = function(options) {
        
        var settings = $.extend({
            bottomOffset : 20
        }, options);

        var stackable_elements = [];

        return this.each( function() {
            $(this).next("aside").addClass("stackable");
            assignIds();
            getAbsolutePositions($(this));
            stack(settings.bottomOffset);
            if ( $.isFunction( settings.complete ) ) {
              settings.complete.call( this );
            }
        }); 
   
        function assignIds(){
            var numOfCases = $(".stack_aside").size();
            for (i=0 ; i<numOfCases; i++){
              $(".stackable").eq(i).attr("id", "stackable" + i);
            }
        };
      
        function getAbsolutePositions(element){
          var id = element.next().attr("id");	
          var marg_bottom = parseInt(element.css('marginBottom'));
          var absolute_top = element.offset().top;
          var bottom_ending = absolute_top + marg_bottom;
          var offs = element.offset().left;
          var wid = element.width(); 
          var marg = parseInt(element.css('marginRight'));
          var absolute_left = offs + wid + marg;    
          stackable_elements.push(["#"+id,absolute_top,absolute_left]);
        };
      
        function stack(bottom_offset){
          for ( i = 0 ; i < stackable_elements.length; i++) {
            var element = stackable_elements[i][0];
            var absolute_top = stackable_elements[i][1];
            var absolute_left = stackable_elements[i][2];
            var scroll_pos = $(window).scrollTop();
            var position_top = $(element).prev(".stack_aside").position().top;
            var position_bottom = parseInt( position_top + 
                                       $(element).prev(".stack_aside").height() -
                                       $(element).height()) - bottom_offset;
            if (scroll_pos <= position_top ){
                $(element).css({"position": "absolute", "top": absolute_top, "left": absolute_left });
              }else if ((scroll_pos > position_top) && (scroll_pos < position_bottom)){
                $(element).css({"position": "fixed", "top": 0, "left": absolute_left });
              }else {
                $(element).css({"position": "absolute", "top": position_bottom, "left": absolute_left });
              }
            }
        };
    }
}(jQuery));







    
