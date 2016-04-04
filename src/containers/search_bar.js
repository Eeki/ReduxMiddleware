import React, { Component} from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this); //<- laitetaan kontrustorista eli SearchBar class:in konteksti onInputChange:n kontekstiksi.
    this.onFormSubmit = this.onFormSubmit.bind(this); // -- || --
  }

  onInputChange(event) {
    this.setState({term : event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();

    //We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); // null because this container wont care about the state


//ES6 huomio! Fat-Arrow funktio ottaa kontekstin (this) messiin verrattuna ES5 kontekstiin jossa jokaisella funktiolla on oma konteksti

//Eli jos on callback jonka pitää viitata this:iin niin pitää sitoa this

//Middleware is a function that take an action and depending on the actions type and the actions payload or any other number of factors, the middleware can choose to let the action to pass through, or to manipulate the action, it can console log it, or it can stop it before the action reach any reducer.
//Middleware --> Gate keeper
