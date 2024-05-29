import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private readonly DATE_KEY = 'countdownDate'
  private readonly TITLE_KEY = 'countdownTitle'

  constructor() {}

  setDate(date: Date): void {
    localStorage.setItem(this.DATE_KEY, date.toISOString())
  }

  getDate(): Date | null {
    const storedDate = localStorage.getItem(this.DATE_KEY)
    return storedDate ? new Date(storedDate) : null
  }

  setTitle(title: string): void {
    localStorage.setItem(this.TITLE_KEY, title)
  }

  getTitle(): string | null {
    return localStorage.getItem(this.TITLE_KEY)
  }

  clearData(): void {
    localStorage.removeItem(this.DATE_KEY)
    localStorage.removeItem(this.TITLE_KEY)
  }
}
