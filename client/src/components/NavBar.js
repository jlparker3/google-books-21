import React from "react";


function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Google Books</a>

      <ul>
        <li className="nav-item">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>

    </nav>
  )
};

export default NavBar;
