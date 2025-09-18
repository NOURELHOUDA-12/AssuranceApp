import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identifiant, setIdentifiant] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!nom || !prenom || !email || !password || !identifiant) {
      setError("Veuillez remplir tous les champs !");
      return;
    }

    try {
      // Création de l'utilisateur
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ajout des infos supplémentaires dans Firestore
      await setDoc(doc(db, "users", user.uid), {
        nom,
        prenom,
        email,
        identifiant,
        createdAt: new Date(),
      });

      alert("Compte créé avec succès !");
      navigate("/login"); // Redirection vers la page de connexion
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Créer un compte</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />

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

        <input
          type="text"
          placeholder="Identifiant"
          value={identifiant}
          onChange={(e) => setIdentifiant(e.target.value)}
          required
        />

        <button type="submit" onClick={handleRegister}>S'inscrire</button>

        <p className="redirect-text">
          Déjà un compte ?{" "}
          <Link to="/login" className="redirect-link">
            Connectez-vous ici
          </Link>
        </p>
      </div>
    </div>
  );
}
