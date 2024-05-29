import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DateService } from '../../services/date.service'
import { ChangeDetectorRef } from '@angular/core'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-countdown-form',
  templateUrl: './countdown-form.component.html',
  styleUrls: ['./countdown-form.component.scss'],
})
export class CountdownFormComponent implements OnInit, OnDestroy {
  countdownForm: FormGroup
  countdownDate: Date | null = null
  countdownTitle: string | null = null

  private subscriptions: Subscription[] = []

  constructor(
    private fb: FormBuilder,
    private dateService: DateService,
    private cdr: ChangeDetectorRef,
  ) {
    this.countdownForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.dateService.date$.subscribe(date => {
        this.countdownDate = date
        this.countdownForm.get('date')?.setValue(date)
      }),
    )

    this.subscriptions.push(
      this.dateService.title$.subscribe(title => {
        this.countdownTitle = title
        this.countdownForm.get('title')?.setValue(title)
      }),
    )
  }

  onDateChange(): void {
    if (this.countdownForm.valid) {
      const date = this.countdownForm.get('date')?.value
      this.dateService.setDate(date)
      // this.countdownDate = date
      //this.cdr.detectChanges()
    }
  }
  onTitleChange(): void {
    if (this.countdownForm.valid) {
      const title = this.countdownForm.get('title')?.value
      this.dateService.setTitle(title)
      //  this.countdownTitle = title
      //this.cdr.detectChanges()
    }
  }

  startCountdown() {
    // if (this.countdownForm.valid) {
    this.onTitleChange()
    this.onDateChange() // Ensure both the title and date are updated
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
