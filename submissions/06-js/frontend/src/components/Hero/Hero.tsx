import './index.css';

import g2Logo from '../../pages/main/images/g2.png';
import heroImage from '../../pages/main/images/hero-esports.png';
import naviLogo from '../../pages/main/images/navi.png';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-content">
          <h1>
            ВЕСЬ
            <br />
            КИБЕРСПОРТ
            <br />
            <span>В ОДНОМ</span>
            <br />
            ПОРТАЛЕ
          </h1>

          <p>
            Турниры, команды, игроки, статистика
            <br />
            и аналитика — всё в реальном времени.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" type="button">
              СМОТРЕТЬ ТУРНИРЫ
            </button>
            <button className="btn-secondary" type="button">
              ОТКРЫТЬ РЕЙТИНГ
            </button>
          </div>
        </div>

        <img
          className="hero-image"
          src={heroImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="live-card">
        <div className="live-title">
          <span></span>
          В ПРЯМОМ ЭФИРЕ
        </div>

        <h2>
          BLAST Premier
          <br />
          Spring Final
        </h2>

        <div className="teams">
          <div className="team">
            <img src={naviLogo} alt="NAVI" />
            <b>NAVI</b>
          </div>

          <strong>VS</strong>

          <div className="team">
            <img src={g2Logo} alt="G2" />
            <b>G2</b>
          </div>
        </div>

        <div className="match-time">
          19:30
          <small>BO3</small>
        </div>

        <button className="btn-primary live-btn" type="button">
          СМОТРЕТЬ МАТЧ
        </button>
      </div>
    </div>
  );
};
