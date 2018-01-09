import React, { Component } from 'react';
import {
    Platform,


    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer'

import ControlPanel from './ControlPanel'
import Checkout from './checkout'
import Thankyou from './thankyouPage'
import Cart from './cartpage'
import {Home} from './home'


export default class App extends Component {
  constructor(props)
  {
    super(props)
  }
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };
  render() {
      console.log(this.props);
    return (
      <Drawer
      type="overlay"
      content={<ControlPanel />}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      //panOpenMask={Platform.OS === 'ios' ? false : true }
      styles={drawerStyles}

        >
        {this.props.data=='checkout'?<Checkout/>:(this.props.data=='thankyou'?<Thankyou/>:(this.props.data=='home'?<Home/>:null):null)}
      </Drawer>
    )
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:'#fff'},
  main: {paddingLeft: 3},
}
