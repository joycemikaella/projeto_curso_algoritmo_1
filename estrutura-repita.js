/*     sairLoop : caractere
       v1, v2 : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

         repita
                escreval("Digite o primeiro valor")
                leia(v1)
                escreval("Digite o segundo valor")
                leia(v2)
                escreval("Resultado :", v1+v2)

                escreval("Deseja sair? S/N")
                leia(sairLoop)
                
               ate sairLoop <> "N"*/

function acaoBotao (params) {
    var sairLoop,v1, v2 

    do {
        
      
    v1= prompt ("Digite o primeiro valor : ")
    v2= prompt("Digite o segundo valor : ")

    document.getElementById("paragrafo").innerText = "Resultado :"+( parseInt (v1)+ parseInt (v2))
    
    sairLoop = prompt("Deseja sair? S/N")

    } while (sairLoop == "N");

    
        
         
    }
    