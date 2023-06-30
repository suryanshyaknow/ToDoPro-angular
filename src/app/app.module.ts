import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoItemsComponent,
    AddToDoComponent,
    ToDoItemsComponent,
    AboutComponent
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
