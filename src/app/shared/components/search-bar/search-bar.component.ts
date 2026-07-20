import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  readonly placeholder = input<string>('Search building materials...');
  
  // Angular 17.3+ signal-based output API
  readonly searchChange = output<string>();

  searchQuery = signal('');

  onSearch() {
    this.searchChange.emit(this.searchQuery());
  }

  onClear() {
    this.searchQuery.set('');
    this.searchChange.emit('');
  }
}
