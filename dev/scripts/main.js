// Import npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Router, Route, browserHistory, Link, IndexRoute, IndexLink } from 'react-router';
import TestComponent from './components/test-component.js';
import NowPlaying from './components/now_playing.js';
import ViewerHistory from './components/viewer_history.js';
import ViewerStandings from './components/viewer_standings.js';
import LeagueHistory from './components/league_history.js';
import LeagueStandings from './components/league_standings.js';
import ClubHistory from './components/club_history.js';
import ClubStandings from './components/club_standings.js';
import Clubs from './components/clubs.js';
import Club from './components/club.js';
import Home from './components/home.js';

// Element to anchor to 
const root = document.getElementById('root');

class App extends React.Component {
    render() {
        return(
            <div>
                <header className="site-header">
                    <h1><IndexLink to="/">Hardcore Football</IndexLink></h1>
                    <ul role="nav">
                        <li><Link to="/leagues" activeClassName="active">Leagues</Link></li>
                        <li><Link to="/clubs" activeClassName="active">Clubs</Link></li>
                        <li><Link to="/viewers" activeClassName="active">Viewers</Link></li>
                    </ul>
                </header>

                {this.props.children}
            </div>
        );
    }
};

// Base component

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/leagues" component={LeagueHistory}/>
      <Route path="/clubs" component={Clubs}/>
      <Route path="/clubs/:clubName" component={Club}/>
      <Route path="/viewers" component={ViewerHistory}/>
    </Route>
  </Router>
), document.getElementById('root'))