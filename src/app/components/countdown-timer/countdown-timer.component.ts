import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core'
import { interval, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() title!: string
  @Input() targetDate!: Date
  countdown: string
  private subscription: Subscription

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startCountdown()
  }

  startCountdown(): void {
    this.subscription = interval(1000)
      .pipe(map(() => this.calculateCountdown()))
      .subscribe(time => {
        this.countdown = time
        this.cdr.detectChanges()
      })
  }

  calculateCountdown(): string {
    const now = new Date().getTime()
    const distance = new Date(this.targetDate).getTime() - now

    if (distance < 0) {
      return 'Countdown Ended'
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return `${days}days, ${hours}h, ${minutes}m, ${seconds}s`
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
