import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        if (result.matches) {
          if (
            result.breakpoints[
              '(max-width: 599.98px) and (orientation: portrait)'
            ]
          ) {
            this.isMobile = true;
            this.isTablet = false;
            this.isDesktop = false;
          }
          if (
            result.breakpoints[
              '(max-width: 959.98px) and (orientation: landscape)'
            ] ||
            result.breakpoints[
              '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)'
            ]
          ) {
            this.isMobile = false;
            this.isTablet = true;
            this.isDesktop = false;
          }
          if (
            result.breakpoints[
              '(min-width: 1280px) and (orientation: landscape)'
            ]
          ) {
            this.isMobile = false;
            this.isTablet = false;
            this.isDesktop = true;
          }
        }
      })
   }
}
