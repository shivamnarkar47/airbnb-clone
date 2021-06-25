import React from 'react';
import './style.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* Header */}
        {/* Banner */}
        {/* Cards */}
        {/* Footer */}
        {/* Search Page */}
        <Footer />

        {/* .... */}
      </Router>
    </div>
  );
}
