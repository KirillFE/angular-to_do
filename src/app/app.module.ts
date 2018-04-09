import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todoitem/todoitem.component';
//services
import { TodolistService } from './shared/todolist.service';
import { rootRouterConfig } from './app.routes';

enableProdMode();

class CustomErrorHandler implements ErrorHandler {
  call(error, stackTrace = null, reason = null) {
    console.log(error + "\n" + stackTrace);
  }
  handleError(error: any): void {
    console.log(error);
  }
}

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  declarations: [
    AppComponent, HomeComponent, TodolistComponent,TodoItemComponent,

  ],
  providers: [ 
    //services
    TodolistService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
