import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'

@Directive({
  selector: '[appFitText]',
})
export class FitTextDirective implements AfterViewInit, OnChanges {
  @Input() title: string
  @Input() targetDate: Date

  private element: HTMLElement
  private parentElement: HTMLElement

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.element = el.nativeElement
    this.parentElement = this.renderer.parentNode(this.element)
  }

  ngAfterViewInit() {
    // Ensure the inputs are set and then adjust the text size
    setTimeout(() => this.fitText(), 0)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] || changes['targetDate']) {
      this.fitText()
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.fitText()
  }

  private fitText() {
    if (!this.parentElement) {
      return
    }

    const parentWidth = this.parentElement.clientWidth
    let fontSize = 10
    let extraPadding = 16
    this.renderer.setStyle(this.element, 'font-size', `${fontSize}px`)

    while (this.element.scrollWidth <= parentWidth && fontSize < 100) {
      fontSize++
      this.renderer.setStyle(this.element, 'font-size', `${fontSize}px`)
    }

    // Once it exceeds the parent width, step back by one
    this.renderer.setStyle(this.element, 'font-size', `${fontSize - 1}px`)
  }
}
