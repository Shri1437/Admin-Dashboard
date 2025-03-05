import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/core/models/auth.models";
import { BaseResponseModel } from "src/app/core/models/base-response.model";

export const Auth_SERVICE = new InjectionToken("auth service");

export interface IAuthenticationService {

    //#region Properties
   /**
     * Returns the current user
     */
   get currentUserValue(): User
    //#endregion

   //#region methods

  login(email: string, password: string): Observable<BaseResponseModel<User>>;

  register(email: string, password: string, username: string, Address:string ,phone:number): Observable<BaseResponseModel<User>>;

  logout();

  IsUserLogin():boolean;
  getCurrentuser():User;
  getApiToken():string;
   //#endregion
}
