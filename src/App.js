import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/https://thiagoleite92.github.io/crud-movies/" component={ MovieList } />
          <Route exact path="/https://thiagoleite92.github.io/crud-movies/movies/new" component={ NewMovie } />
          <Route exact path="/https://thiagoleite92.github.io/crud-movies/movies/:id" component={ MovieDetails } />
          <Route exact path="/https://thiagoleite92.github.io/crud-movies/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
