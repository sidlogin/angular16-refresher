import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateManagementRoutingModule } from './state-management-routing.module';
import { StateManagementComponent } from './state-management.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SecondReceiverComponent } from './components/second-receiver/second-receiver.component';
import { SharedDataService } from './services/shared-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StateManagementComponent,
    SenderComponent,
    ReceiverComponent,
    SecondReceiverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StateManagementRoutingModule
  ],
  providers: [SharedDataService],
})
export class StateManagementModule { }
