import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private readonly DATE_KEY = 'countdownDate'
  private readonly TITLE_KEY = 'countdownTitle'

  private dateSubject = new BehaviorSubject<Date | null>(this.getStoredDate())
  private titleSubject = new BehaviorSubject<string | null>(this.getStoredTitle())

  date$ = this.dateSubject.asObservable()
  title$ = this.titleSubject.asObservable()

  constructor() {}

  private getStoredDate(): Date | null {
    const storedDate = localStorage.getItem(this.DATE_KEY)
    return storedDate ? new Date(storedDate) : null
  }

  private getStoredTitle(): string | null {
    return localStorage.getItem(this.TITLE_KEY)
  }

  setDate(date: Date): void {
    localStorage.setItem(this.DATE_KEY, date.toISOString())
    this.dateSubject.next(date)
  }

  setTitle(title: string): void {
    localStorage.setItem(this.TITLE_KEY, title)
    this.titleSubject.next(title)
  }
}
