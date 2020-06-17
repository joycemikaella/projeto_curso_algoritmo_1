
function acaoBotao (params) {
var nome, idade, lim, cont

        lim = prompt ("Quantidade de vezes para verificar idade")
        cont = 0

    while (cont < lim) {
     
        nome = prompt ("Qual seu nome?")
        idade = prompt ("Olá, "+nome+" qual sua idade?")

     if ( idade > 18 ) {

        document.getElementById("paragrafo").innerText = nome + " é maior de idade"

     } else {
        document.getElementById("paragrafo").innerText = nome + " é menor de idade"
     }
        cont++
    }
        
     
}
