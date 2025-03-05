import { BaseModel } from "src/app/core/models/base.model";
export class UserModel extends BaseModel {
  Name: string;
  Code: string;
  Password: string;
  MobileNumber: number;
  EmailAddress: string;
  UserRole: string;
  Profile: string;
  GenderId: number;
  Active:boolean;
}
