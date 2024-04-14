import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scrollService/scroll.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() buttonText: string = '';
  @Input() link: string | null = null;

  constructor(private scrollService: ScrollService) { }

  ngOnInit():void {
    const scrollToElement = this.scrollService.getScrollToElement();
    if(scrollToElement) {
      scrollToElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }


}

