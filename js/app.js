$(document).ready(function(){

  $(".num").on("click", function(){
    var text = $(".display").text(); //get what on display now
    text = text.replace(/\s+/g, ''); //delete whitespaces
    if( text.length < 15 ){ //check not to overflow display

      if(text == "0"){
        $(".display").text( $(this).text() );
      } else{
        text += $(this).text();
        $(".display").text(text);
      }
    }

  });

});
