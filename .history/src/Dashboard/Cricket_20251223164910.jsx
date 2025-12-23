import React from "react";
import CricketSidebar from "./CricketSidebar";
import CricketNavbar from "./CricketNavbar";
import "./CricketDashboard.css";

export default function Cricket() {
  return (
    <div className="cricket-dashboard">
      <CricketSidebar />

      <div className="dashboard-main">
        <CricketNavbar />

        <h2>🏏 Live Match Score</h2>

        <div className="score-cards">
          <div className="score-card">
            <h3>India</h3>
            <p className="score">245/6</p>
            <p>Overs: 42.4</p>
          </div>

          <div className="score-card">
            <h3>Australia</h3>
            <p className="score">259/9</p>
            <p>Overs: 50</p>
          </div>

          <div className="score-card">
            <h3>Required Run Rate</h3>
            <p className="score">6.4</p>
            <p>Current RR: 5.7</p>
          </div>
        </div>

        <h2>Top Players</h2>
        <div className="players">
          <div className="player-card">
            <h3>Virat Kohli</h3>
            <p>Runs: 82*</p>
            <p>Balls: 56</p>
          </div>

          <div className="player-card">
            <h3>Rohit Sharma</h3>
            <p>Runs: 45</p>
            <p>Balls: 32</p>
          </div>

          <div className="player-card">
            <h3>Jasprit Bumrah</h3>
            <p>Wickets: 3</p>
            <p>Overs: 10</p>
          </div>
        </div>

        <div className="match-summary">
          <h3>Match Summary</h3>
          <p>
            India needs <b>15 runs</b> from <b>14 balls</b> to win the match.
          </p>
        </div>
      </div>
    </div>
  );
}
