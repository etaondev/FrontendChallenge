import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DateService } from '../../services/date.service'
import { BehaviorSubject, Subscription } from 'rxjs'
@Component({
  selector: 'app-countdown-form',
  templateUrl: './countdown-form.component.html',
  styleUrls: ['./countdown-form.component.scss'],
})
export class CountdownFormComponent implements OnInit, OnDestroy {
  countdownForm: FormGroup
  countdownDate: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null)
  countdownTitle: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)

  private subscriptions: Subscription[] = []

  constructor(
    private fb: FormBuilder,
    private dateService: DateService
  ) {
    this.countdownForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.dateService.date$.subscribe(date => {
        this.countdownDate.next(date)
        this.countdownForm.get('date')?.setValue(date)
      }),
    )

    this.subscriptions.push(
      this.dateService.title$.subscribe(title => {
        this.countdownTitle.next(title);
        this.countdownForm.get('title')?.setValue(title)
      }),
    )
  }

  onDateChange(): void {
    if (this.countdownForm.valid) {
      const date = this.countdownForm.get('date')?.value
      this.dateService.setDate(date)
      this.countdownDate.next(date);
    }
  }
  onTitleChange(): void {
    if (this.countdownForm.valid) {
      const title = this.countdownForm.get('title')?.value
      this.dateService.setTitle(title)
      this.countdownTitle.next(title);
    }
  }

  startCountdown() {
    this.onTitleChange()
    this.onDateChange() // Ensure both the title and date are updated
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
