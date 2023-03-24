import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  step: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) { }

  // Handle any api error
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError('Please check the provided Settings');
  }

  checkToken(token: string) {
    return this.http.get<CHECK>(environment.baseUrl + environment.check + '?get=' + token).pipe(catchError(this.handleError));
  }

  CheckDomain(domain: string) {
    return this.http.get<CHECKDomain>(environment.baseUrl + environment.check + '?serviceCode=' + domain).pipe(catchError(this.handleError));
  }
}

export interface CHECK {
  data: boolean;
  name: string;
}


export interface CHECKDomain {
  avilable: boolean;
}
