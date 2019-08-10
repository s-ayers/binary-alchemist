import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HomeComponent } from "./home/home.component";
import { ResumeComponent } from './components/resume/resume.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ResumeComponent, ProfileComponent, GalleryComponent, PortfolioComponent, ContactComponent, ToolbarComponent, HeaderComponent, SocialMediaComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
