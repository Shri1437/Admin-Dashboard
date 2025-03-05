import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { User } from "src/app/core/models/auth.models";

export const PERMISSIONS_SERVICE = new InjectionToken("permissions service");

export interface IPermissionsService {

  getUserPermissions();
}
