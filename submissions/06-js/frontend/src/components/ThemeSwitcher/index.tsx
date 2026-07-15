import { useTheme } from "../../contexts/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
  size?: number;
}

export const ThemeSwitcher = ({ className = '', size = 32 }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switcher ${className}`}
      aria-label="Переключить тему"
      style={{
        width: size,
        height: size,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Основная заливка луны */}
        <path
          d="M17.621 28.831C18.8356 27.5623 19.6895 25.9923 20.0947 24.2833C20.3381 23.2554 19.0109 22.688 18.0422 23.1074C16.832 23.6311 15.4923 23.7791 14.197 23.5321C12.9016 23.2851 11.7104 22.6545 10.7779 21.7221C9.84538 20.7898 9.21456 19.5987 8.96731 18.3034C8.72006 17.0081 8.86778 15.6684 9.39131 14.4581C9.8107 13.4911 9.24165 12.1639 8.21538 12.4056C6.50639 12.811 4.93656 13.6652 3.66798 14.88C2.3994 16.0948 1.47805 17.6261 0.999045 19.316C0.520043 21.0058 0.500753 22.7929 0.943166 24.4927C1.38558 26.1925 2.27366 27.7434 3.51572 28.9852C4.75778 30.2271 6.30881 31.115 8.00866 31.5572C9.7085 31.9994 11.4956 31.9798 13.1853 31.5006C14.8751 31.0213 16.4064 30.0998 17.621 28.831Z"
          fill="var(--color-bg-primary)"
          style={{
            transition: 'fill 0.5s ease',
          }}
        />
        
        {/* Контур и лучи солнца */}
        <path
          d="M15.4288 0.625V3.9143M22.0074 17.0715C22.0074 15.3267 21.3143 13.6535 20.0806 12.4197C18.8469 11.186 17.1736 10.4929 15.4288 10.4929M26.9414 5.55895L24.8757 7.62463M28.586 17.0715H31.8753M20.0947 24.2833C19.6895 25.9923 18.8356 27.5623 17.621 28.831C16.4064 30.0998 14.8751 31.0213 13.1853 31.5006C11.4956 31.9798 9.7085 31.9994 8.00866 31.5572C6.30881 31.115 4.75778 30.2271 3.51572 28.9852C2.27366 27.7434 1.38558 26.1925 0.943166 24.4927C0.500753 22.7929 0.520043 21.0058 0.999045 19.316C1.47805 17.6261 2.3994 16.0948 3.66798 14.88C4.93656 13.6652 6.50639 12.811 8.21538 12.4056C9.24165 12.1639 9.8107 13.4911 9.39131 14.4581C8.86778 15.6684 8.72006 17.0081 8.96731 18.3034C9.21456 19.5987 9.84538 20.7898 10.7779 21.7221C11.7104 22.6545 12.9016 23.2851 14.197 23.5321C15.4923 23.7791 16.832 23.6311 18.0422 23.1074C19.0109 22.688 20.3381 23.2554 20.0947 24.2833Z"
          stroke="var(--color-text-primary)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: 'stroke 0.5s ease',
          }}
        />
      </svg>
    </button>
  );
};