var LOGIN=(function(){
var my={};
    ////////////////
    my.cargarEnlace=function(){
    $("body").append('<a id="iringresar"  href="#idpageAndahuaylas"></a>');
     $("body").append('<a id="irregistrar"  href="#idpageRegistrar"></a>');
    };
    my.login=function(param){
       // alert('jgdhdhgd');
    $.ajax({
        type:"POST",
        url:"http://192.168.56.1:9095/getLogin",
        data:"data="+JSON.stringify(param),
        dataType:'text',
        success:function(data){
        var dato=JSON.parse(data);
            if(dato.estado===1){
                alert('INGRESASTE');
                $("#iringresar").click();
            }else{
                  alert("REGISTRATE");
                  $("#irregistrar").click();
             
                
            }
        
        },
        error:function(data){
        console.log("ERROR "+data);
        }
        });
    };
    ////////////////
    return my;
}());