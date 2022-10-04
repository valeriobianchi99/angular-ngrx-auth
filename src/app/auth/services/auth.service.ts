import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'

import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {environment} from 'src/environments/environment'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface): CurrentUserInterface => response.user))
  }
}
