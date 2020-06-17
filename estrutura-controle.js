
 var nota01, nota02, media, nome

 nome = prompt ("Digite o nome do aluno : ")
 nota01 = prompt ("Digite nota 1 do aluno : ")
 nota02 = prompt ("Digite nota 2 do aluno : ")
 media = (parseInt(nota01) + parseInt(nota02))/2;
 
 if (media>=5) {
     alert ("PASSOU MIZERA, TCHAU " + nome)
 }
     else 
         alert ("LASCOU-SE "+ nome)