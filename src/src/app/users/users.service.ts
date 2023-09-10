import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResultModel> {
    const result = this.http.get<ResultModel>(this.usersUrl);
    return result;
  }
}
