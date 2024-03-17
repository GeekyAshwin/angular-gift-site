import { Injectable } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  #isBrowser(): Observable<boolean> {
    return of(isPlatformBrowser(this.platformId));
  }

  public set<T = unknown>(key: string, value: T | null): Observable<boolean> {
    return this.#isBrowser().pipe(
      map((canUse) => {
        if (canUse) {
          localStorage.setItem(key, JSON.stringify(value));
          return true;
        }
        return false;
      }),
    );
  }

  public get<T = unknown>(key: string): Observable<T | null> {
    return this.#isBrowser().pipe(
      map((canUse) => {
        if (canUse) {
          const response = localStorage.getItem(key);
          return response === null ? null : JSON.parse(response);
        }
        return false;
      }),
    );
  }

  public remove(key: string): Observable<null | false> {
    return this.#isBrowser().pipe(
      map((canUse) => {
        if (canUse) {
          localStorage.removeItem(key);
          return null;
        }
        return false;
      }),
    );
  }

  public removeAll(): Observable<null | false> {
    return this.#isBrowser().pipe(
      map((canUse) => {
        if (canUse) {
          localStorage.clear();
          return null;
        }
        return false;
      }),
    );
  }
}
