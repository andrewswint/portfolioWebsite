import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample app',
    summary: 'Test summary',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.JAVASCRIPT],
    pictures: [],
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Andrew Swint - Portfolio');
  }
}
