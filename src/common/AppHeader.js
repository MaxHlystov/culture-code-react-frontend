import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import UserNavigation from './UserNavigation';
import logo from '../img/logo.png';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <img src={logo} className="app-logo" alt="Logo" />
                        <Link to="/" className="app-title">Culture code</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            <ul>
                                <li>
                                    <NavLink to="/movies">Movies</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/books">Books</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/music">Music</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/games">Games</NavLink>
                                </li>
                                {this.props.authenticated ? (
                                    <UserNavigation user={this.props.user} onLogout={this.props.onLogout} />
                                ) : (
                                        <React.Fragment>
                                            <li>
                                                <NavLink to="/login">Login</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/signup">Signup</NavLink>
                                            </li>
                                        </React.Fragment>
                                    )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;