// import React, { useState, useEffect } from "react";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../../../firebaseConfig";
// import "./Dossier.css";

// export default function Dossiers() {
//   const [dossiers, setDossiers] = useState([]);
//   const [newDossier, setNewDossier] = useState({
//     numero: "",
//     nomClient: "",
//     identifiant: "",
//     matricule: "",
//     statut: "en cours",
//   });
//   const [editDossier, setEditDossier] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const fetchDossiers = async () => {
//     const querySnapshot = await getDocs(collection(db, "dossiers"));
//     setDossiers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//   };

//   useEffect(() => {
//     fetchDossiers();
//   }, []);

//   const handleAdd = async () => {
//     const { numero, nomClient, identifiant, matricule } = newDossier;
//     if (!numero || !nomClient || !identifiant || !matricule) return alert("Veuillez remplir tous les champs !");
//     await addDoc(collection(db, "dossiers"), newDossier);
//     setNewDossier({ numero: "", nomClient: "", identifiant: "", matricule: "", statut: "en cours" });
//     setModalOpen(false);
//     fetchDossiers();
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Supprimer ce dossier ?")) {
//       await deleteDoc(doc(db, "dossiers", id));
//       fetchDossiers();
//     }
//   };

//   const handleEdit = (dossier) => {
//     setEditDossier(dossier);
//     setModalOpen(true);
//   };

//   const handleUpdate = async () => {
//     const dossierRef = doc(db, "dossiers", editDossier.id);
//     await updateDoc(dossierRef, editDossier);
//     setEditDossier(null);
//     setModalOpen(false);
//     fetchDossiers();
//   };

//   return (
//     <div className="dossiers-container">
//       <h1>Gestion des Dossiers</h1>

//       <button className="add-btn" onClick={() => setModalOpen(true)}>+ Ajouter un dossier</button>

//       <div className="cards-container">
//         {dossiers.map((dossier) => (
//           <div key={dossier.id} className="dossier-card">
//             <h3>Dossier #{dossier.numero}</h3>
//             <p><strong>Client :</strong> {dossier.nomClient}</p>
//             <p><strong>Identifiant :</strong> {dossier.identifiant}</p>
//             <p><strong>Matricule :</strong> {dossier.matricule}</p>
//             <span className={`badge ${dossier.statut === "traité" ? "traité" : "encours"}`}>
//               {dossier.statut}
//             </span>
//             <div className="card-actions">
//               <button onClick={() => handleEdit(dossier)}>Modifier</button>
//               <button onClick={() => handleDelete(dossier.id)}>Supprimer</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{editDossier ? "Modifier Dossier" : "Ajouter Dossier"}</h2>
//             <input
//               type="text"
//               placeholder="Numéro de dossier"
//               value={editDossier ? editDossier.numero : newDossier.numero}
//               onChange={(e) =>
//                 editDossier
//                   ? setEditDossier({ ...editDossier, numero: e.target.value })
//                   : setNewDossier({ ...newDossier, numero: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Nom du client"
//               value={editDossier ? editDossier.nomClient : newDossier.nomClient}
//               onChange={(e) =>
//                 editDossier
//                   ? setEditDossier({ ...editDossier, nomClient: e.target.value })
//                   : setNewDossier({ ...newDossier, nomClient: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Identifiant"
//               value={editDossier ? editDossier.identifiant : newDossier.identifiant}
//               onChange={(e) =>
//                 editDossier
//                   ? setEditDossier({ ...editDossier, identifiant: e.target.value })
//                   : setNewDossier({ ...newDossier, identifiant: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Matricule voiture"
//               value={editDossier ? editDossier.matricule : newDossier.matricule}
//               onChange={(e) =>
//                 editDossier
//                   ? setEditDossier({ ...editDossier, matricule: e.target.value })
//                   : setNewDossier({ ...newDossier, matricule: e.target.value })
//               }
//             />
//             <select
//               value={editDossier ? editDossier.statut : newDossier.statut}
//               onChange={(e) =>
//                 editDossier
//                   ? setEditDossier({ ...editDossier, statut: e.target.value })
//                   : setNewDossier({ ...newDossier, statut: e.target.value })
//               }
//             >
//               <option value="en cours">En cours</option>
//               <option value="traité">Traité</option>
//             </select>

//             <div className="modal-actions">
//               <button onClick={editDossier ? handleUpdate : handleAdd}>
//                 {editDossier ? "Enregistrer" : "Ajouter"}
//               </button>
//               <button onClick={() => { setModalOpen(false); setEditDossier(null); }}>Annuler</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./Dossier.css";

