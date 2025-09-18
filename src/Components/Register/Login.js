import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig"; // Assure-toi d'exporter db (Firestore) dans firebaseConfig.js
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Authentification Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Récupération des infos de l'utilisateur dans Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        console.log(userData.Role )
        if (userData.Role === "agent") {
          navigate("/espace-agent/dashboard");
        } else {
          navigate("/espace_client"); 
        }
      } else {
        setError("Aucun rôle défini pour cet utilisateur.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Connexion</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Se connecter</button>
        </form>

        <p className="redirect-text">
          Pas encore de compte ?
          <Link to="/register" className="redirect-link">
            Créez-en un ici
          </Link>
        </p>
      </div>
    </div>
  );
}
