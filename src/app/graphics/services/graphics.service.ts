import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor( private http: HttpClient ) { }


  getData() {
    return this.http.get('http://localhost:3000/grafica')
              .pipe(
                delay(1500),
                map( resp => {
                  // asi puede ser
                  // const newResp = [];
                  // newResp.push(Object.keys(resp));
                  // newResp.push(Object.values(resp));
                  // return newResp;

                  // o asi tambien
                  const labels = Object.keys(resp);
                  const values = Object.values(resp);

                  return { labels, values };
                })
              )
  };
}
