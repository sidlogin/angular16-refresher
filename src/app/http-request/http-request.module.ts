import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRequestRoutingModule } from './http-request-routing.module';
import { HttpRequestComponent } from './http-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    HttpRequestComponent,
    ApiIntegrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpRequestRoutingModule
  ],
  providers: [ApiService]
})
export class HttpRequestModule { }
