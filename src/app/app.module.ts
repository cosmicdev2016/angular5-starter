import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { TablesComponent } from './tables/tables.component';

import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos/todos.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IntroComponent,
    TablesComponent,
    TodosComponent,
    FormsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
