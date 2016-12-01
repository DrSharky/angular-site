import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidenavComponent} from './sidenav/sidenav.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatDisplayComponent } from './chat-display/chat-display.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Home', redirectTo: '' },
  { path: 'About', component: AboutPageComponent },
  { path: 'Work', component: WorkPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    WorkPageComponent,
    AboutPageComponent,
    HomePageComponent,
    ChatDisplayComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
