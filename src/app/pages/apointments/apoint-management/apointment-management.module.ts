import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UIModule } from "src/app/shared/ui/ui.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { NgSelectModule } from "@ng-select/ng-select";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ApointmentManagementRoutingModule } from "./apointment-management-routing.module";
import { ProviderList } from "./apointment-management-provider-registrar";
import { ApointmentListComponent } from './components/apointment-list/apointment-list.component';
@NgModule({
  declarations: [
   
  
    ApointmentListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    UIModule,
    TabsModule,
    ApointmentManagementRoutingModule, NgSelectModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(), 
  ],
  providers: [
    ProviderList,
  ]
})
export class ApointmentManagementModule { }
