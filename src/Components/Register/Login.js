import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import "./Auth.css"; // même fichier CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Connexion réussie !");
      // Ici, tu peux rediriger l'utilisateur vers une autre page après connexion
      // ex: navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Connexion</h2>

        {error && <p className="error">{error}</p>}

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

        <button type="submit" onClick={handleLogin}>Se connecter</button>

        <p className="redirect-text">
          Pas encore de compte ?{" "}
          <Link to="/register" className="redirect-link">
            Créez-en un ici
          </Link>
        </p>
      </div>
    </div>
  );
}
