import { inject, Injectable, signal } from "@angular/core";
import { Movie, MovieResponse } from "./models/movie.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn:   "root",
})
export class MoviesService {
    movies = signal<Movie[]>([]);
    tradingMovies = signal<Movie[]>([]);

    selectedMovie = signal<Movie | null>(null);

    private readonly _apiKey = 'da6f4e9349cd06aacf65b4d02c3a0886';
    private readonly _apiUrl = 'https://api.themoviedb.org/3'; 
    //private readonly _searchTerm = signal<string>("");

    private readonly _http = inject(HttpClient);

    constructor() {
        this._getMovies();
    }


    getMovieById(movieId: string): Observable<MovieResponse> {
        return this._http.get<MovieResponse>(`${this._apiUrl}/movie/${movieId}?api_key=${this._apiKey}`);

    }

    private _getMovies(): void{
        this._http.get<MovieResponse>(`${this._apiUrl}/movie/popular?api_key=${this._apiKey}`)
            .pipe(
                tap((response) => {
                    this.movies.set(response.results);
                })
            )
            .subscribe();

        
    }
};