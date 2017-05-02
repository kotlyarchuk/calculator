$(document).ready(function(){

  $(".elem").on("click", numDisplay);

  $(".backspace").on("click", backspace);

  $(".c").on("click", reset);

  $(".result").on("click", result);

});

var equation = "";
var resulted = false;

function reset(){
  $(".display").text("0");
}

function backspace(){
  if($(".display").text().length > 1) {
    $(".display").text( $(".display").text().slice(0, -1) );
  } else{
    $(".display").text("0");
  }
}

function numDisplay(){
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
}


function plus(){
  $(".display").text()
}

function result(){
  eq = $(".display").text();
  result = eval( $(".display").text() );
  if (result.toString().length > 12) {
    result = result.toFixed(10);
  }
  $(".display").text( result );
  resulted = true;
}
