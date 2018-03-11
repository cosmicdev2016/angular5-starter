import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [  
  {path:'forms',component:FormsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
