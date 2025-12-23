import React from "react";

export default function CricketNavbar() {
  return (
    <nav className="cricket-navbar">
      <h1>Live Cricket Dashboard</h1>
      <div className="nav-right">
        <input type="text" placeholder="Search Player..." />
      </div>
    </nav>
  );
}
