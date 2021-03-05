import { Component } from '@angular/core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'George Papadopoulos';
  faLinkedIn = faLinkedin;
  faGitHub = faGithubSquare;
  faMail = faEnvelope;
}
