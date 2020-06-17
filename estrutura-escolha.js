var   v01, v02, resultado, operacao

function acaoBotao (params) {

    v01= prompt ("Digite o primeiro valor : ")
    operacao= prompt ("Digite a operação --> EX : +, -, *, / ")
    v02= prompt("Digite o segundo valor : ")
    
    switch (operacao) {
        case "+":
            resultado = parseInt (v01) + parseInt (v02)  
            break;
    
         case "-":
            resultado = parseInt (v01) - parseInt (v02)  
            break;

        case "*":
            resultado = parseInt (v01) * parseInt (v02)  
            break;
        case "/":
           resultado = parseInt (v01) / parseInt (v02)  
            break;

            
    }
        
     
         document.getElementById("paragrafo").innerText = resultado
 
}

