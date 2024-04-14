import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToElement!: ElementRef<HTMLElement>;

  setScrollToElement(element: ElementRef<HTMLElement>): void {
    this.scrollToElement = element;
  }

  getScrollToElement(): ElementRef<HTMLElement> {
    return this.scrollToElement;
  }
}
