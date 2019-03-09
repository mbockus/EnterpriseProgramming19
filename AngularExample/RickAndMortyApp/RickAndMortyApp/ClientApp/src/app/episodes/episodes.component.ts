import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode.service';
import { EpisodeSearchResults } from '../episode-search-results';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  private episodeResults: EpisodeSearchResults;
  private currentPage: number = 1;

  constructor(private service: EpisodeService) { }

  ngOnInit() {
    this.service.getEpisodes(this.currentPage).subscribe((data: EpisodeSearchResults) => this.episodeResults = data)
  }

  refreshResults() {
    this.service.getEpisodes(this.currentPage).subscribe((data: EpisodeSearchResults) => this.episodeResults = data)
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.refreshResults();
  }

  previousPage() {
    this.currentPage--;
    this.refreshResults();
  }
}
