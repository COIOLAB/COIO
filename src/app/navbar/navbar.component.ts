import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ScrollToBottom(){
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  }
}
