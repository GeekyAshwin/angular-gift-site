import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'angular-gift-site';
  constructor() {
    // private httpClient: HttpClient, // @Inject(HttpClient) // private apiCallService: ApiCallService, // @Inject(ApiCallService) // private localStorageService: LocalStorageService, // @Inject(LocalStorageService)
    // this.localStorageService
    //   .set<AppTitle>('title', { appTitle: this.title })
    //   .subscribe((result) => console.log('successfully stored result', result));
    // this.localStorageService
    //   .set<AppTitle>('otherTitle', { appTitle: null })
    //   .subscribe((result) => console.log('successfully stored', result));
    // this.localStorageService
    //   .get<AppTitle>('title')
    //   .subscribe((result) => console.log('successfully got', result?.appTitle));
    // this.localStorageService
    //   .get<AppTitle>('otherTitle')
    //   .subscribe((result) => console.log('successfully got', result?.appTitle));
    // this.localStorageService
    //   .remove('title')
    //   .subscribe((result) => console.log('successfully removed', result));
    // this.localStorageService
    //   .removeAll()
    //   .subscribe((result) =>
    //     console.log('cleared local storage with result', result),
    //   );
    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe(console.log);
  }
}
