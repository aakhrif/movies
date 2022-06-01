import { Component, OnInit } from '@angular/core';
import { SearchQueryService } from './search-query.service';

interface SearchRequest {
  searchstr: string
}

interface SearchResponse {
  Response: boolean,
  Search: Array<SearchResults>
}

interface SearchResults {
  Poster: string,
  Title: string,
  Type: string,
  Year: string,
  imdbID: string
};

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})

export class SearchMoviesComponent implements OnInit {

  public search: SearchRequest = { searchstr : ""};
  public movies: Array<SearchResults> = [];

  constructor(private searchQueryService: SearchQueryService) {
  }

  ngOnInit(): void {
    this.movies = [
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
    ]
  }

  onSubmit() {
    console.log("submit works");
    this.searchQueryService.search(this.search.searchstr).subscribe(
      (responseObject: SearchResponse) => {
        console.log(responseObject.Response);
        this.movies = responseObject.Search; 
      }
    );
  }

}
