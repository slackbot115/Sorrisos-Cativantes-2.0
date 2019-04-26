$(document).on("click","#butao", function(){
  if(localStorage.getItem("ask")==null)localStorage.setItem("ask",0);{
    var ask= parseInt(localStorage.getItem("ask"));
  if($("#ask").prop("checked")==true){
    ask++;
    $("#work").val("on "+ask);
    }
  else{
    $("#work").val("off "+ask);
  }
  localStorage.setItem("ask",ask); 
  }
});

var DS = 0;
var ED = 0;
var ENF = 0;
var TR = 0;
var ADM = 0;
var MA = 0;

