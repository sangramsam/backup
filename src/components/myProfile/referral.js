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

class Referral extends React.Component {
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
                                alignItems:'center',

                            }]}>
                                <Text style={[styles.text, {alignItems: 'center',marginBottom:'2%'}]}>Hey,Hardeep</Text>
                                <Text style={[styles.text, {fontSize: 18}]}>Give your friends 15% off & get 20% off for
                                    yourself on all Flowers, Cakes & Gifts!</Text>
                            </View>
                        </ImageBackground>
                        <View style={{flex: 1,maxHeight:80, alignItems: 'center'}}>
                            <Text style={{fontSize: 18, padding: 2,paddingTop:4, marginBottom: 4}}>Enter your email address below and
                                start </Text>
                            <Text style={{fontSize: 17,}}>Sharing straight way.</Text>
                        </View>
                            <View style={{flex: 1,maxHeight:150,}}>
                                   <View style={{borderBottomWidth:1,borderColor:'#eee',}}>
                                    <TextInput
                                        style={{
                                            backgroundColor: '#fff',
                                            width:350,
                                            borderTopLeftRadius:5,
                                            borderTopRightRadius:5,
                                            height:55
                                        }}
                                        underlineColorAndroid='transparent'
                                        placeholder="Your Email"
                                    />
                                   </View>
                                <View style={{}}>
                                    <TextInput
                                        style={{
                                            backgroundColor: '#fff',
                                            width:350,
                                            height:55,
                                            borderBottomLeftRadius:5,
                                            borderBottomRightRadius:5,
                                        }}
                                        underlineColorAndroid='transparent'
                                        placeholder="Your Name (optional)"
                                    />
                                </View>
                            </View>
                        <View style={{ flex: 1,
                            justifyContent:'center',
                             maxHeight:130,marginTop:-40}}>
                            <TouchableOpacity
                                style={{
                                    height:50,
                                    backgroundColor: '#ff9212',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding:10,
                                    width:350,
                                    borderRadius: 4,
                                }}>
                                <Text style={styles.whiteFont} >LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1,marginTop:50,
                            justifyContent:'center',
                             maxHeight:130}}>
                            <TouchableOpacity
                                style={{
                                    height:50,
                                    backgroundColor: '#ff9212',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding:10,
                                    width:350,
                                    borderRadius: 4,
                                }} onPress={()=>{Actions.LoginReferral()}}>
                                <Text style={styles.whiteFont} >Non Login Refer</Text>
                            </TouchableOpacity>
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
    export {Referral};