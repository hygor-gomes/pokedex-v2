import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemonName!: string;
  @Input() pokemonImage!: string;
  @Input() pokemonType!: string;
  @Input() pokemonWeakness!: string;

  shouldDisplayStats = false;

  displayStats(): void {
    this.shouldDisplayStats = true;
  }
  displayGeneral(): void {
    this.shouldDisplayStats = false;
  }
  // constructor(private pokemonService: PokemonService) {}
}
