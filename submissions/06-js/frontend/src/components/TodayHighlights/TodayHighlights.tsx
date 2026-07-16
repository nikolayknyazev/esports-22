import './index.css';

import donkImage from '../../pages/main/images/donk.png';
import fazeImage from '../../pages/main/images/faze.png';
import naviImage from '../../pages/main/images/navi.png';
import teamSpiritImage from '../../pages/main/images/team-spirit.png';
import vitalityImage from '../../pages/main/images/vitality.png';

export const TodayHighlights = () => {
  return (
    <div className="today-highlights">
      <article className="today-highlight-card">
        <h3 className="today-highlight-title">БЛИЖАЙШИЙ МАТЧ</h3>

        <div className="today-highlight-content today-match-content">
          <div className="today-matchup">
            <span className="today-logo-circle">
              <img src={fazeImage} alt="FaZe Clan" />
            </span>

            <span className="today-versus">VS</span>

            <span className="today-logo-circle">
              <img src={vitalityImage} alt="Team Vitality" />
            </span>
          </div>

          <p className="today-highlight-meta">Сегодня, 20:00</p>
        </div>

        <button className="today-highlight-action" type="button">
          СМОТРЕТЬ
        </button>
      </article>

      <article className="today-highlight-card">
        <h3 className="today-highlight-title">ТОП ИГРОК НЕДЕЛИ</h3>

        <div className="today-highlight-content">
          <div className="today-highlight-summary">
            <span className="today-avatar-circle">
              <img src={donkImage} alt="Игрок donk" />
            </span>

            <div className="today-highlight-description">
              <strong>
                donk
                <span className="today-trend today-trend-up">↑ 0.12</span>
              </strong>

              <p>Рейтинг: 1.38</p>
            </div>
          </div>
        </div>

        <button className="today-highlight-action" type="button">
          ПРОФИЛЬ
        </button>
      </article>

      <article className="today-highlight-card">
        <h3 className="today-highlight-title">ТОП КОМАНДА</h3>

        <div className="today-highlight-content">
          <div className="today-highlight-summary">
            <span className="today-logo-circle today-logo-circle-large">
              <img src={teamSpiritImage} alt="Team Spirit" />
            </span>

            <div className="today-highlight-description">
              <strong>Team Spirit</strong>
              <p>Мировой рейтинг: #1</p>
            </div>
          </div>
        </div>

        <button className="today-highlight-action" type="button">
          ПРОФИЛЬ
        </button>
      </article>

      <article className="today-highlight-card">
        <h3 className="today-highlight-title">ИЗМЕНЕНИЕ РЕЙТИНГА</h3>

        <div className="today-highlight-content">
          <div className="today-highlight-summary">
            <span className="today-logo-circle today-logo-circle-large">
              <img src={naviImage} alt="NAVI" />
            </span>

            <div className="today-highlight-description">
              <strong>
                NAVI
                <span className="today-trend today-trend-up">↑ 2</span>
              </strong>

              <p>в мировом рейтинге</p>
            </div>
          </div>
        </div>

        <button className="today-highlight-action" type="button">
          РЕЙТИНГИ
        </button>
      </article>
    </div>
  );
};
