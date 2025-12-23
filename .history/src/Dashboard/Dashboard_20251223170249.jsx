import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiBarChart2,
  FiList
} from "react-icons/fi";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid
} from "recharts";

import "./dashboard.css";

export default function Dashboards() {
  const [open, setOpen] = useState(true);

  const players = [
    { name: "Rohit Sharma", runs: 80, balls: 70, sr: 114.29 },
    { name: "Virat Kohli", runs: 55, balls: 60, sr: 91.67 },
    { name: "KL Rahul", runs: 32, balls: 28, sr: 114.29 },
    { name: "Hardik Pandya", runs: 25, balls: 18, sr: 138.89 }
  ];

  const runsByOver = Array.from({ length: 45 }, (_, i) => ({
    over: i + 1,
    runs: Math.floor(Math.random() * 10)
  }));

  const runDistribution = [
    { name: "0-10", value: 40 },
    { name: "11-20", value: 25 },
    { name: "21-30", value: 20 },
    { name: "31+", value: 15 }
  ];

  const COLORS = ["#6366f1", "#06b6d4", "#10b981", "#ef4444"];

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="logo">{open ? "🏏 CA" : "🏏"}</span>
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            <FiMenu />
          </button>
        </div>

        <ul className="menu">
          <li><FiHome /><span>Overview</span></li>
          <li><FiList /><span>Scorecard</span></li>
          <li><FiUsers /><span>Players</span></li>
          <li><FiBarChart2 /><span>Partnerships</span></li>
          <li><FiBarChart2 /><span>Graphs</span></li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`main ${open ? "shift" : ""}`}>
        <h1>Cricket Dashboard</h1>
        <p>India vs Australia</p>

        {/* CHARTS */}
        <div className="charts">
          <div className="card">
            <h3>Runs by Over</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={runsByOver}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="over" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="runs" stroke="#6366f1" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Run Distribution</h3>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={runDistribution} dataKey="value" outerRadius={80}>
                  {runDistribution.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SCORECARD */}
        <div className="card table-card">
          <h3>Scorecard</h3>
          <table>
            <thead>
              <tr>
                <th>Batsman</th>
                <th>R</th>
                <th>B</th>
                <th>SR</th>
              </tr>
            </thead>
            <tbody>
              {players.map(p => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.runs}</td>
                  <td>{p.balls}</td>
                  <td>{p.sr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
