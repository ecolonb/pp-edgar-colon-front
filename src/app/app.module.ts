import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalLoadingModule } from './components/modal-loading/modal-loading.module';
import { ModalAlertsModule } from './components/modal-alerts/modal-alerts.module';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    ModalLoadingModule,
    ModalAlertsModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
