import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import ContextDemo from './c/context-demo';
import CreateContextDemo from './c/createContext-demo';
import Hoc from './c/hoc';
import RenderProps from './c/renderProps';
import Refs from './c/refs';
import Concurrent from './c/concurrent';
import Portals from './c/portals';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
    <h1>Welcome to my react demo!</h1>
      <nav>
        <NavLink to="/" exact className="active">Home</NavLink>
        <NavLink to="/ContextDemo" className="active">ContextDemo</NavLink>
        <NavLink to="/createContextDemo" className="active">createContextDemo</NavLink>
        <NavLink to="/hoc" className="active">hoc</NavLink>
        <NavLink to="/renderProps" className="active">renderProps</NavLink>
        <NavLink to="/refs" className="active">refs</NavLink>
        <NavLink to="/concurrent" className="active">concurrent</NavLink>
        <NavLink to="/portals" className="active">portals</NavLink>
      </nav>
    </header>
    <hr />
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/ContextDemo" component={ContextDemo} />
      <Route path="/createContextDemo" component={CreateContextDemo} />
      <Route path="/hoc" component={Hoc} />
      <Route path="/renderProps" component={RenderProps} />
      <Route path="/refs" component={Refs} />
      <Route path="/concurrent" component={Concurrent} />
      <Route path="/portals" component={Portals} />
    </main>
  </div>
)

const HomePage =() => <div>hello world</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
