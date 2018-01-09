import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    View, StyleSheet, Dimensions, ScrollView, Platform
} from 'react-native';
import {HeaderComponent} from './header';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
import { MenuContext } from 'react-native-popup-menu';
import Modal from 'react-native-modal';
class SetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }
    componentWillMount(){

    }

    _onPressButton() {

    }
    _showModal = () => this.setState({ isModalVisible: true });

    _hideModal = () => this.setState({ isModalVisible: false });
    render() {
        return (
            <MenuContext>
            <ScrollView>
                <HeaderComponent name='Set new password' headerProps='notactive'/>
                <View style={styles.container}>
                    <View style={{justifyContent: 'center',alignItems:"center",height:40}}>
                        <Text>Set new password for future convenience </Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: 350,
                        height: 100,
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.8,
                        shadowRadius: 2
                    }}>
                        <TextInput
                            style={{
                                flex: 1,
                                borderColor: '#eee',
                                borderBottomWidth:Platform.OS === 'ios' ? 2 : 1,
                                paddingLeft: 10,
                                marginBottom: 0,
                                borderBottom: 0,
                                borderTopLeftRadius: 2

                            }}
                            placeholder="Email Id" underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setState({text})} onBlur={() => this.onBlur()}
                            onFocus={() => this.onFocus()}
                        />
                        <TextInput
                            style={{
                                flex: 1,
                                paddingLeft: 10,
                                borderBottom: 0,
                            }}
                            placeholder="Ferns N Petals Password"
                            onChangeText={(password) => this.setState({password})} onBlur={() => this.onBlur()}

                        />
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
                                height:40
                            }}>
                            <Text style={[styles.whiteFont]}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 4,
                                marginTop:10,
                                height:40,
                                borderWidth:1,
                                borderColor:"#666666",
                            }}
                            onPress={this._onPressButton}>

                            <Text style={[styles.whiteFont]} style={{color:"black"}}>SKIP</Text>
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
        backgroundColor: '#eee',
        height:height,
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
            flex:1.5 , justifyContent: 'flex-start', alignItems: 'flex-start'
        }


});
export {SetPassword};