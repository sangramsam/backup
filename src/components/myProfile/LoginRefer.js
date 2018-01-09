import React from 'react';
import {
    TextInput, Image,
    Text,
    ImageBackground,
    TouchableOpacity,
    View, StyleSheet, ScrollView, Platform, Dimensions
} from 'react-native';
import {MenuContext} from 'react-native-popup-menu';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import HeaderComponent from '../headerMyaccount';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class LoginReferral extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuContext>
                <HeaderComponent title='Refers your friends' color='true'/>
                <ScrollView>
                    <View style={styles.container}>
                        <ImageBackground source={require('../../image/Referral.png')} style={{
                            resizeMode: 'cover',
                            height: 100,
                            width: width
                        }}>

                            <View style={[styles.container, {
                                backgroundColor: "transparent",
                                justifyContent:'center',
                                alignItems:'center'
                            }]}>
                                <Text style={[styles.text, {alignItems: 'center',marginBottom:'2%'}]}>Hey Hardeep ,</Text>
                                <Text style={[styles.text, {fontSize: 18}]}>Give your friends 15% off & get 20% off for
                                    yourself on all Flowers, Cakes & Gifts!</Text>
                            </View>
                        </ImageBackground>
                        <View style={{flex: 1,maxHeight:80, alignItems: 'center'}}>
                            <Text style={{fontSize: 18, padding: 2,paddingTop:4, marginBottom: 4,color:'black'}}>Below is your personalized referral link, share it with your friends and earn 20% OFF on all Flowers, Cakes & Gifts fro each person who makes a purchase! </Text>
                        </View>
                        <View style={{flex: 1,maxHeight:100,marginTop:30,alignItems:'center'}}>
                            <View style={{borderBottomWidth:1,borderColor:'#eee',}}>
                                <Text style={{
                                    backgroundColor: '#fff',
                                    width:350,
                                    borderTopLeftRadius:5,
                                    borderTopRightRadius:5,
                                    height:55,
                                    paddingLeft:30,
                                    paddingTop:20,
                                }}>http://fernsnpetals.refr.cc/hardeepsingh1.</Text>
                            </View>
                            <View >
                                <Text style={{
                                    backgroundColor: '#fff',
                                    borderTopLeftRadius:5,
                                    borderTopRightRadius:5,
                                    height:55,
                                    width:350,
                                    paddingLeft:140,
                                    paddingTop:20,
                                    alignItems:'center'
                                }}>COPY LINK</Text>
                            </View>
                        </View>
                        <View style={{height:30,marginTop:20}}>
                            <Text style={{fontSize:15,color:'black'}}>Or share code via</Text>
                        </View>
                        <View style={{ flex: 1,
                            justifyContent:'space-around',
                            maxHeight:130,flexDirection:"row",marginTop:10,paddingLeft:20}}>
                            <View style={{width:101,alignItems:'flex-end',}}>
                                <Image resizeMode='contain' source={require('../../image/facebookCricle.png')}  />
                            </View>
                            <View style={{width:101,alignItems:'center'}}>
                                <Image  resizeMode='contain' source={require('../../image/twitterCircle.png')} />
                            </View>
                            <View style={{width:101}}>
                                <Image  resizeMode='contain' source={require('../../image/gmailCircle.png')} />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        height:height
    },

    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        height: 180,
        resizeMode: 'center', // or 'stretch'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    iconText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '300',
        fontFamily: 'Roboto',
        marginTop: 10
    },
    whiteFont:
        {
            color: '#ffffff',
            fontSize:16

        },
});
export {LoginReferral};