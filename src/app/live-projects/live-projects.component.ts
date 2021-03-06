import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-live-projects',
  templateUrl: './live-projects.component.html',
  styleUrls: ['./live-projects.component.scss']
})
export class LiveProjectsComponent implements OnInit {

  link=faExternalLinkAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
