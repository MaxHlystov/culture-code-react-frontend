import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class UserNavigation extends Component {
    isUserAdmin(user) {
        if (user === undefined) { return false; }
        if (user.roles === undefined) { return false; }
        return user.roles.indexOf("ROLE_ADMIN") > -1;
    }

    render() {
        console.log(this.props.user.roles);
        return (
            <React.Fragment>
                {this.isUserAdmin(this.props.user) ? (
                    <React.Fragment>
                        <li>
                            <NavLink to="/compute">Compute recommendations</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users">Edit users</NavLink>
                        </li>
                    </React.Fragment>
                ) : null}
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <a onClick={this.props.onLogout}>Logout</a>
                </li>

            </React.Fragment>
        );
    }
}

export default UserNavigation;