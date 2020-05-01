import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeader } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DateComponent } from './date/date.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppMainComponent,
    AppFooterComponent,
    DateComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
