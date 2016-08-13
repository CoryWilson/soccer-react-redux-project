// Import npm dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import { Router, Route, browserHistory, Link, IndexRoute, IndexLink } from 'react-router';
import NowPlaying from './components/now_playing.js';
import Viewers from './components/viewers.js';
import Viewer from './components/viewer.js';
import Leagues from './components/leagues.js';
import League from './components/league.js';
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

      <Route path="/leagues" component={Leagues}/>
      <Route path="/leagues/:league" component={League}/>

      <Route path="/clubs" component={Clubs}/>
      <Route path="/clubs/:club" component={Club}/>

      <Route path="/viewers" component={Viewers}/>
      <Route path="/viewers/:viewer" component={Viewer}/>
    </Route>
  </Router>
), document.getElementById('root'))