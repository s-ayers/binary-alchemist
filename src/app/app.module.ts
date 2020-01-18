import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
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
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ProfileComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    SocialMediaComponent,
    MenuComponent,
    BlogComponent,
    PageComponent,
    ExperienceComponent,
    EducationComponent,
    AwardsComponent,
    ReferenceComponent,
    EscapeHtmlPipe,
    ProjectsComponent,
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    MalihuScrollbarModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    // library.add(faCoffee);
  }
}
