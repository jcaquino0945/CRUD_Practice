import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { MapComponent } from './map/map.component';
import { MapCurrentComponent } from './map-current/map-current.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'map', component: MapComponent },
  { path: 'mapCurrent', component: MapCurrentComponent },
  { path: 'diary/:id', component: DiaryDetailComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `Home`
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
