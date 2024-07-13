import { Component } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import {faPhone,faEnvelope, faHome,faClock} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faInstagram = faInstagramSquare;
  faFacebook=faFacebookF;
  faPhone=faPhone;
  faHome =faHome;
  faEnvelope=faEnvelope;
  faClock=faClock;
  address="COIO\nRoom 1-2, Sharda Estate,\nVazira Naka,\nBorivali (West),\nMumbai-400091\n";
}
