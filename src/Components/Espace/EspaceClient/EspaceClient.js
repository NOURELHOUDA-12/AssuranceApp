import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, addDoc, orderBy } from "firebase/firestore";
import { db, auth } from "../../../firebaseConfig";
import "./EspaceClient.css";

export default function ClientDashboard() {
  const [annonces, setAnnonces] = useState([]);
  const [reclamations, setReclamations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newReclamation, setNewReclamation] = useState({ message: "" });

  const clientId = auth.currentUser ? auth.currentUser.uid : null;

  // Charger annonces depuis Firestore
  const fetchAnnonces = async () => {
    const querySnapshot = await getDocs(collection(db, "annonces"));
    setAnnonces(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  // Charger réclamations du client depuis Firestore
  const fetchReclamations = async () => {
    if (!clientId) return;

    const q = query(
      collection(db, "reclamations"),
      where("clientId", "==", clientId),
      orderBy("date", "desc")
    );

    const querySnapshot = await getDocs(q);
    setReclamations(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchAnnonces();
    fetchReclamations();
  }, [clientId]);

  // Ajouter une réclamation
  const handleAddReclamation = async () => {
    if (!newReclamation.message) return alert("Entrez votre réclamation !");
    await addDoc(collection(db, "reclamations"), {
      ...newReclamation,
      clientId,
      date: new Date(),
      statut: "En attente"
    });
    setNewReclamation({ message: "" });
    setShowModal(false);
    fetchReclamations();
  };

  return (
    <div className="client-dashboard">
      {/* Sidebar */}
      <aside className="client-sidebar">
        <h2>Client</h2>
        <ul>
          <li onClick={() => setShowModal(false)}>Annonces</li>
          <li onClick={() => setShowModal(false)}>Mes Réclamations</li>
          <li onClick={() => setShowModal(true)}>Envoyer Réclamation</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="client-main">
        {/* Annonces */}
        <section className="annonces-section">
          <h2>Annonces</h2>
          <div className="annonces-list">
            {annonces.map(a => (
              <div key={a.id} className="annonce-card">
                <h3>{a.titre}</h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Réclamations */}
        <section className="reclamations-section">
          <h2>Mes Réclamations</h2>
          {reclamations.length === 0 ? (
            <p>Aucune réclamation pour le moment.</p>
          ) : (
            <div className="reclamations-list">
              {reclamations.map(r => (
                <div key={r.id} className="reclamation-card">
                  <p>{r.message}</p>
                  <span className={`badge ${r.statut === "En attente" ? "encours" : "traité"}`}>
                    {r.statut}
                  </span>
                  <small>{new Date(r.date.seconds * 1000).toLocaleString()}</small>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Modal Réclamation */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Nouvelle Réclamation</h2>
              <textarea
                placeholder="Décrivez votre réclamation..."
                value={newReclamation.message}
                onChange={(e) => setNewReclamation({ message: e.target.value })}
              />
              <div className="modal-actions">
                <button onClick={handleAddReclamation}>Envoyer</button>
                <button onClick={() => setShowModal(false)}>Annuler</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
