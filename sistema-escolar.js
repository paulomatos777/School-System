/*

    Vamos fortalecer e aplicar os conhecimentos, alem de aprender truques e dicas para resolver os desafios e avancar para o proximo nivel


 */

/*
 ### Transformar notas escolares

 Crie um algoritmo que transforme as notas do sistema numerico para o sistema de notas em caracteres tipo A B C

 * de 90 para cima - A
 * entre 80 - 89 - B
 * entre 70-79- C
 * entre 60 - 69 - D
 * menor que 60 - F
 

  */
let notas = [90, 86, 54, 73, 22, 19, 65, 45, 100, 39]
let notasEmString = []

for (i = 0; i < notas.length; i++) {
  //console.log('nota trabalhada', notas[i])
  if (notas[i] >= 90) {
    notasEmString[i] = 'A'
  } else if (notas[i] >= 80 && notas[i] <= 89) {
    notasEmString[i] = 'B'
  } else if (notas[i] >= 70 && notas[i] <= 79) {
    notasEmString[i] = 'C'
  } else if (notas[i] >= 60 && notas[i] <= 69) {
    notasEmString[i] = 'D'
  } else {
    notasEmString[i] = 'F'
  }
}
console.log('array inicial:', notasEmString)
var novaArr = notasEmString.filter(function (este, i) {
  return notasEmString.indexOf(este) === i
})
listaEmOrdemAlfabetica = novaArr.sort()
console.log(listaEmOrdemAlfabetica)
