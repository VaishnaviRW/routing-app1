import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRountingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FairsDashboardComponent } from './fairs-dashboard/fairs-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductComponent } from './products-dashboard/product-detail/product-detail.component';
import { ProductFormComponent } from './products-dashboard/product-form/product-form.component';


import { UserDetailsComponent } from './users-dahboard/users-details/users-details.component';
import { UserFormComponent } from './users-dahboard/user-form/user-form.component';

import { FairsDetailsComponent } from './fairs-dashboard/fairs-details/fairs-details.component';
import { FairsCardComponent } from './fairs-dashboard/fairs-card/fairs-card.component';

import { UsersDashboardComponent } from './users-dahboard/users-dahboard.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashboardComponent,
    HomeDashboardComponent,
    GetConfirmComponent,
    NavbarComponent,
    PageNotFoundComponent,

    UsersDashboardComponent,
    UserDetailsComponent,
    UserFormComponent,

    ProductsDashboardComponent,
    
    ProductFormComponent,

    FairsDetailsComponent,
    FairsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    RouterModule,

    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }