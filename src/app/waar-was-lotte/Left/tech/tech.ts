import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TechStackDataService } from '../../../services/tech-stack-data.service';
import { TechStack } from '../../../models/tech-stack.interface';

@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.html',
  styleUrls: ['./tech.css']
})
export class Tech implements OnInit {
  technologies: TechStack[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private techStackDataService: TechStackDataService
  ) {}

  ngOnInit(): void {
    this.techStackDataService.getTechStack().subscribe({
      next: (technologies) => {
        this.technologies = technologies;
      },
      error: (error) => {
        console.error('Error loading tech stack:', error);
        this.technologies = [];
      }
    });
  }

  getSafeHtml(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  openTechLink(link: string): void {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  openGitHubRepo(): void {
    window.open('https://github.com/LotteVerhoeven/my-project', '_blank', 'noopener,noreferrer');
  }
}
