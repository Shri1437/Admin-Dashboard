import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/auth.models';
import { IAuthenticationService } from './IauthService';
import { Api } from '../constants/ApiConstants';
import { HTTP_SERVICE, IHttpService } from 'src/app/shared/common/IHttpService';
import { Router } from '@angular/router';
import { HttpStatus } from 'src/app/core/models/http-status';
import { BaseResponseModel } from 'src/app/core/models/base-response.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService implements IAuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(@Inject(HTTP_SERVICE) private httpService: IHttpService, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    // getArtistAllEvents(id: number): Observable<BaseResponseModel<ArtistEventsModel>> {
    //     throw new Error('Method not implemented.');
    // }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.httpService.post<BaseResponseModel<User>>(Api.LOGIN, {
          Email: email,
          Password: password,
          IsApp:false
        });
    }

    register(email: string, password: string, username: string, Address:string ,phone:number): Observable<BaseResponseModel<User>> {

        return this.httpService.post<any>(Api.REGISTER, {
            Name: username,
            EmailAddress: email,
            Address:Address,
            MobileNumber:phone,
            Password: password,

        })
            .pipe(map(response => {

                if (response.status == HttpStatus.Success) {
                    // login successful if there's a jwt token in the response
                    if (response.Data && response.Data.AccessToken) {
                        // localStorage.setItem('currentUser', JSON.stringify(response));

                        this.router.navigate(['/auth']);

                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        // localStorage.setItem('currentUser', JSON.stringify(response));
                        // this.currentUserSubject.next(response);
                    }
                    return response;
                }

            }));
    }

    IsUserLogin(): boolean {
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            return true
        }
        return false

    }
    getCurrentuser(): User {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let user = new User;
        if (!currentUser) {
            return user
        }
        return currentUser.Data ?? '';
    }

    getApiToken() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let user = new User;
        if (!currentUser) {
            return user
        }
        return currentUser.Data.AccessToken ?? '';
    }
    logout() {
        localStorage.removeItem('currentUser');
        localStorage.clear();
        this.router.navigate(['/auth']);
        this.currentUserSubject.next(null);
    }
}
