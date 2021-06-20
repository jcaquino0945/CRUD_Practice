import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { MapCurrentComponent } from './map-current/map-current.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    DiaryComponent,
    DiaryDetailComponent,
    MapComponent,
    MapCurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
