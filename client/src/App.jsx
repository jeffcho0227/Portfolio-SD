import React, { Component } from 'react';
import AboutMe from './containers/AboutMe/AboutMe.jsx';
import Layout from './components/Layout/Layout.jsx';
import Skills from './containers/Skills/Skills.jsx';
import style from './App.scss';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <AboutMe />
          <Skills />
        </Layout>
      </div>
    )
  };
};

export default App;