import React from 'react';

export default function Nav(props) {
  return (
    <nav className="folder-menu">
        <div className="folder-menu-list-item profile">
            <a href="/profile">PROFILE</a>
        </div>
        <ul className="folder-menu-list">
            <li className="folder-menu-list-item kitchen">
                <a href="/inbox">KITCHEN</a>
            </li>
            <li className="folder-menu-list-item meals">
                <a href="/spam">MEALS</a>
            </li>
        </ul>
    </nav>
  );
}