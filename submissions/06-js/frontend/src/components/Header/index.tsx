import { Link, NavLink } from "react-router-dom";

import { ThemeSwitcher } from "../ThemeSwitcher";

import "./index.css";

const navigation = [
  { label: "Главная", to: "/" },
  { label: "Игроки", to: "/players" },
  { label: "Команды", to: "/teams" },
  { label: "Турниры", to: "/tournaments" },
  { label: "Рейтинги", to: "/ratings" },
  { label: "Аналитика", to: "/analytics" },
];

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            src="/logo.svg"
            alt="CSP"
          />
        </Link>
        <nav className="header-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeSwitcher />
          <button className="header-login-btn">
            ВОЙТИ
          </button>
        </div>

      </div>
    </header>
  );
};