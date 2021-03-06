import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Config } from 'protractor';
import { GitapiService } from '../gitapi.service';

@Component({
  selector: 'app-projects-tabs',
  templateUrl: './projects-tabs.component.html',
  styleUrls: ['./projects-tabs.component.scss']
})
export class ProjectsTabsComponent implements OnInit {
  public readonly repos: any[] = [];
  public readonly langs: string[] = ["All"];

  public backgroundColor: ThemePalette = "primary";
  public color: ThemePalette = "accent";

  constructor(private gitapi: GitapiService) { }

  ngOnInit(): void {
    this.gitapi.getConfig().subscribe((data: Config) => 
    data.forEach((repo: any) => {
      if(!repo.fork && repo.language && repo.description){
        this.repos.push({
          name: repo.name,
          desc: repo.description,
          lang: repo.language,
          url: repo.html_url,
        })
      }
      for(let repo of this.repos){
        if(!this.langs.includes(repo.lang)){
          this.langs.push(repo.lang);
        }
      }
    }));
  }
}
