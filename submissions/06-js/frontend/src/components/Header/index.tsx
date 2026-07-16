import './index.css';

import logoDark from '../../pages/main/images/csp-dark.png';
import logoLight from '../../pages/main/images/csp-light.png';
import { ThemeSwitcher } from '../ThemeSwitcher';

const navigation = [
  'Главная',
  'Игроки',
  'Команды',
  'Турниры',
  'Рейтинги',
  'Аналитика',
];

export const Header = () => {
  const openMainPage = () => {
    window.location.assign(`${process.env.PUBLIC_URL}/`);
  };

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="header-logo"
          type="button"
          aria-label="Перейти на главную страницу"
          onClick={openMainPage}
        >
          <img
            className="header-logo-image header-logo-image-light"
            src={logoLight}
            alt="CSP"
          />

          <img
            className="header-logo-image header-logo-image-dark"
            src={logoDark}
            alt=""
            aria-hidden="true"
          />
        </button>

        <nav className="header-nav" aria-label="Основная навигация">
          {navigation.map((item, index) => (
            <button
              key={item}
              className={`header-nav-link ${index === 0 ? 'active' : ''}`}
              type="button"
              onClick={index === 0 ? openMainPage : undefined}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeSwitcher />

          <button className="header-login-btn" type="button">
            ВОЙТИ
          </button>
        </div>
      </div>
    </header>
  );
};
