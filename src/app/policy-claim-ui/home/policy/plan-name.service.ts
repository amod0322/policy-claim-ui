import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanNameService {
getPlanNameUrl:string='common/policy.dropdown.json';
  constructor(private http:Http) { }

  getPlanNames() : Observable<any>{
    return this.http.get(this.getPlanNameUrl).pipe(map((res: Response) => of(res)));
  }
}
