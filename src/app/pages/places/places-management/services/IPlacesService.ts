import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { BaseResponseModel } from "src/app/core/models/base-response.model";
import { DataTableModel } from "src/app/core/models/datatable.model";
import { PlaceListModel } from "../../places-management/models/place-list.model";
import { SearchModel } from "../../places-management/models/search.model";

export const PLACES_SERVICE = new InjectionToken("places service");

export interface IPlacesService {
  /**
   * Get all paged places list
   * @param searchModel Place search model
   */
  getAllPlaces(searchModel: SearchModel): Observable<BaseResponseModel<DataTableModel<PlaceListModel>>>;

  // /**
  //  * Create a new place
  //  * @param model Place model
  //  */
  // createPlace(model: PlaceListModel): Observable<BaseResponseModel<PlaceListModel>>;

  // /**
  //  * Update an existing place
  //  * @param model Place model
  //  */
  // updatePlace(model: PlaceListModel): Observable<BaseResponseModel<PlaceListModel>>;

  // /**
  //  * Get place details for update
  //  * @param id Place ID
  //  */
  // getPlaceDetails(id: number): Observable<BaseResponseModel<PlaceListModel>>;

  // /**
  //  * Delete a place by ID
  //  * @param id Place ID
  //  */
  // deletePlaceById(id: number): Observable<BaseResponseModel<any>>;
}
