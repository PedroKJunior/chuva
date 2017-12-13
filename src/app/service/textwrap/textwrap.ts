import { TextWrapInterface } from './textwrap.interface';

export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    let listWord: Array<string> = new Array()
    let arrayText: Array<string> = new Array()
    let phrase: string = ""
    let countAux: number

    listWord = text.split(' ')

    while(listWord.length != 0){

      let widthWord:number = listWord[0].length

      if(phrase == ""){
        if(widthWord < length){
        } else{
          countAux = 0
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
        }
      } else {
        arrayText.push(phrase.trim())
        phrase = ""
        listWord.shift()
      }
    }
    console.log(arrayText)
    return arrayText
  }
}
