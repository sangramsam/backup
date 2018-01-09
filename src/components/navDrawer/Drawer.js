import React, { Component } from 'react';

import FirstSceen from './header2.js'
import SecondSceen from './header2.js'
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import DrawerContent from './drawerComponent';



export default DrawerExample = DrawerNavigator({
    First:{
      path:'/',
      screen:FirstSceen,
    },
    Second:{
      path:'/sent',
      screen:SecondSceen
    },
    Third:{
      path:'/sentw',
      screen:SecondSceen
    },
    Fourth:{
      path:'/sentw',
      screen:SecondSceen
    },
    Fifth:{
      path:'/sentw',
      screen:SecondSceen
    }
},{
  initialRouteName:"First",
  drawerPosition:'left',
  headerMode:'screen',
  drawerBackgroundColor:'#eee',
  drawerWidth:350,
  contentComponent:props=>{return(<DrawerContent {...props}/>)}
  }
);

