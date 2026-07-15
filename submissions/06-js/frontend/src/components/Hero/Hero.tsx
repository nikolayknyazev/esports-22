import "./index.css";

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
            <button className="btn-primary">
              СМОТРЕТЬ ТУРНИРЫ
            </button>
            <button className="btn-secondary">
              ОТКРЫТЬ РЕЙТИНГ
            </button>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://picsum.photos/900/500"
          alt=""
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
            <img src="https://picsum.photos/100" />
            <b>NAVI</b>
          </div>
          <strong>VS</strong>
          <div className="team">
            <img src="https://picsum.photos/101" />
            <b>G2</b>
          </div>
        </div>

        <div className="match-time">
          19:30
          <small>ВОЗ</small>
        </div>

        <button className="btn-primary live-btn">
          СМОТРЕТЬ МАТЧ
        </button>
      </div>

    </div>
  );
};