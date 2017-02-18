(function ($) {

  $(".cue_cards").next("aside").addClass("stackable");
    var numOfCases = $(".cue_cards").length;
    for (i=0 ; i<numOfCases; i++){
      $(".stackable").eq(i).attr("id", "stackable" + i);
    }

  var stackable_elements = [];
    
  function getAbsolutePositions(element){
    var id = element.attr("id");	
    var marg_bottom = parseInt(element.css('marginBottom'));
    var absolute_top = element.prev(".cue_cards").offset().top;
    var bottom_ending = absolute_top + marg_bottom;
    var offs = element.prev(".cue_cards").offset().left;
    var wid = element.prev(".cue_cards").width(); 
    var marg = parseInt(element.prev(".cue_cards").css('marginRight'));
    var absolute_left = offs + wid + marg;    
    
    stackable_elements.push(["#"+id,absolute_top,absolute_left]);
  };
  

  $(".stackable").each(function(){
  	getAbsolutePositions($(this));
  });

  $(window).resize(function(){
    $(".stackable").each(function(){
      getAbsolutePositions($(this));
    });
  });  
  
  function stack(){
    for ( i = 0 ; i < stackable_elements.length; i++) {
      var element = stackable_elements[i][0];
      var absolute_top = stackable_elements[i][1];
      var absolute_left = stackable_elements[i][2];
      var scroll_pos = $(window).scrollTop();
      var position_top = $(element).prev(".cue_cards").position().top;
      var bottom_offset = 20;
      var position_bottom = parseInt( position_top + 
                                       $(element).prev(".cue_cards").height() -
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
  
  stack();
  
  $(window).scroll(function() {
    stack();
  });
 
  $(window).resize(function() {
    stack();
  });

}(jQuery));
