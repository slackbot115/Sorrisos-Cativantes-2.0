$(document).on("click","#butao", function(){
  var ask= parseInt(localStorage.getItem("ask"));
  if($("#ask").prop("checked")==true){
    ask++;
    $("#work").val("on "+ask);
    }
  else{
    $("#work").val("off "+ask);
  }
  localStorage.setItem("ask",ask); 
});