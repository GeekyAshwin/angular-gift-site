import { Injectable } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }


  public save(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(key, value);
    }
  }

  public get(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem(key);
    }
    return '';
  }
}
