import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./EspaceAgent.css";

export default function AgentDashboard() {
  const statsData = [
    { name: "Jan", dossiers: 12 },
    { name: "Fév", dossiers: 18 },
    { name: "Mar", dossiers: 25 },
    { name: "Avr", dossiers: 20 },
    { name: "Mai", dossiers: 30 },
    { name: "Juin", dossiers: 28 },
  ];

  const recentActivities = [
    "Clôture du dossier #12345",
    "Ajout du dossier #12346",
    "Mise à jour du dossier #12340",
    "Clôture du dossier #12339",
  ];
return(
<div>
   <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Tableau de bord</h1>
          <p>Bienvenue dans votre espace agent</p>
        </header>

        {/* Cartes Statistiques */}
        <section className="stats-grid">
          <div className="stat-card">
            <h3>12</h3>
            <p>Dossiers clôturés</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Dossiers en cours</p>
          </div>
          <div className="stat-card">
            <h3>4</h3>
            <p>Nouveaux ce mois</p>
          </div>
        </section>

        {/* Graphique Recharts */}
        <section className="chart-section">
          <h2>Évolution des dossiers</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="dossiers" fill="#7B2FF7" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Activités récentes */}
        <section className="recent-activity">
          <h2>Activités récentes</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </main>
       </div>
)}
