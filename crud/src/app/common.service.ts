import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  addData(user: any, type: any): Observable<any> {
    if (type == "add") {
      return this.http.post(this.url + "users", user)
    }
    else {
      return this.http.put(this.url + "users/" + user.id, user)
    }
  }

  getAllData(): Observable<any> {
    return this.http.get(this.url + "users")
  }

  deleteDataById(id: any): Observable<any> {
    return this.http.delete(this.url + "users/" + id)
  }

  updateUser(id: any): Observable<any> {
    return this.http.get(this.url + "users/" + id)
  }
}
