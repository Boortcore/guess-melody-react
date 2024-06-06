import { Component } from 'react';
class ArtistAnswer extends Component {
  render() {
    const { index, answer, onclick } = this.props;
    return (
      <div className="main-answer-wrapper">
        <input
          onClick={onclick}
          className="main-answer-r"
          type="radio"
          id={'answer-' + index}
          name="answer"
          value={answer.isCorrect}
        />
        <label className="main-answer" htmlFor={'answer-' + index}>
          <img className="main-answer-preview" src={answer.image.url} />
          {answer.title}
          <br />
          {answer.isCorrect.toString()}
        </label>
      </div>
    );
  }
}

export default ArtistAnswer;
