import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    WorkerFormComponent,
    WorkerDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
