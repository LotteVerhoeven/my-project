import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperience as WorkExperienceModel } from '../../../models/work-experience.interface';
import { WorkExperienceDataService } from '../../../services/work-experience-data.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperience implements OnInit {
  workExperiences: WorkExperienceModel[] = [];

  constructor(private workExperienceDataService: WorkExperienceDataService) {}

  ngOnInit(): void {
    this.loadWorkExperience();
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
}
