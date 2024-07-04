import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenService {
  private apiUrl = '/api/api/v1/shorten';

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { url: originalUrl });
  }
}
