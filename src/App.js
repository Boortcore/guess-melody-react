import React, { Component } from 'react';
import {Route, withRouter} from 'react-router';
import {connect} from 'react-redux';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from "./components/GameScreen";
import FailScreen from './components/FailScreen';
import Preloader from './components/Preloader'
import {loadQuestionsRequest} from './AC';
import SuccessScreen from "./components/SuccessScreen";
class App extends Component {
  render() {
    //if (this.props.loading) return <Preloader/>;
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

export default withRouter(connect(state => ({
  loading: state.game.loading
}), {loadQuestionsRequest})(App));
