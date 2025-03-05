import { Provider } from "@angular/core";
import { HTTP_SERVICE } from "./shared/common/IHttpService";
import { HttpService } from "./shared/common/HttpService";

export const ProviderList: Provider[] = [
  {
    provide: HTTP_SERVICE,
    useClass: HttpService,
  }
];
