import { Component, OnInit } from '@angular/core';
import { textWrap } from '../service/textwrap/textwrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto: string
  numero: number
  arrayText: string[] = new Array()

  constructor(private _textwrap: textWrap) {
  }

  ngOnInit() {
  }

  quebra(){

    this.arrayText = this._textwrap.textWrap(this.texto, this.numero)

    this.texto = ""

    for(let i:number = 0; i < this.arrayText.length; i++){
      this.texto += this.arrayText[i]
      this.texto += "\n"
    }
  }
}
