import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Log } from './log';
import { LOGS } from './mock-logs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getLogs(): Observable<Log[]> {
    return of(LOGS);
  }

  getValues() : Observable<string[]> {
    let apiUrl = 'api/values';

    return this.http.get<string[]>(apiUrl);
  }

  uploadFiles(fileToUpload: File): Observable<boolean> {
    let apiUrl = 'api/uploadFile';
    let formData: FormData = new FormData();

    let headers = new Headers();

    formData.append('fileKey', fileToUpload, fileToUpload.name);

    this.http
      .post(apiUrl, formData);
      //.map(() => { return true; });
      //.catch((e) => this.handleError(e));

    return of(true);
}

}
