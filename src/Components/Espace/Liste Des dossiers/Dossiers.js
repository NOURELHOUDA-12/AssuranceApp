import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./EspaceAgent.css";

export default function DossiersList() {
  const [dossiers, setDossiers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "dossiers"));
      setDossiers(snapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>📁 Mes dossiers</h2>
      <table className="dossiers-table">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Titre</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {dossiers.map((d, index) => (
            <tr key={index}>
              <td>{d.numeroDossier}</td>
              <td>{d.titre}</td>
              <td>{d.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
