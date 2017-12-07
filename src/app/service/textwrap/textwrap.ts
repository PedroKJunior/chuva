import { TextWrapInterface } from './textwrap.interface';

// Seu código vai aqui :)
export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    let texto: any = text;
    let textoArray: string[];
    let widthText: number = 0;
    let frase: any;

    while(widthText < text.length){

      frase = '';

      for(let i:number=0; i < length; i++){
        frase = frase + texto.charAt(i);
        widthText++;
      }

      texto = texto.split(frase);
      textoArray.push(frase);

    }

    alert("Texto: " + text + ", Número: " + length + ", Numero de arrays: " + textoArray.length);
        return
  }
}
