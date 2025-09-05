import React, { useState } from 'react';


import { FaCar, FaUser, FaEuroSign, FaBolt, FaHeadset, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './FirstPage.css';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <FaCar className="logo-icon" />
              <h1>AutoAssure</h1>
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Nos offres</a></li>
                <li><a href="#">Comment ça marche</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            
            <div className="auth-buttons">
              <Link to="/Login">
  <button className="login-btn">Connexion</button>
</Link>
              <button className="signup-btn">Inscription</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>L'assurance auto adaptée à vos besoins</h2>
            <p>Obtenez une estimation en 2 minutes et économisez jusqu'à 30% sur votre assurance automobile</p>
            <button className="cta-button">Devis gratuit</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Pourquoi choisir AutoAssure ?</h2>
            <p>Une expérience d'assurance simplifiée et transparente</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaEuroSign />
              </div>
              <h3>Économisez jusqu'à 30%</h3>
              <p>Comparez les meilleures offres du marché et trouvez l'assurance qui correspond à votre budget.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaBolt />
              </div>
              <h3>Devis instantané</h3>
              <p>Obtenez votre devis personnalisé en moins de 2 minutes sans paperasse.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h3>Support 24/7</h3>
              <p>Notre équipe est disponible à tout moment pour vous assister en cas de besoin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>Comment souscrire ?</h2>
            <p>Quelques étapes simples pour votre assurance</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Remplissez le formulaire</h3>
              <p>Donnez-nous quelques informations sur vous et votre véhicule</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Comparez les offres</h3>
              <p>Choisissez la formule qui correspond le mieux à vos besoins</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Souscrivez en ligne</h3>
              <p>Finalisez votre contrat en quelques clics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Ils nous ont fait confiance</h2>
            <p>Découvrez les témoignages de nos clients satisfaits</p>
          </div>
          
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "J'ai économisé 250€ par an sur mon assurance sans perte de qualité de service. Le processus était simple et rapide."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4>Marie Dupont</h4>
                  <p>Client depuis 2022</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Enfin une assurance auto transparente sans mauvaises surprises. Le service client est réactif et très professionnel."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4>Thomas Martin</h4>
                  <p>Client depuis 2021</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Souscription en 10 minutes chrono ! J'ai pu avoir mon attestation d'assurance immédiatement. Très impressionné."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <FaUser />
                </div>
                <div className="author-info">
                  <h4>Julie Leroy</h4>
                  <p>Nouvelle cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>AutoAssure</h3>
              <p>L'assurance automobile simplifiée et accessible pour tous. Comparez, choisissez et économisez.</p>
             <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Liens rapides</h3>
              <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Nos offres</a></li>
                <li><a href="#">Comment ça marche</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Assurance au tiers</a></li>
                <li><a href="#">Tous risques</a></li>
                <li><a href="#">Assistance routière</a></li>
                <li><a href="#">Assurance conducteur</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><i className="icon"></i> 123 Avenue de l'Assurance, Paris</li>
                <li><i className="icon"></i> +33 1 23 45 67 89</li>
                <li><i className="icon"></i> contact@autoassure.fr</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2023 AutoAssure. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;