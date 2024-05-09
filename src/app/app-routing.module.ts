import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SummaryComponent } from './summary/summary.component';
import { SkilllsComponent } from './skillls/skillls.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { PracticalComponent } from './practical/practical.component';
import { PracticalParentComponent } from './practical-parent/practical-parent.component';

const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'skillls', component:SkilllsComponent},
  {path:'summary', component:SummaryComponent},
  {path:'introduction', component:IntroductionComponent},
  {path:'practical', component:PracticalComponent},
  {path:'practical-parent', component:PracticalParentComponent},
  {path:'', component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
