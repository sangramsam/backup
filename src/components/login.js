import React from 'react';
import {
    TextInput, Image,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View, StyleSheet, ScrollView, Platform, Dimensions
} from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {HeaderComponent} from './header';
import {GoogleSignin} from "react-native-google-signin";
import {LoginManager} from "react-native-fbsdk";
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', password: ''};
        this._onPressButton = this._onPressButton.bind(this);

    }
    componentWillMount(){
        GoogleSignin.hasPlayServices({ autoResolve: true });
        GoogleSignin.configure({
            iosClientId: "426431417733-8j4u4v1rkj0looqbgnu0f76fpkl5ib6o.apps.googleusercontent.com", // only for iOS
            webClientId: "426431417733-os8f4t1n8n5ven7tibhmeus2qp5lvmcc.apps.googleusercontent.com",
            offlineAccess: true // only for iOS
        })
    }
    _fbAuth(){
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                console.log(result);
                if (result.isCancelled) {
                    ToastAndroid.show('Login cancelled',ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Login success with permissions: ' +result.grantedPermissions.toString(),ToastAndroid.SHORT);
                    //ToastAndroid.show('Login success with permissions:' ,ToastAndroid.SHORT);
                }
            },
            function(error) {
                ToastAndroid.show('Login fail with error: ' + error,ToastAndroid.SHORT);
            }
        );
    }
    _signIn(){
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }



    _onPressButton() {
        if (this.state.text === 'sam' && this.state.password === "123") {
            Actions.Home();
        } else {
            ToastAndroid.show('Username / password wrong', ToastAndroid.SHORT);
        }
    }

    onFocus() {
        this.setState({
            backgroundColor: 'green'
        })
    }

    onBlur() {
        this.setState({
                backgroundColor: '#ededed'
            }
        )
    }

    render() {
        return (
            <MenuContext>
            <View>
                <HeaderComponent name='Login/Register' headerProps='notactive'/>
                <ScrollView>
                <View style={styles.container}>
                    <View style={{flex: 0.5, justifyContent: 'center',alignItems:"flex-start",alignSelf:'stretch'}}>
                        <Text style={{fontSize:12,letterSpacing:0.3}}>Login to get a personalized experience & quick checkout</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignSelf:'stretch',
                        borderRadius: 4,
                        shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                        shadowOffset: {width: 0, height:2},
                        shadowOpacity: 0.8,
                        shadowRadius: 2,

                  }}>
                        <View style={{flex:1,marginTop:10}}>
                            <TextInput
                            style={{
                                flex:Platform.OS === 'ios' ? 1 : 0.9,
                                borderColor: Platform.OS === 'ios' ?'#eee':'gray',
                                borderBottomWidth:Platform.OS === 'ios' ? 1 : 2,
                                borderBottom: 1,
                                borderStyle:'solid',
                                backgroundColor: '#fff',
                                borderTopLeftRadius: 2,
                                paddingLeft: 10,
                            }}
                            placeholder="Email Id" underlineColorAndroid='transparent'
                        /></View>
                        <View style={{flex:1}}>
                            <TextInput
                                style={{
                                    backgroundColor: '#fff',
                                    flex:Platform.OS === 'ios' ? 1 :1,
                                    paddingLeft: 10,
                                }}
                                underlineColorAndroid='transparent'
                                placeholder="Ferns N Petals Password"
                            />
                        </View>
                        <Text onPress={() => {
                            Actions.Forgot()
                        }} style={{position: 'absolute', top:Platform.OS === 'ios' ? '70%':'68%',right: 10, color: 'blue',backgroundColor:'#fff'}}>Forgot?</Text>
                    </View>
                    <View style={{
                        flex: 1.2,
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignSelf:'stretch',
                        marginTop: 20,
                        maxHeight:130
                    }}>
                        <TouchableOpacity
                            style={{
                                flex:1.2,
                                backgroundColor: '#ff9212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding:10,
                                borderRadius: 4,
                            }}
                            onPress={this._onPressButton}>

                            <Text style={[styles.whiteFont]}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{

                                flex:1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#999999',
                                marginTop: 15,padding:12,
                                borderRadius: 4,

                            }} onPress={() => {
                            Actions.LoginWithoutPassword()
                        }}>
                            <Text style={[styles.whiteFont]}>LOGIN WITHOUT PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.8,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf:'stretch',
                        maxHeight:50

                    }}><Text>OR LOGIN USING</Text></View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        alignSelf:'stretch',
                        maxHeight:45
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#4f6db1',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: Platform.OS === 'ios' ? 160 :155,
                                borderRadius: 4,
                                padding: 12

                            }}
                            onPress={this._fbAuth}>
                            <Image style={[styles.ImageIconStyle1,{marginRight: 5,height: 15}]}
                                   source={require('../image/fbLogo.png')}
                                   resizeMode='center' />
                            <Text style={styles.whiteFont}>FACEBOOK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#d80c14',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: Platform.OS === 'ios' ? 160 :155,
                                borderRadius: 4,
                                padding: 12
                            }}
                            onPress={this._signIn}>
                            <Image style={[styles.ImageIconStyle2, {color: '#ffffff'}]}
                                   source={require('../image/google.png')}
                                   resizeMode='center' style={{height: 15, width: 20}}/>
                            <Text style={styles.whiteFont}>GOOGLE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.common,{maxHeight:40}]}><Text style={styles.FnP}>New to Ferns N Petals
                        ? </Text></View>
                    <View style={[styles.common3,{maxHeight:40}]}><Text onPress={() => {
                        Actions.Registration()
                    }} style={styles.register}>Register Now</Text></View>
                    <View style={[styles.common4,{maxHeight:100}]}><Text>SKIP</Text></View>
                </View>
                </ScrollView>
            </View>
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight:Platform.OS === 'ios'? 15 :20,
        paddingLeft:Platform.OS === 'ios'? 15 :20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height:height,
        backgroundColor: '#eee',
        flexDirection: 'column',
    },
    welcome: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    red: {
        color: 'red',
    },
    common: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    fontLarge:
        {
            fontSize: 20
        },
    whiteFont:
        {
            color: '#ffffff',
            marginLeft: 10

        },
    margin10:
        {},

    register:
        {
            color: 'blue', fontSize: 16
        },
    common2:
        {
            flex:1 , justifyContent: 'center', alignItems: 'center'
        },
    common3:
        {
            flex:1 , justifyContent: 'center', alignItems: 'flex-start'
        },
    common4:
        {
            flex:1 , justifyContent: 'flex-end', alignItems: 'flex-end'
        },
    ImageIconStyle1: {

        height:20,
        width:10,
        marginRight:10,
        marginLeft:25

    },
    ImageIconStyle2: {
        height:17,
        width:30,
        marginRight:7,
        marginLeft:25
    }
});
export {Login};