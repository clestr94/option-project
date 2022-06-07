import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ScrapeService {
  localport = '5000'
  URL = 'localhost:' + this.localport + '/api/v1/options/'
  baseUrl = 'http://127.0.0.1:5000/api/v1/options/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      Allow: '*'
    })
  };

  getOptionsInfo(path: string){
    return this.http.get(this.baseUrl + path, this.httpOptions)
      .pipe(
      );
  }

  constructor(private http: HttpClient) {
  }
}
