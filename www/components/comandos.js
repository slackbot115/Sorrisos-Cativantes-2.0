// This is a JavaScript file

$(document).on('click','#lihome', function(){
  $('#home').css({display:"block"});
  $('#cursos').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#liescola', function(){
  $('#home').css({display:"none"});
  $('#cursos').css({display:"none"});
  $('#escola').css({display:"block"});
});

$(document).on('click','#licursos', function(){
  $('#home').css({display:"none"});
  $('#cursos').css({display:"block"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#insc', function(){
  var ref = cordova.InAppBrowser.open('https://www.vestibulinhoetec.com.br/candidato/dados-acesso.asp', '_blank', 'location=yes');
});

$(document).on('click','#teste', function(){
  $('#quiz').css({display:"block"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"none"});
  $('#cursos').css({display:"none"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#butao1', function(){
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"block"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"none"});
  $('#cursos').css({display:"none"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#butao2', function(){
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"block"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"none"});
  $('#cursos').css({display:"none"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#butao3', function(){
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"block"});
  $('#quiz5').css({display:"none"});
  $('#cursos').css({display:"none"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#butao4', function(){
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"block"});
  $('#cursos').css({display:"none"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});

$(document).on('click','#butao5', function(){
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"none"});
  $('#cursos').css({display:"block"});
  $('#home').css({display:"none"});
  $('#escola').css({display:"none"});
});