import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import './MovieList.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const response = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: response,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    } if (!loading) {
      return (
        <div data-testid="movie-list" className="movie-list">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }
  }
}

export default MovieList;
