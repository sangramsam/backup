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

class Myprofile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuContext>
                <ScrollView>
                    <View style={styles.container}>
                        <ImageBackground  resizeMode="cover"  source={require('../../image/profileNav.png')} style={{
                            height: 170,
                            width: width
                        }}>
                            <HeaderComponent title='My Account'/>
                            <View style={[styles.container, {
                                backgroundColor: "transparent",
                                alignItems: 'flex-start',
                            }]}>
                                <Text style={styles.text}>Hi Sangram</Text>
                                <Text style={[styles.text, {fontSize: 17, fontWeight: '300'}]}>Edit Profile ></Text>
                            </View>
                        </ImageBackground>
                        <View style={{position: 'relative', top: -30,}}>
                            <View style={{flexDirection: 'column', backgroundColor: "white", borderRadius: 10}}>
                                <View style={{flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: "#eee"}}>
                                    <View style={{
                                        width: 180,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: 20
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.MyOrder();
                                        }} style={{alignItems: 'center'}}>
                                            <Image source={require('../../image/1.png')} resizeMode="center"
                                                   style={{height: 40, width: 40}}/>
                                            <Text style={[styles.iconText]}>ORDERS</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: 180,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderLeftWidth: 2,
                                        borderColor: '#eee',
                                        padding: 20
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.Address();
                                        }} style={{alignItems: 'center'}}>
                                            <Image source={require('../../image/2.png')} resizeMode="center"
                                                   style={{height: 40, width: 40}}/>
                                            <Text style={styles.iconText}>ADDRESS BOOK</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                        width: 180,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: 20
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.Reminder();
                                        }} style={{alignItems: 'center'}}>
                                            <Image source={require('../../image/3.png')} resizeMode="center"
                                                   style={{height: 40, width: 40}}/>
                                            <Text style={styles.iconText}>REMINDERS</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{
                                        width: 180,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderLeftWidth: 2,
                                        borderColor: '#eee',
                                        padding: 20
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.Voucher();
                                        }} style={{alignItems: 'center'}}>
                                            <Image source={require('../../image/4.png')} resizeMode="center"
                                                   style={{height: 40, width: 40}}/>
                                            <Text style={styles.iconText}>GIFT VOUCHERS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{minHeight: 200, marginTop: 15, backgroundColor: "white", borderRadius: 5}}>
                                <View style={{
                                    flex: 0.5,
                                    flexDirection: "row",
                                    borderBottomWidth: 1,
                                    borderColor: '#eee'
                                }}>
                                    <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                                        <Image source={require('../../image/user.png')} resizeMode="center"
                                               style={{height: 20, width: 20}}/>
                                    </View>
                                    <View style={{flex: 4, alignItems: "flex-start", justifyContent: 'center'}}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.ProfileForm();
                                        }}>
                                            <Text>EDIT PROFILE</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: 'center'}}><Image
                                        source={require('../../image/arrow.png')} style={{height: 15, width: 25}}
                                        resizeMode="center"/></View>
                                </View>
                                <View style={{
                                    flex: 0.5,
                                    flexDirection: "row",
                                    borderBottomWidth: 1,
                                    borderColor: '#eee'
                                }}>
                                    <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                                        <Image source={require('../../image/password.png')} resizeMode="center"
                                               style={{height: 20, width: 20}}/>
                                    </View>
                                    <View style={{flex: 4, alignItems: "flex-start", justifyContent: 'center'}}>
                                        <TouchableOpacity onPress={() => {
                                            console.log("called");
                                            // when use login with OTP Actions.SetPasswords();
                                            Actions.ChangePassword();
                                        }}>
                                            <Text>CHANGE PASSWORD</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: 'center'}}>
                                        <Image source={require('../../image/arrow.png')} style={{height: 15, width: 25}}
                                               resizeMode="center"/></View>
                                </View>
                                <View style={{
                                    flex: 0.5,
                                    flexDirection: "row",
                                    borderBottomWidth: 1,
                                    borderColor: '#eee'
                                }}>
                                    <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                                        <Image source={require('../../image/power.png')} resizeMode="center"
                                               style={{height: 20, width: 20}}/>
                                    </View>
                                    <View style={{
                                        flex: 4,
                                        alignItems: "flex-start",
                                        justifyContent: 'center'
                                    }}><Text>Logout</Text></View>
                                    <View style={{flex: 1, alignItems: "flex-end", justifyContent: 'center'}}><Image
                                        source={require('../../image/arrow.png')} style={{height: 15, width: 25}}
                                        resizeMode="center"/></View>
                                </View>
                            </View>
                            <View style={{marginTop: 15, flex: 0.5, backgroundColor: "#fff9d0", borderRadius: 5}}>
                                <TouchableOpacity onPress={() => {
                                    console.log("called");
                                    Actions.Referral();
                                }}>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <View style={{flex: 5}}>
                                            <Image source={require('../../image/refer.png')} resizeMode="center"
                                                   style={{height: 50, width: 250}}/>
                                            <Text style={{
                                                fontSize: 30,
                                                paddingLeft: 20,
                                                fontWeight: 'bold',
                                                fontStyle: 'italic'
                                            }}>20 % off</Text>
                                            <Text style={{
                                                fontSize: 15,
                                                paddingLeft: 10,
                                                fontWeight: 'bold',
                                                fontStyle: 'italic'
                                            }}>on all Flowers, Cakes & Gifts!</Text>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{color: '#ff9212', fontWeight: '700', fontSize: 15}}>REFER NOW
                                                ></Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
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
        paddingRight: Platform.OS === 'ios' ? 20 : 20,
        paddingLeft: Platform.OS === 'ios' ? 20 : 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#cccccc'
    },

    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        height: 180,
        resizeMode: 'center', // or 'stretch'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    iconText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '300',
        fontFamily: 'Roboto',
        marginTop: 10,
    }
});
export {Myprofile};