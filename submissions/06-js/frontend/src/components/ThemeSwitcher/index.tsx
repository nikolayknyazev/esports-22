import './index.css';

import { useTheme } from '../../contexts/ThemeContext';
import themeSwitcherDark from '../../pages/main/images/theme-switcher-dark.svg';
import themeSwitcherLight from '../../pages/main/images/theme-switcher-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({
  className = '',
}: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={`theme-switcher ${className}`}
      type="button"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      <img
        className="theme-switcher-icon theme-switcher-icon-light"
        src={themeSwitcherLight}
        alt=""
        aria-hidden="true"
      />

      <img
        className="theme-switcher-icon theme-switcher-icon-dark"
        src={themeSwitcherDark}
        alt=""
        aria-hidden="true"
      />
    </button>
  );
};
