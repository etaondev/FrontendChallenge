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
  private element: HTMLElement
  resizeService: any

  constructor(private el: ElementRef) {
    this.element = el.nativeElement
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.adjustFontSize()
    }, 0)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] || changes['targetDate']) {
      this.adjustFontSize()
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.adjustFontSize()
  }

  public adjustFontSize(): void {
    const element = this.element
    const parentWidth = element.parentElement.offsetWidth
    let fontSize = 300 // Start with a large font size
    element.style.fontSize = `${fontSize}px`

    while (element.scrollWidth > parentWidth && fontSize > 0) {
      fontSize -= 1
      element.style.fontSize = `${fontSize}px`
    }
    this.resizeService.setWidth(this.element.scrollWidth)
  }
}
