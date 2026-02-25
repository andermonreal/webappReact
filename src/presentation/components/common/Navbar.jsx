// src/presentation/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../auth/AuthModal';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <i className="bi bi-film text-primary fs-4"></i>
            <span className="fw-bold text-primary fs-5">CineApp</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-primary' : 'text-secondary'}`
                  }
                  to="/"
                  end
                >
                  <i className="bi bi-house-door me-1"></i>Catálogo
                </NavLink>
              </li>
              {currentUser && (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link fw-semibold ${isActive ? 'text-primary' : 'text-secondary'}`
                    }
                    to="/favorites"
                  >
                    <i className="bi bi-heart me-1"></i>Favoritos
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-primary' : 'text-secondary'}`
                  }
                  to="/contact"
                >
                  <i className="bi bi-envelope me-1"></i>Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-semibold ${isActive ? 'text-primary' : 'text-secondary'}`
                  }
                  to="/legal"
                >
                  <i className="bi bi-file-text me-1"></i>Aviso Legal
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              {currentUser ? (
                <>
                  <span className="text-muted small">
                    <i className="bi bi-person-circle me-1"></i>
                    {currentUser.email}
                  </span>
                  <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Salir
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setShowAuth(true)}
                >
                  <i className="bi bi-person me-1"></i>Acceder
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModal show={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};

export default Navbar;
