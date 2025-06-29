import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperience as WorkExperienceModel } from '../../../models/work-experience.interface';
import { Certificate } from '../../../models/certificates.interface';
import { WorkExperienceDataService } from '../../../services/work-experience-data.service';
import { CertificatesDataService } from '../../../services/certificates-data.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperience implements OnInit {
  workExperiences: WorkExperienceModel[] = [];
  certificates: Certificate[] = [];

  constructor(
    private workExperienceDataService: WorkExperienceDataService,
    private certificatesDataService: CertificatesDataService
  ) {}

  ngOnInit(): void {
    this.loadWorkExperience();
    this.loadCertificates();
  }

  private loadWorkExperience(): void {
    this.workExperienceDataService.getWorkExperience().subscribe({
      next: (data) => {
        this.workExperiences = data;
      },
      error: (error) => {
        console.error('Error loading work experience:', error);
      }
    });
  }

  private loadCertificates(): void {
    console.log('Loading certificates...');
    this.certificatesDataService.getCertificates().subscribe({
      next: (data) => {
        console.log('Certificates loaded:', data);
        this.certificates = data;
        console.log('Certificates array length:', this.certificates.length);
      },
      error: (error) => {
        console.error('Error loading certificates:', error);
      }
    });
  }

  openCertificateLink(link: string): void {
    window.open(link, '_blank');
  }
}
