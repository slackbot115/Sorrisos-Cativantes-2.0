// This is a JavaScript file
$(document).on("click","#butao", function(){
  var DS = 0;
  var ED = 0;
  var ENF = 0;
  var TR = 0;
  var ADM = 0;
  var MN = 0;
  if(localStorage.getItem("x")==null)var x=localStorage.setItem("x",0);else var x=localStorage.getItem("x");
  

  if(localStorage.getItem("askDS")==null){
    localStorage.setItem("askDS",0);
    } if(localStorage.getItem("askED")==null){
    localStorage.setItem("askED",0);
    } if(localStorage.getItem("askENF")==null){
    localStorage.setItem("askENF",0);
    } if(localStorage.getItem("askTR")==null){
    localStorage.setItem("askTR",0);
    } if(localStorage.getItem("askADM")==null){
    localStorage.setItem("askADM",0);
    }if(localStorage.getItem("askMN")==null){
    localStorage.setItem("askMN",0);
    }
    var DS= parseInt(localStorage.getItem("askDS"));
    var ED= parseInt(localStorage.getItem("askED"));
    var ENF= parseInt(localStorage.getItem("askENF"));
    var TR= parseInt(localStorage.getItem("askTR"));
    var ADM= parseInt(localStorage.getItem("askADM"));
    var MN= parseInt(localStorage.getItem("askMN"));



  if($("#askDS").prop("checked")==true){
     DS++;
    
    }
    if($("#askED").prop("checked")==true){
     ED++;
    
    }
    if($("#askENF").prop("checked")==true){
     ENF++;
    
    }
    if($("#askTR").prop("checked")==true){
     TR++;
    
    }
    if($("#askADM").prop("checked")==true){
     ADM++;
    
    }
     if($("#askMN").prop("checked")==true){
     MN++;
    
    }
  localStorage.setItem("askDS",DS); 
  localStorage.setItem("askED",ED); 
  localStorage.setItem("askENF",ENF); 
  localStorage.setItem("askTR",TR); 
  localStorage.setItem("askADM",ADM); 
  localStorage.setItem("askMN",MN); 

$(document).on('click','#butao', function(){
  $('#home').css({display:"none"});
  $('#cursos').css({display:"block"});
  $('#cursos2').css({display:"none"});
  $('#escola').css({display:"none"});
  $('#quiz').css({display:"none"});
  $('#quiz2').css({display:"none"});
  $('#quiz3').css({display:"none"});
  $('#quiz4').css({display:"none"});
  $('#quiz5').css({display:"none"});
});

  
  if(x==6)localStorage.clear();

  if(DS > ED && ENF && TR && ADM && MN){
    $("#result").val("Você é perfeito para Desenvolvimento de Sistemas");
  }

  else if (ED > DS && ENF && TR && ADM && MN){
    $("#result").val("Você é perfeito para Edificações");
  }
  else if (ENF > DS && ED && TR && ADM && MN){
    $("#result").val("Você é perfeito para Enfermagem");
  }
  else if ( TR > DS && ED && ENF && ADM && MN){
    $("#result").val("Você é perfeito para Turismo");
  }
  else if (ADM > DS && ED && ENF && TR && MN){
    $("#result").val("Você é perfeito para Administração"); 
  }
  else if (MN > DS && ED && ENF && TR && ADM){
    $("#result").val("Você é perfeito para Manutenção") 
  }
});
