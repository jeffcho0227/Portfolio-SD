import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.jsx';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Toolbar />
        <main>
          {this.props.children}
        </main>
      </div>
    ) 
  }
}

export default Layout;