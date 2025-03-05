import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgSelectModule } from "@ng-select/ng-select";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { ProviderList } from "./user-management-provider-registrar";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserCreateComponent } from "./components/user-list/user-create/users-create.component";
@NgModule({
  declarations: [
   
    UserCreateComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    UIModule,
    TabsModule,
    UserManagementRoutingModule, NgSelectModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(), 
  ],
  providers: [
    ProviderList,
  ]
})
export class UserManagementModule { }
