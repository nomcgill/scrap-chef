import React from 'react';
import {connect} from 'react-redux';
import {
  NavLink
} from 'react-router-dom'

// Nav organizes and returns a formatted Navigation bar. It will display differently for mobile than for desktop.
export class Nav extends React.Component {

    theUser(){
        return ( this.props.username ? this.props.username : "Log In" )
    }

    render(){
        if (window.innerWidth <= 800){
        return (
            <nav className="folder-menu">
                <NavLink to={{pathname: '/profilepage'}} className="folder-menu-list-item profile"><div>{this.theUser()}</div></NavLink>{' '}
                <div className="folder-menu-list">
                    <NavLink to="/kitchen" className="folder-menu-list-item kitchen">Kitchen</NavLink>{' '}
                    <NavLink to="/meals" className="folder-menu-list-item meals">Meals</NavLink>
                </div>
            </nav>
        )}
        else {
        return (
            <nav className="folder-menu">
                <NavLink to={{pathname: '/profilepage'}} className="folder-menu-list-item profile"><div>{this.theUser()}</div></NavLink>{' '}
                <div className="folder-menu-list">
                    <a className="folder-menu-list-item kitchen">Kitchen</a>{' '}
                    <a className="folder-menu-list-item meals">Meals</a>
                </div>
            </nav>
        )}
    }
}

const mapStateToProps = state => ({
    username: state.username
})

export default connect(mapStateToProps)(Nav);

