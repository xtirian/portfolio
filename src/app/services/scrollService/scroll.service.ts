import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToElementId!: ElementRef<HTMLElement>;

  setScrollToElementId(element: string): void {
    const elementRef = document.getElementById(element);
    if (elementRef) {
      this.scrollToElementId = new ElementRef(elementRef);
    }
  }

  getScrollToElement(): ElementRef {
    return this.scrollToElementId;
  }
}
