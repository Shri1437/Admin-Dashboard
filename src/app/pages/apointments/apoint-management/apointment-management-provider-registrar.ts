import { Provider } from "@angular/core";
import { APOINTMENT_SERVICE } from "./services/IApointmentService";
import { ApointmentService } from "./services/ApointmentService";
export const ProviderList: Provider[] = [
  {
    provide: APOINTMENT_SERVICE,
    useClass: ApointmentService,
  },
];
