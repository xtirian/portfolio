import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent {
  isMobile = false;
  isTablet = false;
  isDesktop = false;
  heroBannerSrc = '';
  buttonText = "Contact Me";
  buttonLink = null;

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
          this.updateHeroBannerSrc();
        }
      });
  }

  updateHeroBannerSrc(): void {
    if (this.isMobile) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-mobile.png';
    } else if (this.isTablet) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-tablet.jpg';
    } else if (this.isDesktop) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-desktop.jpg';
    }
  }
}
