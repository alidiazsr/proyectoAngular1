import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { NgFor, NgIf } from '@angular/common';
import { Episode } from '../models/episodes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit{
  episodes: Episode[] = [] 
  seriesTitle: string = 'Modern Family'
  season: number = 1
  totalSeasons!: number;
  errorMessage: string = ''

  constructor(private seriesService: SeriesService){}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.seriesService.getEpisodes(this.seriesTitle, this.season).subscribe({
      next: (response) => {
        if (response.Response === 'True') {
          this.totalSeasons = Number(response.totalSeasons); 
          this.episodes = response.Episodes; 
          this.errorMessage = '';
        } else {
          this.showError(`La serie "${this.seriesTitle}" no se encuentra.`);
        }
      },
      error: (error) => {
        this.showError('Error de conexión con el servicio. Vuelva a intentar.');
      },
      complete: () => {
        console.log('Información de los episodios disponible.');
      }
    });    
  }

  onSeasonChange(): void{
    this.loadEpisodes();
  }

  onSeriesTitleChange(): void {
    this.season = 1; 
    this.loadEpisodes();
  }

  private showError(message: string): void {
    this.errorMessage = message;
    this.episodes = []; 
    this.totalSeasons = 1; 
  }
}
