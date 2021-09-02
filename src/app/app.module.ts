import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionAComponent } from './section-a/section-a.component';
import { UserProfileComponent } from './Exam/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionAComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
