import React from 'react';
import style from './AboutMe.scss';
import PersonalDescription from '../../components/AboutMe/Description/PersonalDescription.jsx';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.jsx';
import Backdrop from '../../components/UI/Backdrop/Backdrop.jsx';


class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false
    }
    this.handleSideDrawerClick = this.handleSideDrawerClick.bind(this);
  }

  handleSideDrawerClick() {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    }, () => console.log(this.state));
  }
  render() {
    return (
      <div className={style.AboutMeContainer}>
          <Toolbar 
            handleSideDrawerClick={this.handleSideDrawerClick}/>
          <SideDrawer 
            showSideDrawer={this.state.showSideDrawer}
            handleSideDrawerClick={this.handleSideDrawerClick}/>
          <Backdrop 
            type='sideDrawer'
            showSideDrawer={this.state.showSideDrawer}
            handleSideDrawerClick={this.handleSideDrawerClick}/>
        <PersonalDescription />
        
      </div>
    )
  }
}

export default AboutMe;