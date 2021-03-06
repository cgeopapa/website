import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LiveProjectsComponent } from './live-projects/live-projects.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'live-projects', component: LiveProjectsComponent},
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
