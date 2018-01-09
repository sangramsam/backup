import React, { Component } from 'react';
import {Image, TextInput,ScrollView,FlatList, Text ,View ,Platform, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Header from './header'
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Progress from 'react-native-progress';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import EIcon from 'react-native-vector-icons/Entypo'
import PropTypes from 'prop-types';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';
import HeaderHome from './headerHome';
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
export default class ThankyouPage extends Component{
  constructor()
  {
    super();
    this.state={
      enable:false
    }
  }
  static contextTypes = {
    drawer: PropTypes.object.isRequired,
  };
  render()
  {
    return(
        <MenuContext>
      <View style={{flex:1}}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-start',maxHeight:50,flexDirection:'row'}}>
            <HeaderHome openDrawer={this.context.drawer.open} data='thankyoupage'/>
        </View>
      <ScrollView style={{marginTop:Platform.OS === 'ios'?'5%':null }}>
      <View style={{flex:1,paddingHorizontal:10,backgroundColor:'#fff'}}>
       <View style={{flex:1,borderBottomWidth:2,borderBottomColor:'#eee',minHeight:180}}>
         <View style={{flex:1,flexDirection:'row'}}>
             <View style={{flex:0.3,alignItems:'flex-start',justifyContent:'center'}}>
                  <Image source={require('../image/tick.png')} style={{width:25,height:25}}/>
             </View>
             <View style={{flex:3}}>
                 <View style={{flex:5,justifyContent:'flex-end',alignItems:'flex-start'}}><Text style={{fontSize:Platform.OS === 'ios'?12:null}}>THANKYOU YOUR ORDER #586985 IS CONFIRMED</Text></View>
                 <View style={{flex:1}}>
                   <View style={{flex:1,justifyContent:'flex-end'}}><Text style={{fontSize:Platform.OS === 'ios'?10:12}}>You will also be reciving an Email and confirming you order</Text></View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={{fontSize:12}}>Order Amount:<Text style={{color:'#3BBC82'}}>Rs 360</Text></Text>
                        <Text style={{fontSize:12,marginLeft:10}}>Payment Method:<Text style={{color:'#3BBC82'}}>Credit card</Text></Text>
                   </View>
                 </View>
             </View>
         </View>
         <View style={{flex:1,marginTop:20}}>
           <View style={{flex:1,flexDirection:'row',maxHeight:60,paddingBottom:10,backgroundColor:'#fff'}}>

               <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                    <Image source={require('../image/engimatic.jpg')} resizeMode="contain" style={{width:60,height:120}}/>
               </View>
               <View style={{flex:3,flexDirection:'column'}}>
                 <View style={{flex:1,justifyContent:'flex-start'}}>
                          <Text>Engimatic 8 Red Roses</Text>
                 </View>
                 <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start'}}>
                           <Text>Small</Text>
                 </View>
                 <View style={{flex:1}}>
                            <Text>Qty 1</Text>
                 </View>


               </View>
               <View style={{flex:1}}>
                 <View style={{flex:1,alignItems:'flex-end'}}>
                     <Text style={{color:'#EF000F'}}>₹ 599</Text>
                 </View>

               </View>

          </View>
         </View>
       </View>
       <View  style={{flex:1,minHeight:220,paddingVertical:20,borderBottomWidth:2,borderBottomColor:'#eee'}}>
         <View style={{flex:1}}>
            <Text style={{fontSize:20}}>Order Status</Text>
         </View>
         <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
            <Progress.Bar progress={0.3} width={null} color='#51AB44' style={{flexShrink:1}} />
         </View>
         <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex:1,alignItems:'flex-start'}}>
                <Text>Confirmed</Text>
                <Text>5th Sep , 11:30 </Text>
              </View>
              <View style={{flex:1,alignItems:'center'}}><Text>Processing</Text></View>
              <View style={{flex:1,alignItems:'center'}}><Text>On the Ways</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Text>Delivery</Text><Text>7th Sep 17</Text><Text></Text></View>
         </View>
         <View style={{flex:1,alignItems:'center',justifyContent:'flex-end'}}>
           <TouchableOpacity style={{flex:1,borderColor:'orange',borderWidth:1,alignItems:'center',justifyContent:'center',width:200}}>
           <Text style={{textAlign:'center',color:'orange'}}>SET IT ON THE WAY</Text>


          </TouchableOpacity>
         </View>


       </View>
          <View style={{flex:1,flexDirection:'row',minHeight:110,paddingVertical:20,borderBottomWidth:2,borderBottomColor:'#eee'}}>
                    <View style={{flex:1,alignItems:'flex-start'}}><Text style={{fontSize:16,fontWeight:'500'}}>RECIPIENT</Text></View>
                      <View style={{flex:2}}>
                        <View style={{flex:1.5}}><Text style={{fontSize:13,fontWeight:'300'}}>Use template or</Text>
                        <Text style={{fontSize:13,fontWeight:'300'}}>write your own</Text>
                          <Text style={{fontSize:13,fontWeight:'300'}}>write your own</Text>
                            <Text style={{fontSize:13,fontWeight:'300'}}>write your own</Text></View>
                      </View>
            </View>
            <View style={{flex:1,flexDirection:'row',minHeight:200,paddingTop:20,paddingBottom:10,paddingRight:20,borderBottomWidth:2,borderBottomColor:'#eee'}}>
               <View style={{flex:1.1,alignItems:'flex-start'}}><Text style={{fontSize:15,fontWeight:'500'}}>PRICE DETAILS</Text></View>
               <View style={{flex:2,flexDirection:'column'}}>

                 <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:3}}><Text>Shiping</Text></View>
                   <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 599</Text></View>
                 </View>

                 <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:3}}><Text>Shipping</Text></View>
                   <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 250</Text></View>
                 </View>
                 <View style={{flex:1,flexDirection:'row',alignItem:'flex-start'}}>
                   <View style={{flex:3}}><Text>Discount</Text></View>
                   <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 250</Text></View>
                 </View>

                 <View style={{flex:1,flexDirection:'row',alignItem:'flex-start'}}>
                   <View style={{flex:3}}><Text>Gift a smile</Text></View>
                   <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 250</Text></View>
                 </View>
                 <View style={{flex:1,flexDirection:'row',alignItem:'flex-start',marginBottom:10}}>
                   <View style={{flex:3}}><Text>Use FNP cash from wallet</Text></View>
                   <View style={{flex:1,alignItems:'flex-end'}}><Text>₹ 250</Text></View>
                 </View>
                 <View style={{flex:1.5}}>
                 <View style={{flex:2,flexDirection:'row',borderTopColor:'#CDCDCD',borderTopWidth:1,minHeight:40}}>
                   <View style={{flex:3,alignItems:'flex-end',justifyContent:'center'}}><Text style={{fontSize:16,fontWeight:'500'}}>TOTAL</Text></View>
                   <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}><Text style={{color:'#EF000F',fontSize:16}}>₹ 360</Text></View>
                 </View>

               </View>
               </View>

            </View>
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
              <View style={{flex:1,alignItems:'flex-start',justifyContent:'flex-start'}}>
                <Icons name='bell-ring' size={25} color='green'/>
              </View>
              <View style={{flex:10,marginTop:2}}>
                  <Text>We have saved the reminder for this data</Text>
              </View>
            </View>
            <View style={{flex:3,borderColor:'#eee',minHeight:70,borderWidth:2,borderRadius:8,padding:10,marginTop:'2%'}}>
               <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:1,alignItems:'center'}}><Text>Majid</Text></View>
                  <View style={{flex:1,alignItems:'center'}}><EIcon name='dot-single' size={20} color='#000'/></View>
                  <View style={{flex:1.5,alignItems:'center'}}><Text>Birthday</Text></View>
                   <View style={{flex:1,alignItems:'center',justifyContent:'flex-start'}}><EIcon name='dot-single' size={20} color='#000'/></View>
                    <View style={{flex:1.4,alignItems:'center'}}><Text>7th Sep</Text></View>
                      <View style={{flex:3,alignItems:'flex-end'}}><Icons name='dots-vertical' size={20}/></View>
               </View>
               <View style={{flex:5,justifyContent:'center',paddingLeft:'1%',paddingHorizontal:5}}>
                 <Text>Send flower and any gift on his birthday</Text>

               </View>

            </View>
            <View style={{flex:1,justifyContent:'center',marginTop:10,minHeight:40}}>
              <TouchableOpacity style = {{flex: 1,backgroundColor:'#f19215',justifyContent:'center',alignItems:'center'}}>
              <Text style = {{flex:1,color:'#fff',fontWeight:'500',fontSize:18,marginTop:'2%'}}>PLACE ORDER</Text>


             </TouchableOpacity>

            </View>
            <View style={{flex:1,minHeight:100}}>
              <TouchableOpacity style = {{flex: 1,alignItems:'center',justifyContent:'center'}}>
              <Text>Need Help ?</Text>
              </TouchableOpacity>
            </View>
      </View>
      </ScrollView>
      </View>
        </MenuContext>
    )
  }
}
