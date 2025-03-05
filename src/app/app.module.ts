import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { ProviderList } from './app-provider-registrar';

import { AuthenticationService } from './account/auth/services/authService';
import { Auth_SERVICE } from './account/auth/services/IauthService';
import { HTTP_SERVICE } from './shared/common/IHttpService';
import { HttpService } from './shared/common/HttpService';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from "ngx-ui-loader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#e9b40b",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 80,
  "bgsType": "ball-spin-clockwise",
  "blur": 11,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#df9821",
  "fgsPosition": "center-center",
  "fgsSize": 70,
  "fgsType": "three-strings",
  "gap": 24,
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#fdd60d",
  "pbDirection": "ltr",

  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300

}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LayoutsModule,
    AppRoutingModule,
    CarouselModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ScrollToModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule

  ],
  bootstrap: [AppComponent],
  providers: [
    ProviderList,
  ],
})
export class AppModule {}
