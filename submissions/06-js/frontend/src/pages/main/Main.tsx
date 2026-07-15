import './Main.css';

import { GameList } from '../../components/GameList/GameList';
import { NewsCarousel } from '../../components/NewsCarousel/NewsCarousel';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import Tops from '../../components/Tops/Tops';

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      Задание для студентов
      <ThemeSwitcher />

      <section className="section-now">
        now
      </section>

      <section className="section-games">
        <GameList />
      </section>

      <section className="section-today">
        today
      </section>

      <section className="section-news">
        <NewsCarousel />
      </section>

      <section className="section-tops">
        <Tops />
      </section>

      <section className="section-sub">
        subscribe
      </section>
    </div>
  );
};
