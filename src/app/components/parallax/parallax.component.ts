import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent {
  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach((layer: any) => {
      const speed = parseFloat(layer.getAttribute('data-speed') || '1'); // Default speed is 1
      layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
}
