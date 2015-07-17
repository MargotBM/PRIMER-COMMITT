(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     LOGIN.cargarEnlace();
     //$("body").append('<a id="iringresar"  href="#idpageAndahuaylas"></a>');
     //$("body").append('<a id="irregistrar"  href="#idpageRegistrar"></a>');
     $("body").append('<a id="irbienvenido"  href="#idpageBienvenido"></a>');
     $("body").append('<a id="irandahuaylas"  href="#idpageAndahuaylas"></a>');
     $("body").append('<a id="irpacucha"  href="#idpagePacucha"></a>');
     $("body").append('<a id="irSondor"  href="#idpageSondor"></a>');
     $("body").append('<a id="irbosque"  href="#idpageBosque"></a>');
     $("body").append('<a id="irbanos"  href="#idpageBanos"></a>');
     $("body").append('<a id="iriglesia"  href="#idpagePedro"></a>');
  
    
    $(document).on("click", "#idingresar", function(evt)
    {
          /* your code goes here */ 
        var user=$("#idusuario").val();
        var pass=$("#idcontrasena").val();
          var param={};
            param.usuario=user;
            param.contrasena=pass;
        LOGIN.login(param);
        
        //$("#iringresar").click();
        /* your code goes here */ 
    });
    
        /* button  #idregistrar */
    $(document).on("click", "#idregistrar", function(evt)
   
    {
        $("#irregistrar").click();
        /* your code goes here */ 
    });
    
        /* button  #idsiguiente */
    $(document).on("click", "#idsiguiente", function(evt)
    {
       $("#irbienvenido").click();
        /* your code goes here */ 
    });
    
        /* button  #idcontinua */
    $(document).on("click", "#idcontinua", function(evt)
    {
        $("#irandahuaylas").click();
        /* your code goes here */ 
    });
    
   $(document).on("click", "#siguiente1", "idLaguna",function(evt)
                   
    {
        //$("#irpacucha").click();
        var opciones=$("#idgrupo :checked")[0].id;
        if(opciones=="idLaguna"){
          $("#irpacucha").click();
        }
        else if(opciones=="idSondor"){
            $("#irSondor").click();
        }
        else if(opciones=="idBosque"){
            $("#irbosque").click();
        } 
       else if(opciones=="idBanos"){
            $("#irbanos").click();
        }
       else if(opciones=="idIglesia"){
            $("#iriglesia").click();
        }
       

 
    });
 
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
