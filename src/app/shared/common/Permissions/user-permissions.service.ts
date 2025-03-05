import { Inject, Injectable } from "@angular/core";
import {
  Auth_SERVICE,
  IAuthenticationService,
} from "src/app/account/auth/services/IauthService";
import { IPermissionsService } from "./Iuser-permissions.service";

@Injectable({
  providedIn: "root",
})
export class UserPermissionsService implements IPermissionsService {
  constructor(
    @Inject(Auth_SERVICE) private authenticationService: IAuthenticationService
  ) {}

  getUserPermissions() {
    let permission = this.authenticationService.getCurrentuser();
    return permission.UserPermissions ?? [];
  }
}
