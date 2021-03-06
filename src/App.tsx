import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './assets/images/logo.png';

import Home from './demo//Home'
import Components from './demo/Components'
import Philosophy from './demo/Philosophy'
import GettingStarted from './demo/GettingStarted'
import Styles from './demo/Styles';
import HeroDemo from './demo/HeroDemo';
import CardDemo from './demo/CardDemo';

import '../node_modules/symbiote-design-language-library/src/styles/main.scss';


export default function App() {
    return (
        <Router>
            <div className="App">
                <div className="container-fluid navigation">
                    <div className="nav__logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                        <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
                        <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>
                        <ul className="nav__links">
                            <li className="nav__link"><Link to='/'><h4>Home</h4></Link></li>
                            <li className="nav__link"><Link to='/philosophy'><h4>Philosophy</h4></Link></li>
                            <li className="nav__link"><Link to='/components'><h4>Components</h4></Link></li>
                            <li className="nav__link"><Link to='/styles'><h4>Styles</h4></Link></li>
                            <li className="nav__link"><Link to='/getting-started'><h4>Getting Started</h4></Link></li>
                        </ul>
                </div>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/philosophy">
                            <Philosophy />
                        </Route>
                            <Route path="/components" component={Components}>
                        </Route>
                        <Route path="/getting-started">
                            <GettingStarted />
                        </Route>
                        <Route path="/styles">
                            <Styles />
                        </Route>
                        <Route path="/hero-demo">
                            <HeroDemo />
                        </Route>
                        <Route path="/card-demo">
                            <CardDemo />
                        </Route>
                    </Switch>
                </main>

                <div className="container-fluid footer-container">
                    <footer>
                        <div className="container">
                            <div className="col-xs-6 col-md-3">
                                <p>More</p>
                                <ul>
                                    <li><Link to='/philosophy'>Philosophy</Link></li>
                                    <li><Link to='/components'>Components</Link></li>
                                    <li><Link to='/styles'>Styles</Link></li>
                                    <li><Link to='/getting-started'>Getting Started</Link></li>
                                </ul>
                            </div>
                            <div className="col-xs-6 col-md-3">
                                <p>Social</p>
                                <div className="social-link">
                                    <a href="a" target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                                </div>
                                <div className="social-link">
                                    <a href="a" target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                                </div>
                                <div className="social-link">
                                    <a href="a" target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div className="copyright">
                        <p>Copyright &#169; <a href="https://www.symbiote.com.au" target="_blank" rel="noopener noreferrer">Symbiote</a> Pty Ltd {new Date().getFullYear().toString()}</p>

                    </div>
                </div>
            </div>
        </Router>
    );
}