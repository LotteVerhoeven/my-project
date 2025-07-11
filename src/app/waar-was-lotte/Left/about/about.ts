import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HobbyDataService } from '../../../services/hobby-data.service';
import { HobbyData } from '../../../models/hobby-data.interface';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit {
  hobbies: HobbyData[] = [];

  constructor(
    private hobbyDataService: HobbyDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadHobbies();
  }

  getSafeHtml(svg: string): SafeHtml {
    if (this.isSafari()) {
      return this.getSafariCompatibleSvg(svg);
    }
    
    let normalizedSvg = svg;
    
    if (normalizedSvg.includes('<svg') && !normalizedSvg.includes('width=') && !normalizedSvg.includes('height=')) {
      normalizedSvg = normalizedSvg.replace('<svg', '<svg width="100%" height="100%"');
    }
    
    if (normalizedSvg.includes('<svg') && !normalizedSvg.includes('style=')) {
      normalizedSvg = normalizedSvg.replace('<svg', '<svg style="max-width: 100%; max-height: 100%; width: auto; height: auto;"');
    }
    
    return this.sanitizer.bypassSecurityTrustHtml(normalizedSvg);
  }

  private isSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  private getSafariCompatibleSvg(svg: string): SafeHtml {
    const encodedSvg = encodeURIComponent(svg);
    const dataUrl = `data:image/svg+xml,${encodedSvg}`;
    const imgElement = `<img src="${dataUrl}" style="width: 100%; height: 100%; object-fit: contain;" alt="Hobby icon">`;
    
    return this.sanitizer.bypassSecurityTrustHtml(imgElement);
  }

  private loadHobbies(): void {
    this.hobbyDataService.getHobbies().subscribe({
      next: (hobbies) => {
        this.hobbies = hobbies;
      },
      error: (error) => {
        console.error('Error loading hobbies:', error);
      }
    });
  }
}
