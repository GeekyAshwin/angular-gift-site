import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-gift-site';
  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.save('title', this.title);
    console.log(this.localStorageService.get('title'));
  }
}
