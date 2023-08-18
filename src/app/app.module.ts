import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogDashboardComponent } from './log-dashboard/log-dashboard.component';
import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './date-format.pipe';
import { MatPaginatorModule }  from '@angular/material/paginator'
import { MatSortModule }  from '@angular/material/sort'
import { MatTableModule }  from '@angular/material/table'
import { MatFormFieldModule }  from '@angular/material/form-field'
import { MatInputModule }  from '@angular/material/input'






const routes: Routes = [
  { path: 'log-dashboard', component: LogDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogDashboardComponent,
    DateFormatPipe
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent, LogDashboardComponent]
})
export class AppModule { }
