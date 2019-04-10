(function(){//IIFE (Immediatly Invoked Function Expression)
    "use stric"
    
    var input =  document.getElementById('celda');
                 //document.getElementsByClassName('miclase')  Obtiene elementos por el nombre de la clase
                 //document.getElementsByTagName('input') Busca por Nombre (El primero)
                 //document.getElementsByTagNameNS('input') NodeList con todos los elementos
    
    var resultado  = document.getElementById('resultado')
    
    //var button  =  document.querySelector('.boton-calc') Solo trae el primer boton que encuentre
    var buttons =  document.querySelectorAll('.boton-calc')//Trae todos los botones que encuentre
    
    
    console.log("Botones: ", buttons.length);
    var num = ""
    var primer_numero = ""
    var operacion = null
    var tienePunto =  false; // Bandera para saber si tiene punto si es false no tiene punto si es verdadero tiene punto
    
    function catchValue(){
        var boton =  this;
        var value =  boton.getAttribute("value");
        
    
        if(value >= "0" && value <= "9"){
            num =  num + value
            input.value = num; 
        }else if( value == "C" ){
            num = ""
            primer_numero=""
            tienePunto =  false;
            input.value = ""
    
        }else if(value == "x" || value == "+" || value == "/" || value == "-" ){
            if(value == "+"){
                tienePunto =  false;
                input.value = ""
                operacion = "+"
                primer_numero = num
                num=""
            }else 
                if(value == "-"){
                    tienePunto =  false;
                    input.value = ""
                    operacion = "-"
                    primer_numero = num
                    num=""

                }else 
                if(value == "x"){
                    tienePunto =  false;
                    input.value = ""
                    operacion = "x"
                    primer_numero = num
                    num=""
                }else 
                if(value == "/"){
                    tienePunto =  false;
                    input.value = ""
                    operacion = "/"
                    primer_numero = num
                    num=""
    
            }
    
        }else if(value == "."){
            if(tienePunto){
                console.log("ya tiene punto")
            }
            else{
                num=num+".";
                tienePunto=true;
            }
        }
    
    }
    
    for(var i =0;i<=buttons.length-1;i++){
        buttons[i].addEventListener('click',catchValue)
    }
    
    resultado.addEventListener('click',function(){
        console.log("primer_numero: ", primer_numero)
        console.log("segundo_numero: ",num)
        console.log("operacion:", operacion)
        if(operacion == "+"){
            input.value = parseFloat(primer_numero) + parseFloat(num); //parseInt() convierte string en entero, parseFloat() convierte string en decimal
        }else if (operacion == "-"){
            input.value = parseFloat(primer_numero) - parseFloat(num);
        }else if (operacion == "x"){
            input.value = parseFloat(primer_numero) * parseFloat(num);
        }else if (operacion == "/"){
            input.value = parseFloat(primer_numero) / parseFloat(num);
        }

    })
    
    
    })()