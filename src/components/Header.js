import '../styles/global.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="headerContainer">
      <button className="nav-top" onClick={() => setIsMenuOpen(true)}>
        <div className="nav1"></div>
        <div className="nav2"></div>
        <div className="nav3"></div>
      </button>
      {isMenuOpen && (
        <div className="side-bar">
          <h2>Making Peace with my Closet</h2>
          <a href="/">Quem somos</a>
          <a href="/">Contato</a>
          <a href="/update">Mantenha-se atualizado</a>
          <a href="/news">Receba todas as novidades</a>
          <button onClick={() => setIsMenuOpen(false)}>I'm a button</button>
        </div>
      )}
      <div className="title-home">
        <h1>MPC</h1>
        <div>Making Peace with my Closet por THAGAMA</div>
      </div>

      <div className="links-header">
        <Link to="/update" className="help">
          Ajude-nos a manter atualizado
        </Link>

        <Link to="/news" className="news">
          Quero receber todas as novidades!
        </Link>
      </div>
    </header>
  );
}
