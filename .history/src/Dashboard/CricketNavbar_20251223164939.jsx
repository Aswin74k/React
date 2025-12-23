/* Layout */
.cricket-dashboard {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* Sidebar (fixed) */
.cricket-sidebar {
  width: 220px;
  background: #1e1e2f;
  color: white;
  padding: 20px;
  position: fixed;
  height: 100%;
}

.cricket-sidebar h2 {
  margin-bottom: 20px;
}

.cricket-sidebar ul {
  list-style: none;
  padding: 0;
}

.cricket-sidebar ul li {
  margin: 15px 0;
  cursor: pointer;
}

/* Main content */
.dashboard-main {
  margin-left: 220px; /* leave space for fixed sidebar */
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
  height: 100vh;
  background: #f4f6f8;
}

/* Navbar */
.cricket-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0077ff;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.cricket-navbar input {
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
}

/* Score Cards */
.score-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.score-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.score-card h3 {
  color: #0077ff;
}

.score-card .score {
  font-size: 22px;
  font-weight: bold;
}

/* Player Cards */
.players {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.player-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.player-card h3 {
  color: #ff5722;
}

/* Match Summary */
.match-summary {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.match-summary h3 {
  color: #4caf50;
}
