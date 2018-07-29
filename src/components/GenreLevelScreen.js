import React, { Component } from 'react';
import GenreAnswer from './GenreAnswer';
import Timer from './Timer'
class GenreLevelScreen extends Component {
  componentWillMount() {
    const {answers} = this.props.question;
    answers.forEach((answer, index) => {
      this.setState({
        [`a-` + index] : {
          id: `a-` + index,
          genre: answer.genre,
          src: answer.src,
          checked: false
        }
      })
    })
  }
  render() {
    const {question} = this.props;
    return (
      <section className="main main--level main--level-genre">
        <Timer/>
        <div className="main-wrap">
          <h2 className="title">{question.question}</h2>

          <form className="genre">
            {question.answers.map((answer, index) => {
              return <GenreAnswer key={answer.src} answer={this.state[`a-` + index]} onAnswer={this.chooseAnswer} />
            })}
            <button disabled={this.isDisabled()} onClick={this.onClickAnswer} className="genre-answer-send" type="submit">Ответить</button>
          </form>
        </div>
      </section>
    );
  }

  chooseAnswer = ({target}) => {
    const {id} = target;
    this.setState(prevState => {
      const newState = {...prevState}
      const answer = newState[id];
      answer.checked = target.checked;
      return newState
    })
  };

  onClickAnswer = (e) => {
    e.preventDefault();
    const answer = this.getAnswer();
    this.props.goToNextScreen(answer);
  }

  getAnswer() {
    const {genre} = this.props.question
    return Object.values(this.state).every(answer => answer.genre !== genre && !answer.checked || answer.genre === genre && answer.checked)
  }
  isDisabled() {
    return !Object.values(this.state).some(answer => answer.checked)
  }
}

export default GenreLevelScreen;
