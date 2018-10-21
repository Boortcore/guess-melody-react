import React, { Component } from 'react';
import {Route} from 'react-router';
import WelcomeScreen from './components/Screens/WelcomeScreen';
import GameScreen from "./components/Screens/GameScreen";
import FailScreen from './components/Screens/FailScreen';
import SuccessScreen from "./components/Screens/SuccessScreen";
class App extends Component {
  render() {
    return (
      <section className="main">
        <Route exact path='/' component={WelcomeScreen}/>
        <Route path='/game' component={GameScreen}/>
        <Route path='/fail' component={FailScreen}/>
        <Route path='/success:id?' component={SuccessScreen}/>
      </section>
    );
  }
}

export default App;
