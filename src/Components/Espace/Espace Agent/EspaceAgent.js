import React from "react";
import { Outlet, Link } from "react-router-dom"; // <-- Import correct
import "./EspaceAgent.css";

export default function EspaceAgent() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Agent</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="dossiers">Dossiers</Link>
          </li>
          <li>
            <Link to="#">Activités</Link>
          </li>
          <li>
            <Link to="#">Paramètres</Link>
          </li>
        </ul>
      </aside>

      {/* Contenu central */}
      <main className="content">
        <Outlet /> {/* <-- ici s'affichent les enfants */}
      </main>
    </div>
  );
}
