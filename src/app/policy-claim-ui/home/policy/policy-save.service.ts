import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicySaveService {
  policyCreateUrl: string;

  constructor(private http: Http) { }


  savePolicyDetails(policyFormGroup: FormGroup) : Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(policyFormGroup.value);
    console.log("body->",body);
    return this.http.post(this.policyCreateUrl, body, options).pipe(map((res: Response) => res.json()));
  }
}

