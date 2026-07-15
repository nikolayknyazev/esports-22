import './Main.css';

import { ThemeSwitcher } from '../../components/ThemeSwitcher';

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      Задание для студентов
      <ThemeSwitcher />

      <section className="section-now">
        now
      </section>

      <section className="section-games">
        games
      </section>

      <section className="section-today">
        today
      </section>

      <section className="section-news">
        news
      </section>

      <section className="section-tops">

      </section>

      <section className="section-sub">
        subscribe
      </section>
    </div>
  );
};
