import React from 'react';
import style from './ApplicationCards.module.scss';
// import styled from 'styled-components';
import ApplicationCardFront from './ApplcationCardFront/ApplicationCardFront.component.jsx';
import ApplicationCardBack from './ApplicationCardBack/ApplicationCardBack.component.jsx';
import Modal from '../UI/Modal/Modal.component.jsx';
import BackDrop from '../UI/Backdrop/Backdrop.jsx';

class ApplicationCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ApplicationModal: false
    }
    this.handleModalSwitch = this.handleModalSwitch.bind(this);
  }

  handleModalSwitch() {
    this.setState({
      ApplicationModal: !this.state.ApplicationModal
    })
  }


  render() {
    const { applications } = this.props;
    // const modal = (
    //   <div>
    //     <BackDrop 
    //       showSideDrawer={this.state.ApplicationModal}
    //       handleSideDrawerClick={this.handleModalSwitch}/>
    //     <Modal />
    //   </div>
    // )
    console.log(applications.Link)
    return (
      
      <div className={style.ApplicationCardContainer}>
        {this.state.ApplicationModal ? modal : null}
        <div className={style.ApplicationCardInnerWrap}>
          {/* <div className={style.ApplicationCardFront}> */}
            <ApplicationCardFront Title={applications.Title} Image={applications.Images}/>
          {/* </div> */}
          {/* <div className={style.ApplicationCardBack}> */}
            <ApplicationCardBack 
              Description={applications.Description} 
              TeckStack={applications.TeckStacks}
              Link={applications.Link}
              handleModalSwitch={this.handleModalSwitch}/>
          {/* </div> */}
        </div>
      </div>
    )
  }
};

export default ApplicationCards;