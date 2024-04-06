import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  /**
   * Returns the base API URL
   */
  public baseUrl(): string {
    return environment.apiUrl;
  }

  /**
   * Returns the URL with base API URL
   * @param url
   */
  public apiUrl(url: string): string {
    return `${this.baseUrl()}/${this.apiVersion()}/${url}`;
  }

  /**
   * Returns the API version
   */
  public apiVersion() {
    return environment.apiVersion;
  }
}
