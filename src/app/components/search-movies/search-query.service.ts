import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryService {

  constructor(private http: HttpClient) { 
  }

  public search(search_str : string): Observable<any> {
    // Http get
    return this.http.get("https://www.omdbapi.com/?s=" +search_str+ "&apikey=" +environment.OMDB_APIKEY);
  }
}
