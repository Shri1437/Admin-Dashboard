import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../constants/api.const";
import { HttpParams } from "@angular/common/http";
import { BaseResponseModel } from "src/app/core/models/base-response.model";
import { DataTableModel } from "src/app/core/models/datatable.model";
import { HTTP_SERVICE, IHttpService } from "src/app/shared/common/IHttpService";
import { SearchModel } from "../../places-management/models/search.model";
import { PlaceListModel } from "../../places-management/models/place-list.model";
import { IPlacesService } from "./IPlacesService";

@Injectable()
export class PlacesService implements IPlacesService {
  constructor(@Inject(HTTP_SERVICE) private _httpService: IHttpService) {}

  /**
   * Fetch all places with pagination
   */
  getAllPlaces(
    searchModel: SearchModel
  ): Observable<BaseResponseModel<DataTableModel<PlaceListModel>>> {
    if (!searchModel) {
      throw "search model is empty";
    }

    let parameters = new HttpParams()
      .set("start", searchModel.page.toString())
      .set("length", searchModel.pageSize.toString());

    return this._httpService.get<BaseResponseModel<DataTableModel<PlaceListModel>>>(
      API.GET_ALL_PLACE_LIST,
      parameters
    );
  }

  // /**
  //  * Create a new place
  //  */
  // createPlace(model: PlaceListModel): Observable<BaseResponseModel<PlaceListModel>> {
  //   return this._httpService.post<BaseResponseModel<PlaceListModel>>(
  //     API.CREATE_PLACE,
  //     model
  //   );
  // }

  // /**
  //  * Update an existing place
  //  */
  // updatePlace(model: PlaceListModel): Observable<BaseResponseModel<PlaceListModel>> {
  //   return this._httpService.post<BaseResponseModel<PlaceListModel>>(
  //     API.UPDATE_PLACE_DETAILS,
  //     model
  //   );
  // }

  // /**
  //  * Fetch place details by ID
  //  */
  // getPlaceDetails(id: number): Observable<BaseResponseModel<PlaceListModel>> {
  //   let placeId = new HttpParams().set("id", id.toString());
  //   return this._httpService.get<BaseResponseModel<PlaceListModel>>(
  //     API.GET_PLACE_DETAILS,
  //     placeId
  //   );
  // }

  // /**
  //  * Delete a place by ID
  //  */
  // deletePlaceById(placeId: number): Observable<BaseResponseModel<any>> {
  //   let id = { Id: placeId };
  //   return this._httpService.post<BaseResponseModel<any>>(API.DELETE_PLACE, id);
  // }
}
