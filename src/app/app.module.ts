import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommitComponent } from './commit/commit.component';
import { MatIconModule } from '@angular/material/icon';
import { ListCommitsComponent } from './list-commits/list-commits.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CommitComponent,
    ListCommitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
