import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DeviceService } from './service/device.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PaginationModule } from 'ng2-pagination';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        DeviceSearchComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        Ng2PaginationModule
    ],
    providers: [DeviceService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
