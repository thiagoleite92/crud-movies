import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
    this.editMovie = this.editMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.editMovie();
  }

  async handleSubmit(updatedMovie) {
    const { history } = this.props;
    await movieAPI.updateMovie(updatedMovie);
    history.push('/'); // redirect para página inicial
  }

  async editMovie() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      movie: response,
    });
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) {
      return <Loading />;
    }
    if (!loading) {
      return (
        <div data-testid="edit-movie">
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      );
    }
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default EditMovie;
