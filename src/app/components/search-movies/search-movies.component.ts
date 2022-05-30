import { Component, OnInit } from '@angular/core';
import { SearchQueryService } from './search-query.service';

interface Search {
  searchstr: string
}

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})

export class SearchMoviesComponent implements OnInit {

  public search: Search = { searchstr : ""};

  constructor(private searchQueryService: SearchQueryService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("submit works");
    this.searchQueryService.search(this.search.searchstr).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

}
