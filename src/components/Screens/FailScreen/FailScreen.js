import React from 'react';
function FailScreen({onClick}) {
  return (
    <section className="main main--result">
      <section className="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 className="title">Вы проиграли</h2>
      <div className="main-stat">Ничего, вам повезет в следующий раз</div>
      <span onClick={onClick} role="button" tabIndex="0" className="main-replay">Сыграть ещё раз</span>
    </section>
  );
}

export default FailScreen;
