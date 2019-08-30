import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'


export default function Nav() {
    if (window.innerWidth <= 800){
    return (
        <nav className="folder-menu">
            <NavLink to={{pathname: '/profilepage'}} className="folder-menu-list-item profile"><div>Profile</div></NavLink>{' '}
            <div className="folder-menu-list">
                <NavLink to="/kitchen" className="folder-menu-list-item kitchen">Kitchen</NavLink>{' '}
                <NavLink to="/meals" className="folder-menu-list-item meals">Meals</NavLink>
            </div>
        </nav>
    )}
    else {
    return (
        <nav className="folder-menu">
            <NavLink to={{pathname: '/profilepage'}} className="folder-menu-list-item profile"><div>Profile</div></NavLink>{' '}
            <div className="folder-menu-list">
                <a className="folder-menu-list-item kitchen">Kitchen</a>{' '}
                <a className="folder-menu-list-item meals">Meals</a>
            </div>
        </nav>
    )}
}
