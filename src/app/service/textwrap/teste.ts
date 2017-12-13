import { TextWrapInterface } from './textwrap.interface';

// Seu código vai aqui :)
export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    let listWord: Array<string> = new Array()
    let arrayText: Array<string> = new Array()
    let phrase: string = ""
    let countAux: number = 0

    // Criando o vetor com as palavras da string;
    listWord = text.split(' ')

    while(listWord.length != 0){

        // Variavel para teste
        let widthWord:number = listWord[0].length
        // Verifica se a palavra é maior que a linha
        if(widthWord < length){
          // Verifica se a palvra cabe na linha
          if((phrase.length + widthWord) <= length){
            phrase += listWord[0]
            phrase += "/"
            listWord.shift()
          } else {
            arrayText.push(phrase)
            phrase = ""
          }
        } else if(phrase.length == length){
          arrayText.push(phrase)
          phrase = ""
        } else {
          // Se a palavra for maior que o numero de caracteres, ele quebra a palvra
          for(let count:number = 0; count < widthWord; count++){
            if(countAux <  length){
              phrase += listWord[0].charAt(count)
              countAux++
            } else {
              arrayText.push(phrase)
              countAux = 0
              phrase = ""
              count--
            }
          }
          phrase += " "
          countAux = 0
          listWord.shift()
        }
      }

    arrayText.push(phrase)
    console.log(arrayText)
    return
  }
}
