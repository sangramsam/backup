import React from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    ImageBackground
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import Drawer from './drawerMain';
import Carousel from 'react-native-carousel'
import FBSDK, {LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: "white",
        height: Platform.OS === 'ios' ? height: height-10,
        width,
    },
    temp: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    wrapper: {
        width:Platform.OS === 'ios' ? null : "84%",
       //backgroundColor:'red',
        marginLeft:Platform.OS === 'ios' ? 0 : 33
    },

    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'transparent',

    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        flex:5.5,
        justifyContent: 'center',
        flexShrink:1,
        marginTop:15,
        resizeMode:'contain'



    },
    FacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4f6db1',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,

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

    },
    head:{
        fontSize: 18, color: "#222222", fontWeight: '500',
        fontFamily: 'Roboto'
    }
};

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: '',heading:"FIND THE PERFECT GIFTS EVERYTIME",subHeading:"15,599 Products, 3 Hrs Express Delivery"}

    }
    componentWillMount() {
        GoogleSignin.hasPlayServices({autoResolve: true});
        GoogleSignin.configure({
            iosClientId: "426431417733-8j4u4v1rkj0looqbgnu0f76fpkl5ib6o.apps.googleusercontent.com", // only for iOS
            webClientId: "426431417733-os8f4t1n8n5ven7tibhmeus2qp5lvmcc.apps.googleusercontent.com",
            offlineAccess: true // only for iOS
        })
    }

    _fbAuth() {
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                console.log(result);
                if (result.isCancelled) {
                    ToastAndroid.show('Login cancelled', ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show('Login success with permissions: ' + result.grantedPermissions.toString(), ToastAndroid.SHORT);
                    //ToastAndroid.show('Login success with permissions:' ,ToastAndroid.SHORT);
                }
            },
            function (error) {
                ToastAndroid.show('Login fail with error: ' + error, ToastAndroid.SHORT);
            }
        );
    }

    _signIn() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log(user);
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }
    onSwipe = (index) => {
        console.log('index changed', index);
        if(index===1){
            this.setState({heading:"FIND EXACTLY WHAT YOU WANT",subHeading:"Gift Finder provides best offers and suggestions"});
        }else if(index===2){
            this.setState({heading:"SECURE & SMOOTH PAYMENTS",subHeading:"Multiple payment options"});
        }else if(index===0){
            this.setState({heading:"FIND THE PERFECT GIFTS EVERYTIME",subHeading:"15,599 Products, 3 Hrs Express Delivery"});
        }
    }

    ;
    render() {
        return (

            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:10}}>
                    <Image  source={require('../image/Icon.png')} resizeMode='contain'/>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:5}}>
                    <Text style={styles.head}>{this.state.heading}</Text>
                    <Text style={{fontSize: 16, color: "#666666", fontWeight: '400', fontFamily: 'Roboto'}}>{this.state.subHeading}</Text>
                </View>
                <View style={{flex: Platform.OS === 'ios' ? 10 : 10,alignItems:'center', alignSelf:'stretch',backgroundColor:'white',paddingVertical:5}}>
                    <ImageBackground  resizeMode="contain" source={require('../image/mobile-outline.png')} style={{flex:1,width:"100%",paddingTop:30}}>
                    <Swiper style={styles.wrapper}  onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                            dot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                            activeDot={<View style={{backgroundColor: '#e5e5e5',borderColor:"black",borderWidth:0.2, width: 8, borderRadius: 4, marginTop: 3, marginBottom: 3}} />}
                            paginationStyle={{bottom: 0,position:'absolute'
                            }} onIndexChanged={this.onSwipe}>
                        <View style={styles.slide} >
                            <Image  style={styles.image} source={require('../image/1-Intro.png')}/>
                        </View>
                        <View style={styles.slide} >
                            <Image  style={styles.image} source={require('../image/2-Intro.png')} />
                        </View>
                        <View style={styles.slide} >
                            <Image  style={styles.image} source={require('../image/3-Intro.png')} />
                        </View>
                    </Swiper>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, flexDirection: 'column', width: width, padding: 15,paddingBottom:3}}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#ff9212',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            maxHeight:45
                         }}
                        onPress={() => {
                            Actions.Login()
                        }}>
                        <Text style={{color: "white"}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.5, justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, color: "#666666"}}>OR LOGIN USING</Text>
                </View>
                <View
                    style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',alignSelf:'stretch',paddingRight:20,paddingLeft:20}}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 8,
                            flex:1,
                            height: Platform.OS === 'ios' ? 40 : 42,
                            marginRight: Platform.OS === 'ios' ? 20 : 25,
                            flexDirection: 'row',
                            backgroundColor: '#485a96',
                            borderWidth: .5,
                            borderColor: '#fff',
                            borderRadius: 5,
                        }}
                        onPress={this._fbAuth}>
                        <Image style={styles.ImageIconStyle1} resize='contain'
                               source={require('../image/fbLogo.png')}
                        />
                        <Text style={{
                            color: "#fff",
                            marginBottom: 4,
                            marginRight: 20,
                            paddingTop: 5,
                            fontWeight: "500"
                        }}>FACEBOOK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex:1,
                            backgroundColor: '#d83f33',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            marginTop: 8,

                            height: Platform.OS === 'ios' ? 40 : 40,
                            flexDirection: 'row',
                            borderColor: '#fff',
                        }}
                        onPress={this._signIn}>
                        <Image style={styles.ImageIconStyle2}
                               source={require('../image/google.png')}
                        />
                        <Text style={{color: "#fff", marginBottom: 4, marginRight: 40, paddingTop: 5}}>GOOGLE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>{
                        Actions.drawer({data:'home'})
                       //Actions.Homepage()
                        }
                        } style={{position: 'absolute',bottom: Platform.OS === 'ios' ? 4 : 10}}>
                    <Text style={{fontSize: 15, color: "#666666",  }}>SKIP</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

export {Intro}