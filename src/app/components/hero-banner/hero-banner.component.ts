import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ButtonComponent } from '../button/button.component';
import { ScreenSizeService } from '../../services/screenSize/screen-size.service';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss',
})
export class HeroBannerComponent {
  heroBannerSrc = '';
  buttonText = "Contact Me";
  buttonLink = null;

  constructor(private screenSizeService: ScreenSizeService) {
    this.updateHeroBannerSrc()
  }

  updateHeroBannerSrc(): void {
    if (this.screenSizeService.isMobile) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-mobile.png';
    } else if (this.screenSizeService.isTablet) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-tablet.jpg';
    } else if (this.screenSizeService.isDesktop) {
      this.heroBannerSrc = 'assets/images/profileImage/profile-desktop.jpg';
    }
  }
}
