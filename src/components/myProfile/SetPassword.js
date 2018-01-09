import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    View, StyleSheet, Dimensions, ScrollView, Platform
} from 'react-native';
import {HeaderComponent} from '../header';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {MenuContext} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

class SetPasswords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    componentWillMount() {

    }

    _onPressButton() {

    }

    render() {
        return (
            <MenuContext>
                <HeaderComponent name='Set new password'/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{
                            flexDirection: 'column',
                            width: 350,
                            flex:1,
                            maxHeight:150,
                            backgroundColor: '#fff',
                            borderRadius: 4,
                            shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 2, position: 'relative'
                        }}>
                            <View style={{ flex: 1, marginBottom:20}}>
                                <TextInput
                                    style={{
                                        height: 50,
                                        paddingLeft: 10,
                                        borderTopLeftRadius: 2,
                                        backgroundColor: 'white',
                                        fontSize:20,
                                        borderColor: 'black',
                                        borderBottomWidth: Platform.OS === 'ios' ? 1 : 1
                                    }}
                                    placeholder="Enter Password" underlineColorAndroid='black'
                                    placeholderTextColor="black"
                                />
                                <Image resizeMode='contain' source={require('../../image/eye.png')} style={{
                                    position: 'absolute',
                                    top: Platform.OS === 'ios' ? '15%' : '10%',
                                    right:5,
                                    height:30,width:30
                                }}/>
                            </View>
                            <View style={{flex: 1,}}>
                                <TextInput
                                    style={{
                                        height: 50,
                                        paddingLeft: 10,
                                        backgroundColor: 'white',
                                        color:"black",
                                        fontSize:20,
                                        borderColor: 'black',
                                        borderBottomWidth: Platform.OS === 'ios' ? 0.5 : null
                                    }}
                                    placeholder="Re-enter Password" placeholderTextColor="black" underlineColorAndroid='black'

                                />
                                <Image resizeMode='contain' source={require('../../image/eye.png')} style={{
                                    position: 'absolute',
                                    top: Platform.OS === 'ios' ? '15%' : '10%',
                                    right:5,
                                    height:30,width:30
                                }}/>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: 350,
                            marginTop: 20
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#ff9212',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 4,
                                    height: 40
                                }}>
                                <Text style={[styles.whiteFont]}>SAVE PASSWORD</Text>
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
        padding: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: height,
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
            flex: 1.5, justifyContent: 'flex-start', alignItems: 'flex-start'
        }


});
export {SetPasswords};