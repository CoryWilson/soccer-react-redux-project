// Import npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

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
                <NowPlaying />
                <ViewerHistory />
                <ViewerStandings />
                <LeagueHistory />
                <LeagueStandings />
                <ClubHistory />
                <ClubStandings />
            </div>
        );
    }
};

// Render to the DOM
ReactDOM.render(<App />, root);