export default function Dossiers() {
  const [dossiers, setDossiers] = useState([]);
  const [newDossier, setNewDossier] = useState({
    numero: "",
    nomClient: "",
    identifiant: "",
    matricule: "",
    statut: "en cours",
  });
  const [editDossier, setEditDossier] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Nouveaux états pour la réclamation
  const [reclamationModalOpen, setReclamationModalOpen] = useState(false);
  const [currentDossier, setCurrentDossier] = useState(null);
  const [messageReclamation, setMessageReclamation] = useState("");

  const fetchDossiers = async () => {
    const querySnapshot = await getDocs(collection(db, "dossiers"));
    setDossiers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchDossiers();
  }, []);

  const handleAdd = async () => {
    const { numero, nomClient, identifiant, matricule } = newDossier;
    if (!numero || !nomClient || !identifiant || !matricule)
      return alert("Veuillez remplir tous les champs !");
    await addDoc(collection(db, "dossiers"), newDossier);
    setNewDossier({ numero: "", nomClient: "", identifiant: "", matricule: "", statut: "en cours" });
    setModalOpen(false);
    fetchDossiers();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce dossier ?")) {
      await deleteDoc(doc(db, "dossiers", id));
      fetchDossiers();
    }
  };

  const handleEdit = (dossier) => {
    setEditDossier(dossier);
    setModalOpen(true);
  };

  const handleUpdate = async () => {
    const dossierRef = doc(db, "dossiers", editDossier.id);
    await updateDoc(dossierRef, editDossier);
    setEditDossier(null);
    setModalOpen(false);
    fetchDossiers();
  };

  // --- Gestion réclamation ---
  const openReclamationModal = (dossier) => {
    setCurrentDossier(dossier);
    if (dossier.statut === "traité") {
      setMessageReclamation("Le dossier est traité. Veuillez patienter pour la réponse de l'assurance.");
    } else if (dossier.statut === "en cours") {
      setMessageReclamation("Le dossier est en cours de vérification.");
    } else {
      setMessageReclamation("");
    }
    setReclamationModalOpen(true);
  };

  const handleSendReclamation = async () => {
    if (!currentDossier) return;

    await addDoc(collection(db, "reclamations"), {
      dossierId: currentDossier.id,
      identifiantClient: currentDossier.identifiant,
      message: messageReclamation,
      date: new Date(),
      status: "envoyé",
    });

    alert("Réclamation envoyée au client !");
    setReclamationModalOpen(false);
    setCurrentDossier(null);
    setMessageReclamation("");
  };

  return (
    <div className="dossiers-container">
      <h1>Gestion des Dossiers</h1>

      <button className="add-btn" onClick={() => setModalOpen(true)}>+ Ajouter un dossier</button>

      <div className="cards-container">
        {dossiers.map((dossier) => (
          <div key={dossier.id} className="dossier-card">
            <h3>Dossier #{dossier.numero}</h3>
            <p><strong>Client :</strong> {dossier.nomClient}</p>
            <p><strong>Identifiant :</strong> {dossier.identifiant}</p>
            <p><strong>Matricule :</strong> {dossier.matricule}</p>
            <span className={`badge ${dossier.statut === "traité" ? "traité" : "encours"}`}>
              {dossier.statut}
            </span>
            <div className="card-actions">
              <button onClick={() => handleEdit(dossier)}>Modifier</button>
              <button onClick={() => handleDelete(dossier.id)}>Supprimer</button>
              <button onClick={() => openReclamationModal(dossier)}>Envoyer réclamation</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Ajouter / Modifier */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editDossier ? "Modifier Dossier" : "Ajouter Dossier"}</h2>
            <input
              type="text"
              placeholder="Numéro de dossier"
              value={editDossier ? editDossier.numero : newDossier.numero}
              onChange={(e) =>
                editDossier
                  ? setEditDossier({ ...editDossier, numero: e.target.value })
                  : setNewDossier({ ...newDossier, numero: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nom du client"
              value={editDossier ? editDossier.nomClient : newDossier.nomClient}
              onChange={(e) =>
                editDossier
                  ? setEditDossier({ ...editDossier, nomClient: e.target.value })
                  : setNewDossier({ ...newDossier, nomClient: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Identifiant"
              value={editDossier ? editDossier.identifiant : newDossier.identifiant}
              onChange={(e) =>
                editDossier
                  ? setEditDossier({ ...editDossier, identifiant: e.target.value })
                  : setNewDossier({ ...newDossier, identifiant: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Matricule voiture"
              value={editDossier ? editDossier.matricule : newDossier.matricule}
              onChange={(e) =>
                editDossier
                  ? setEditDossier({ ...editDossier, matricule: e.target.value })
                  : setNewDossier({ ...newDossier, matricule: e.target.value })
              }
            />
            <select
              value={editDossier ? editDossier.statut : newDossier.statut}
              onChange={(e) =>
                editDossier
                  ? setEditDossier({ ...editDossier, statut: e.target.value })
                  : setNewDossier({ ...newDossier, statut: e.target.value })
              }
            >
              <option value="en cours">En cours</option>
              <option value="traité">Traité</option>
            </select>

            <div className="modal-actions">
              <button onClick={editDossier ? handleUpdate : handleAdd}>
                {editDossier ? "Enregistrer" : "Ajouter"}
              </button>
              <button onClick={() => { setModalOpen(false); setEditDossier(null); }}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Réclamation */}
      {reclamationModalOpen && currentDossier && (
        <div className="modal">
          <div className="modal-content">
            <h2>Réclamation pour le dossier #{currentDossier.numero}</h2>
            <p><strong>Identifiant client :</strong> {currentDossier.identifiant}</p>
            <textarea
              value={messageReclamation}
              readOnly
              rows="4"
              style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "8px" }}
            />
            <div className="modal-actions">
              <button onClick={handleSendReclamation}>Envoyer</button>
              <button onClick={() => { setReclamationModalOpen(false); setCurrentDossier(null); }}>Annuler</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
