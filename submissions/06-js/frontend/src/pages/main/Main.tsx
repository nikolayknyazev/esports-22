import './Main.css';

import {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { GameList } from '../../components/GameList/GameList';
import { Hero } from '../../components/Hero/Hero';
import { NewsCarousel } from '../../components/NewsCarousel/NewsCarousel';
import { SubscriptionBanner } from '../../components/SubscriptionBanner/SubscriptionBanner';
import { TodayHighlights } from '../../components/TodayHighlights/TodayHighlights';
import Tops from '../../components/Tops/Tops';

interface RevealSectionProps {
  className: string;
  children: ReactNode;
}

const RevealSection = ({
  className,
  children,
}: RevealSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -35px',
      },
    );

    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        observer.observe(section);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${className} reveal-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {children}
    </section>
  );
};

export const MainPage = () => {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = 'manual';

    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    };

    resetScroll();

    const frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <main className="main-page">
      <RevealSection className="main-section section-hero">
        <Hero />
      </RevealSection>

      <RevealSection className="main-section section-games">
        <GameList />
      </RevealSection>

      <RevealSection className="main-section section-today">
        <h2 className="section-title">СЕГОДНЯ В КИБЕРСПОРТЕ</h2>
        <TodayHighlights />
      </RevealSection>

      <RevealSection className="main-section section-news">
        <h2 className="section-title">ПОСЛЕДНИЕ НОВОСТИ</h2>
        <NewsCarousel />
      </RevealSection>

      <RevealSection className="main-section section-tops">
        <Tops />
      </RevealSection>

      <RevealSection className="main-section section-subscription">
        <SubscriptionBanner />
      </RevealSection>
    </main>
  );
};
