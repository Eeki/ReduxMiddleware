import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push(action.payload.data); HUGE TRAP! <-- Never set state by mutating the state BAD!!! Only create complete new state or update state calling setState()
      //return state.concat([action.payload.data]); // concat does not change the existing array it creates a new array that contains all the old stuff and new staff :D Now we are not mutating our old state. We are crating complete new version of our state.
      return [ action.payload.data, ...state]; //ES6 way!!! Almost the same as  concat way. Make a new array put action.payload.data in it and ... means take the another variable that might be an array os take all of the entries inside of it and put in outside array. Will look like [city, city, city]
  }

  return state;
}