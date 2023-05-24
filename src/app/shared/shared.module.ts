import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchFormComponent } from './components/search-form/search-form.component';



@NgModule({
  declarations: [
    PokemonCardComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonCardComponent,
    SearchFormComponent
  ]
})
export class SharedModule { }
