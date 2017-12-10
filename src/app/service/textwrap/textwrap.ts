import { TextWrapInterface } from './textwrap.interface';

// Seu código vai aqui :)
export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    let listWord: Array<string> = new Array()
    let arrayText: Array<string> = new Array()
    let phrase: string = ''
    let countAux: number = 0

    // Criando o vetor com as palavras da string;
    listWord = text.split(' ')

    while(listWord.length != 0){

        // Verifica se a palavra é maior que a linha
        if(listWord[0].length < length){
          // Verifica se a palvra cabe na linha
          if((phrase.length + listWord[0].length) <= length){
            phrase += listWord[0]
            phrase += ' '
            listWord.shift()
          } else {
            arrayText.push(phrase)
            phrase = ''
          }
        } else {
          // Se a palavra for maior que o numero de caracteres, ele quebra a palvra
          for(let count:number = 0; count < listWord[0].length; count++){
            if(countAux <= length){
              phrase += listWord[0].charAt[count]
              countAux++
            } else {
              arrayText.push(phrase)
              countAux = 0
              phrase = ''
            }
          }
          listWord.shift()
        }
      }
    console.log(arrayText)
    return
  }
}
