import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  readonly rootUrl = 'http://localhost:8000';
   loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   public getLoggedInCountry:BehaviorSubject<any> = new BehaviorSubject<any>('undefined');
   public option1 = new Subject();
   public option2 = new Subject();
    forget_password: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
   public user: any;
   public admin: any;


  constructor(private http:HttpClient) { }

  userAuthentication(signInForm:any)
  {
    return this.http.post(this.rootUrl+'/auth/login',signInForm);
  }


}
