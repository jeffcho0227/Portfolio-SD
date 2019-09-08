import React, { Component } from 'react';
import AboutMe from './containers/AboutMe/AboutMe.jsx';
import Layout from './components/Layout/Layout.jsx';
import Skills from './containers/Skills/Skills.jsx';
import Applications from './containers/Applications/Applications.jsx';
import Contact from './containers/Contact/Contact.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import style from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    library.add(fab);

    return(
      <div>
        <Layout>
            <AboutMe />
          <Element name='Skills'>
            <Skills />
          </Element>
          <Element name='Applications'>
            <Applications />
          </Element>
          <Element name='contactMe'>
            <Contact 
              scrollToTop={this.scrollToTop}/>
          </Element>
        </Layout>
      </div>
    )
  };
};

export default App;