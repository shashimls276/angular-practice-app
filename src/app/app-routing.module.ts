import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/login";
import { HomeComponent } from "src/app/home/home.component";
import { AppComponent } from "src/app/app.component";

const routes: Routes = [
   
    {path : '', component: LoginComponent},
    {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
