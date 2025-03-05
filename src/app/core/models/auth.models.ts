
import { BaseModel } from "src/app/shared/models/base.model";

export class User extends BaseModel{
    [x: string]: any;

    Name: string;
    password: string;
    AccessToken:string;
    Address?: string;
    EmailAddress?: string;
    MobileNumber?: string;
    Password: string;
    Active?:boolean;
    StoreIds?: Array<string>;
    UserRoleName?: string;
    UserName: number;
    AvailableStores:Array<any>;
    AvailableUserRole:Array<any>;
    UserPermissions:Array<string>;
    CustomProperties:{};
}
