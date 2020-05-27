import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyMasterComponent } from './property-master/property-master.component';
import { ContactMasterComponent } from './contact-master/contact-master.component';
import { CallLogComponent } from './call-log/call-log.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { RackShelfComponent } from './rack-shelf/rack-shelf.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyMasterComponent,
    ContactMasterComponent,
    CallLogComponent,
    EquipmentComponent,
    RackShelfComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: PropertyMasterComponent},
      {path: "callLog", component: CallLogComponent},
      {path:"contacts", component: ContactMasterComponent},
      {path:"equipment", component: EquipmentComponent},
      {path:"rack-shelf", component: RackShelfComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
