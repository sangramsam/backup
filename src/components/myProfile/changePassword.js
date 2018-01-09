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

class ChangePassword extends React.Component {
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
                <HeaderComponent name='Change Password'/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{
                            flexDirection: 'column',
                            width: 350,
                            flex:1,
                            maxHeight:250,
                            backgroundColor: '#fff',
                            borderRadius: 4,
                            shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 2, position: 'relative'
                        }}>
                            <View style={{ flex: 1,}}>
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
                                    placeholder="Current Password" underlineColorAndroid='black'
                                    placeholderTextColor="black"
                                />
                                <Image resizeMode='contain' source={require('../../image/eye.png')} style={{
                                    position: 'absolute',
                                    top: Platform.OS === 'ios' ? '15%' : '10%',
                                    right:0,
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
                                    placeholder="New Password" placeholderTextColor="black" underlineColorAndroid='black'

                                />
                                <Image resizeMode='contain' source={require('../../image/eye.png')} style={{
                                    position: 'absolute',
                                    top: Platform.OS === 'ios' ? '15%' : '10%',
                                    right:0,
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
                                    placeholder="Retype New Password" placeholderTextColor="black" underlineColorAndroid='black'
                                />
                                <Image resizeMode='contain' source={require('../../image/eye.png')} style={{
                                    position: 'absolute',
                                    top: Platform.OS === 'ios' ? '15%' : '10%',
                                    right:0,
                                    height:30,width:30
                                }}/>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: 350,
                            marginTop: 30
                        }}>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#666666',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 4,
                                        height: 50,
                                        width:150
                                    }}>
                                    <Text style={[styles.whiteFont]}>CANCEL</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#ff8f34',
                                        boxShadow: "0 8 12 rgba(0, 0, 0, 0.15)",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 4,
                                        height: 50,
                                        width:150
                                    }}>
                                    <Text style={[styles.whiteFont]}>SAVE</Text>
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
            fontSize:20,
            fontWeight:'bold'

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
export {ChangePassword};