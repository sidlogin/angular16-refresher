import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpApiRoutingModule } from './http-api-routing.module';
import { HttpApiComponent } from './http-api.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    HttpApiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpApiRoutingModule
  ],
  providers: [ApiService]
})
export class HttpApiModule { }
