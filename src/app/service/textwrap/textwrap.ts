import { TextWrapInterface } from './textwrap.interface';

// Seu código vai aqui :)
export class textWrap implements TextWrapInterface{

  constructor(){ }

  textWrap(text: string, length: number): Array<string>{

    alert("Texto: " + text + " Número: " + length);
        return
  }
}
