// Import npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import Header from './components/header.js';
import TestComponent from './components/test-component.js';
import ViewerStandings from './components/viewer_standings.js';
import NowPlaying from './components/now_playing.js';
import ViewerHistory from './components/viewer_history.js';
import LeagueHistory from './components/league_history.js';
import LeagueStandings from './components/league_standings.js';
import ClubHistory from './components/club_history.js';
import ClubStandings from './components/club_standings.js';

// Element to anchor to 
const root = document.getElementById('root');

// Base component
class App extends React.Component {
	render() {
		return(
			<div>
                <Header />
			</div>
		);
	}
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/a" component={NowPlaying}/>
  </Router>
), document.getElementById('root'))