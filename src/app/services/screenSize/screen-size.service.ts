import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  constructor() {
    this.checkViewportSize();
    window.addEventListener('resize', this.checkViewportSize);
  }

  checkViewportSize = () => {
    const width = window.innerWidth;
    if (
      width <= 599.98 &&
      window.matchMedia('(orientation: portrait)').matches
    ) {
      this.isMobile = true;
      this.isTablet = false;
      this.isDesktop = false;    } else if (
      (width <= 959.98 &&
        window.matchMedia('(orientation: landscape)').matches) ||
      (width >= 600 &&
        width <= 839.98 &&
        window.matchMedia('(orientation: portrait)').matches) ||
      (width >= 840 && width <= 1400)
    ) {
      this.isMobile = false;

      this.isTablet = true;

      this.isDesktop = false;
    } else if( width >= 1400) {
      this.isMobile = false;

      this.isTablet = false;

      this.isDesktop = true;
    }
  };
}
