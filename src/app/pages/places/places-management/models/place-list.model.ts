import { BaseModel } from "src/app/core/models/base.model";

export class PlaceListModel extends BaseModel {
  PlaceId: number;
  PlaceName: string;
  Location: string;
  Category: string;
  Description: string;
  OpeningHours: string;
  ClosingHours: string;
  ContactNumber: string;
  Address: string;
  CreatedDate: string;
  UpdatedDate: string;
  Latitude: number;
  Longitude: number;
  Status: string;
  City : string
}
