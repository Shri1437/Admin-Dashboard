import { PlaceSchedulePermission } from "../../../../../core/models/permission";
import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { DataTableModel } from "src/app/core/models/datatable.model";
import { HttpStatus } from "src/app/core/models/http-status";
import {
  PaginationComponent,
} from "ngx-bootstrap/pagination";

import { ToastrService } from "ngx-toastr";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { UserSearchModel } from "src/app/shared/models/user-search.model";
import { NgxUiLoaderService } from "ngx-ui-loader";
import {
  IPlacesService,
  PLACES_SERVICE,
} from "../../services/IPlacesService";
import { PlaceListModel } from "../../models/place-list.model";
import { PlacesService } from "../../services/PlacesService";
import { HTTP_SERVICE } from "src/app/shared/common/IHttpService";
import { HttpService } from "src/app/shared/common/HttpService";

@Component({
  selector: "app-places-list",
  templateUrl: "./places-list.component.html",
  styleUrls: ["./places-list.component.scss"],
  providers:[
     {
        provide: PLACES_SERVICE,
        useClass: PlacesService,
      },
       {
          provide: HTTP_SERVICE,
          useClass: HttpService,}
  ]
})
export class PlacesListComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  currentPage: number = 0;
  itemsPerPage: number = 5;
  searchModel: UserSearchModel;
  placesDataTableList: DataTableModel<PlaceListModel>;
  modalRef: BsModalRef;
  @ViewChild("pagination") pagination: PaginationComponent;
  groupModel: PlaceListModel;
  Permissions = PlaceSchedulePermission;

  searchTerm: string = "";
  deletePlaceId: number;
  userGroupList: any;

  constructor(@Inject(PLACES_SERVICE) private _placeService: IPlacesService,
    private toaster: ToastrService,
    private _uiLoader: NgxUiLoaderService,
    private modalService: BsModalService,
  ) {}

  loadPaginatedPlacesList(searchModel) {
    // console.log(this.searchModel, "searchModel");

    this._placeService.getAllPlaces(searchModel).subscribe(
      (response) => {
        if (response.Status === HttpStatus.Success) {
          this.placesDataTableList.RecordsTotal = response?.Data?.RecordsTotal;
          this.placesDataTableList.DataList = response?.Data?.Data;
          this._uiLoader.stop();
        } else {
          this._uiLoader.stop();
          this.placesDataTableList.DataList = [];
        }
        this.currentPage = this.searchModel.page;
      },
      (error) => {
        this._uiLoader.stop();
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchModel = new UserSearchModel();
    this.placesDataTableList = new DataTableModel<PlaceListModel>();
    this._uiLoader.start();
    this.loadPaginatedPlacesList(this.searchModel);
  }

  pageChanged(event: number): void {
    const pageSize = 5;
    const currentPage = event;
    this.searchModel.currentPage = currentPage;
    this.searchModel.page = (currentPage - 1) * pageSize;
    this.searchModel.pageSize = pageSize;
    this.loadPaginatedPlacesList(this.searchModel);
  }

  onPageSizeChange(): void {
    this.searchModel.currentPage = 1;
    this.loadPaginatedPlacesList(this.searchModel);
  }

  removePlace(removeItemModal: TemplateRef<any>, id: any) {
    this.deletePlaceId = id;
    this.modalRef = this.modalService.show(removeItemModal, {
      backdrop: "static",
      keyboard: false,
      class: "modal-dialog-centered",
    });
  }

  // confirmDelete() {
  //   this._placeService.deletePlaceById(this.deletePlaceId).subscribe(
  //     (response) => {
  //       if (response.Status === HttpStatus.Success) {
  //         this.toaster.success(response.Message, "Deleted");
  //         this.modalRef.hide();
  //         this.placesDataTableList.DataList = this.placesDataTableList.DataList.filter(
  //           (place) => place.Id !== this.deletePlaceId
  //         );
  //         this.loadPaginatedPlacesList(this.searchModel);
  //       } else {
  //         this.toaster.error(response.Message, "failed");
  //       }
  //     },
  //     (error) => {
  //       this.toaster.error(error, "failed");
  //     }
  //   );
  // }

  UserGroupListModal(userGroupListModalTemplate: TemplateRef<any>, List: any) {
    this.userGroupList = List;
    // console.log(this.userGroupList);

    this.modalRef = this.modalService.show(userGroupListModalTemplate, {
      backdrop: "static",
      keyboard: false,
      class: "modal-dialog-centered",
      initialState: List,
    });
  }

  onSearchChange(searchTerm: string) {
    if (!searchTerm) {
      this.loadPaginatedPlacesList(this.searchModel);
    }
    this.placesDataTableList.DataList = this.placesDataTableList.DataList.filter(
      (place) => {
        return (
          place.PlaceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.Location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.City?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    );
  }
}
