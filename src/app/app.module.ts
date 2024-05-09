import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SummaryComponent } from './summary/summary.component';
import { SkilllsComponent } from './skillls/skillls.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PracticalComponent } from './practical/practical.component';
import { PracticalParentComponent } from './practical-parent/practical-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    SummaryComponent,
    SkilllsComponent,
    ExperienceComponent,
    ContactComponent,
    LayoutComponent,
    NavbarComponent,
    PracticalComponent,
    PracticalParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
