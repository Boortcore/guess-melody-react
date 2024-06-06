import { Component } from 'react';
import { Route } from 'react-router';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import FailScreen from './components/FailScreen';
import SuccessScreen from './components/SuccessScreen';
import './assets/style.css';
class App extends Component {
  render() {
    return (
      <section className="main">
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/game" component={GameScreen} />
        <Route path="/fail" component={FailScreen} />
        <Route path="/success:id?" component={SuccessScreen} />
      </section>
    );
  }
}

export default App;
