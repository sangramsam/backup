import React, {Component} from 'react';
import {Image, ScrollView, Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
export default class HeaderMyAccount extends Component
{
    render(){
        var color = this.props.color?'#000':'#fff';
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxHeight: 60,
                flexDirection: 'row',
                marginTop: Platform.OS === 'ios' ? 20 : null,

            }}>

                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={()=>{Actions.pop()}} style={{flex:1,backgroundColor:'transparent',justifyContent: 'center', alignItems: 'center'}}>
                            <Icons name="arrow-left"  size={25} color={color}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                        {!this.props.color?<Image source={require('../image/white-logo.png')} resizeMode='contain'
                               style={{width:40, height: 35}}/>:<Image source={require('../image/logo-copy.png')} resizeMode='contain'
                                                                       style={{width:40, height: 25}}/>}
                    </View>
                    <View style={{flex: 4, justifyContent: 'flex-start', alignItems: 'flex-start',backgroundColor:'transparent'}}>
                        <Text style={{color:color,fontSize:18,fontWeight:'700'}}>{this.props.title}</Text>

                    </View>

                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: Platform.OS === 'ios' ? '1%' : 0,

                }}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={{flex:1,backgroundColor:'transparent',justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center', alignItems: 'flex-start'}}><Icon name="search"  size={25} color={color}/></TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>

                        <TouchableOpacity onPress={()=>Actions.Cart()} style={{flex:1,backgroundColor:'transparent',justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center', alignItems: 'center'}}><Icon name="shopping-cart"  size={25} color={color}/></TouchableOpacity>

                    </View>
                    <View style={{flex: 1}}>

                        <TouchableOpacity style={{flex:1,backgroundColor:'transparent',justifyContent: Platform.OS === 'ios' ? 'flex-end' : 'center', alignItems: 'center'}}><Iconss name="dots-vertical"  size={25} color={color}/></TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}