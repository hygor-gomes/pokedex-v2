import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleSearch(searchTerm: string) {
    console.log('Termo de busca:', searchTerm);
  }
}
