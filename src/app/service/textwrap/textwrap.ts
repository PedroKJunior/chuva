import { TextWrapInterface } from './textwrap.interface';

// Seu código vai aqui :)
export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    let listWord: Array<string> = new Array()
    let arrayText: Array<string> = new Array()
    let phrase: string = ''

    // Criando o vetor com as palavras da string;
    listWord = text.split(' ')

    while(listWord.length != 0){
      if( phrase.length < length){
        if(listWord[0].length <= length){
          if(phrase.length + listWord[0].length < length){
            phrase += listWord[0].toString()
            listWord.shift()
          }
        } else {
          for(let count:number = 0; count < listWord[0].length; count++){
            if(phrase.length <= length){
              phrase = listWord[0].charAt[count]
            }else{
              arrayText.push(phrase)
              phrase = ''
            }
          }
        }

      }

    }
    return
  }
}
