import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private http: HttpClient) { }

  getNoticia(parametros : any): Observable<any>{
    const URL='https://newsapi.org/v2/top-headlines?country='
              + parametros.pais + '&category=' + parametros.categoria + '&apiKey=c561ce42a1e646fbaef209b6bc254519'
    return this.http.get(URL)
 }

}
