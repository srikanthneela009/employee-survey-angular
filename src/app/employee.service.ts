import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  public saveEmployeeSurvey(data): Observable<any> {
    return this.http.post(`${this.url}/survey/`, data);
  }

  public getData(id) {
    return this.http.get(`${this.url}/survey/${id}`);
  }
}
