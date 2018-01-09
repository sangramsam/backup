import React from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput, Platform
} from 'react-native';

import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {HeaderComponent} from './header';
import {MenuContext} from 'react-native-popup-menu';

const homePlace = {description: 'Home', geometry: {location: {lat: 48.8152937, lng: 2.4597668}}};
const workPlace = {description: 'Work', geometry: {location: {lat: 48.8496818, lng: 2.2940881}}};

class Location extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
        };
    }

    render() {
        return (
            <MenuContext>
                    <HeaderComponent name='Deliver to'/>
                        <View style={styles.wrapper}>
                            <View style={{flex:0.4,alignSelf:'stretch',paddingTop:5,borderBottomColor:'green',borderBottomWidth:2}}>
                                <TextInput
                                    style={{
                                      height:50,
                                    }}
                                    placeholder="* Enter pin code or location" underlineColorAndroid='transparent' p
                                />
                            </View>
                            <View style={{flex:0.2,justifyContent:'flex-start'}}>
                                    <Text style={{color:'black',fontSize:14,fontFamily:'Roboto'}}>Example For pincode type: 803107 or city name</Text>
                            </View>
                            <View style={{flex:0.2,backgroundColor:'#ff9212',alignSelf:'stretch',justifyContent:'center',padding:10,borderRadius:5,alignItems:'center'}}>
                                <TouchableOpacity>
                                    <Text style={{color:'white',fontWeight:'bold',fontSize:14,fontFamily:'Roboto'}}>SELECT DELIVERY DATE/TIME</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

            </MenuContext>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 20,
        flexDirection:'column',
        height:200
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: 300
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {
        color: "black",
        fontSize: 22
    }

});
export {Location}