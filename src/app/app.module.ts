import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CountdownFormComponent } from './components/countdown-form/countdown-form.component'
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component'

import { SharedModule } from './shared.module'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountdownFormComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
