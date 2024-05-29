import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DateService } from '../../services/date.service'
import { ChangeDetectorRef } from '@angular/core'
@Component({
  selector: 'app-countdown-form',
  templateUrl: './countdown-form.component.html',
  styleUrls: ['./countdown-form.component.scss'],
})
export class CountdownFormComponent implements OnInit {
  countdownForm: FormGroup
  countdownDate: Date | null = null
  countdownTitle: string | null = null

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
    const storedDate = this.dateService.getDate()
    const storedTitle = this.dateService.getTitle()
    if (storedDate) {
      this.countdownForm.get('date')?.setValue(storedDate)
      this.countdownDate = storedDate
    }
    if (storedTitle) {
      this.countdownForm.get('title')?.setValue(storedTitle)
      this.countdownTitle = storedTitle
    }
  }

  onDateChange(): void {
    if (this.countdownForm.valid) {
      const date = this.countdownForm.get('date')?.value
      this.dateService.setDate(date)
      this.countdownDate = date
      this.cdr.detectChanges()
    }
  }
  onTitleChange(): void {
    if (this.countdownForm.valid) {
      const title = this.countdownForm.get('title')?.value
      this.dateService.setTitle(title)
      this.countdownTitle = title
      this.cdr.detectChanges()
    }
  }

  startCountdown() {
    if (this.countdownForm.valid) {
      this.onTitleChange()
      this.onDateChange() // Ensure both the title and date are updated
    }
  }
}
