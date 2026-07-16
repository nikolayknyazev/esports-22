import './index.css';

import { FormEvent, useState } from 'react';

export const SubscriptionBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <aside className="subscription-banner">
      <span
        className="subscription-banner-icon"
        aria-hidden="true"
      />

      <div className="subscription-banner-copy">
        <h2>Будь в курсе всего, что происходит в киберспорте!</h2>

        <p>
          Подпишись на уведомления и не пропусти важные матчи и турниры
          любимых команд.
        </p>
      </div>

      <form
        className="subscription-banner-form"
        onSubmit={handleSubmit}
      >
        <input
          className="subscription-banner-input"
          type="email"
          value={email}
          placeholder="Введите e-mail"
          aria-label="E-mail для подписки"
          autoComplete="email"
          required
          disabled={isSubmitted}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          className="subscription-banner-button"
          type="submit"
          disabled={isSubmitted}
        >
          {isSubmitted ? 'ГОТОВО' : 'ПОДПИСАТЬСЯ'}
        </button>
      </form>
    </aside>
  );
};
