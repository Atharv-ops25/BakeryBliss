import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">BakeryBliss 🧁</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Products</a>
          <a className="nav-link" href="#">Cart (0)</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;