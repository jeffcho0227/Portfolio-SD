import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';
import Backdrop from '../UI/Backdrop/Backdrop.jsx';

class Layout extends React.Component {
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
    });
  }

  render() {
    return (
      <div>
        <Toolbar 
          handleSideDrawerClick={this.handleSideDrawerClick}/>
        <SideDrawer 
          showSideDrawer={this.state.showSideDrawer}/>
        <Backdrop 
          showSideDrawer={this.state.showSideDrawer}
          handleSideDrawerClick={this.handleSideDrawerClick}/>
        <main>
          {this.props.children}
        </main>
      </div>
    ) 
  }
}

export default Layout;