import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '@app/wiki/services/pokemon/pokemon.service';

@Component({
  selector: 'app-img-pokemon',
  templateUrl: './img-pokemon.component.html',
  styleUrls: ['./img-pokemon.component.scss']
})
export class ImgPokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  @Input() width: number;

  constructor() {
  }

  ngOnInit() {
  }

}
