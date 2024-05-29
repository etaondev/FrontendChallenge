import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CountdownFormComponent } from './components/countdown-form/countdown-form.component'
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component'
import { AppRoutingModule } from './app-routing.module'
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, CountdownFormComponent, CountdownTimerComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
