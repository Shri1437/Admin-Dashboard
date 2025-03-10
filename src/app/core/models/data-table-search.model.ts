import { BaseModel } from "./base.model";
export class DataTableSearchModel extends BaseModel {
  page: number = 0;
  pageSize: number = 5;
  currentPage:number = 1;
  searchText: string = "";
  searchNameTerm: string = "";
  searchStatusTerm: number;
  searchEmailTerm: string = "";
  searchNumberTerm: string = "";
  searchCodeTerm: string = "";
  searchStoreTypeTerm: number;
  StoreId: number = 0;
  AssetId: number = null;
  UserId: number = null;
  GroupId: number = null;
  SOPId: number = null;
  StatusId: number = 0;
}
