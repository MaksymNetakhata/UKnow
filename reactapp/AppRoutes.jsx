import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './src/App';
import Quiz from './src/Quiz';
import Profile from './src/Profile';
import NavMenu from './src/NavMenu';

function AppRoutes() {
    return (
        <Router>
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Quiz" component={Quiz} />
                    <Route path="/Profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRoutes;
