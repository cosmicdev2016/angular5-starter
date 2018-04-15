import { ForObserableService } from './for-obserable.service';
import { PostsService } from './posts.service';
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
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservableComponent } from './observable/observable.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ReversePipe } from './reverse.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ColorDirective } from './color.directive';
import { ColorDirectiveComponent } from './color-directive/color-directive.component';
import { RestfulComponent } from './restful/restful.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'services', component: ServiceIntroComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'pipes', component: PipeComponent },
  { path: 'directive', component: ColorDirectiveComponent },
  { path: 'restful', component: RestfulComponent }
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
    ServiceIntroComponent,
    ParentComponent,
    ChildComponent,
    ObservableComponent,
    Comp1Component,
    Comp2Component,
    ReversePipe,
    PipeComponent,
    ColorDirective,
    ColorDirectiveComponent,
    RestfulComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [PostsService, ForObserableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
