import { Provider } from "@angular/core";
import { PLACES_SERVICE } from "./services/IPlacesService";
import { PlacesService } from "./services/PlacesService";
import { HTTP_SERVICE } from "src/app/shared/common/IHttpService";
import { HttpService } from "src/app/shared/common/HttpService";
export const ProviderList: Provider[] = [
  {
    provide: PLACES_SERVICE,
    useClass: PlacesService,
  },
  {
    provide: HTTP_SERVICE,
    useClass: HttpService,
  },
];
