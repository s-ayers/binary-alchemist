import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { MenuComponent } from './components/menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { PageComponent } from './components/page/page.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { SettingsComponent } from './settings/settings.component';
import { TestsComponent } from './tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    BlogComponent,
    ContactComponent,
    EducationComponent,
    EscapeHtmlPipe,
    ExperienceComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    PageComponent,
    PortfolioComponent,
    ProfileComponent,
    ProjectsComponent,
    ReferenceComponent,
    ResumeComponent,
    SettingsComponent,
    SkillsComponent,
    SocialMediaComponent,
    TestsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
