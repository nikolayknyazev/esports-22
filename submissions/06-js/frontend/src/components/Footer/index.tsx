import './index.css';

import { useEffect, useState } from 'react';

import logoDark from '../../pages/main/images/csp-dark.png';
import maxIcon from '../../pages/main/images/max.png';
import rutubeIcon from '../../pages/main/images/rutube.png';
import vkIcon from '../../pages/main/images/vk.png';

const sections = [
  'Главная',
  'Игроки',
  'Команды',
  'Турниры',
  'Рейтинги',
  'Аналитика',
];

const support = [
  'Помощь',
  'Правила сайта',
  'Политика конфиденциальности',
  'Пользовательское соглашение',
];

interface DateTime {
  date: string;
  time: string;
}

export const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState<DateTime>({
    date: '',
    time: '',
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      setCurrentDateTime({
        date: now.toLocaleDateString('ru-RU', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        time: now.toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      });
    };

    updateDate();

    const interval = window.setInterval(updateDate, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const openMainPage = () => {
    window.location.assign(`${process.env.PUBLIC_URL}/`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section rights-section">
          <button
            className="footer-logo"
            type="button"
            aria-label="Перейти на главную страницу"
            onClick={openMainPage}
          >
            <img src={logoDark} alt="CSP" />
          </button>

          <p>
            © CSP. Все права защищены.
            <span className="footer-date">
              {currentDateTime.date}
              <time>{currentDateTime.time}</time>
            </span>
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">РАЗДЕЛЫ</h3>
          <ul className="footer-list">
            {sections.map((item) => (
              <li key={item}>
                <button className="footer-link" type="button">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">ПОДДЕРЖКА</h3>
          <ul className="footer-list">
            {support.map((item) => (
              <li key={item}>
                <button className="footer-link" type="button">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section social-section">
          <h3 className="footer-title">МЫ В СОЦСЕТЯХ</h3>

          <ul className="footer-social-list">
            <li>
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="ВКонтакте"
              >
                <img src={vkIcon} alt="" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://max.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="MAX"
              >
                <img src={maxIcon} alt="" aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://rutube.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link-wide"
                aria-label="RUTUBE"
              >
                <img src={rutubeIcon} alt="" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
