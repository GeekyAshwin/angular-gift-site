import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ApiCallService } from './services/api-call/api-call.service';
import { HttpClient } from '@angular/common/http';

export interface AppTitle {
  appTitle: string | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-gift-site';
  constructor(
    @Inject(LocalStorageService)
    private localStorageService: LocalStorageService,
    @Inject(ApiCallService)
    private apiCallService: ApiCallService,
    @Inject(HttpClient)
    private httpClient: HttpClient,
  ) {
    this.localStorageService
      .set<AppTitle>('title', { appTitle: this.title })
      .subscribe((result) => console.log('successfully stored result', result));
    this.localStorageService
      .set<AppTitle>('otherTitle', { appTitle: null })
      .subscribe((result) => console.log('successfully stored', result));
    this.localStorageService
      .get<AppTitle>('title')
      .subscribe((result) => console.log('successfully got', result?.appTitle));
    this.localStorageService
      .get<AppTitle>('otherTitle')
      .subscribe((result) => console.log('successfully got', result?.appTitle));
    this.localStorageService
      .remove('title')
      .subscribe((result) => console.log('successfully removed', result));
    this.localStorageService
      .removeAll()
      .subscribe((result) =>
        console.log('cleared local storage with result', result),
      );
    // const exampleUrl = this.apiCallService.baseUrl();
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(console.log);
  }
}
