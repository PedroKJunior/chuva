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

  }
}
