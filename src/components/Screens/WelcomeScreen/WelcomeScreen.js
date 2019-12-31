import React from 'react';

function WelcomeScreen({onClick}) {
  return (
    <section className="main main--welcome">
      <section className="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button onClick={onClick} className="main-play">Начать игру</button>
      <h2 className="title main-title">Правила игры</h2>
      <p className="text main-text">
        Правила просты&nbsp;— за&nbsp;2 минуты дать
        максимальное количество правильных ответов.<br/>
        Удачи!
      </p>
    </section>
  );
}

export default WelcomeScreen;
