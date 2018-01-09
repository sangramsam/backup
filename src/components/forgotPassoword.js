import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    View, StyleSheet, Dimensions,ScrollView
} from 'react-native';
import {HeaderComponent} from './header';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
const { width } = Dimensions.get('screen');
import Modal from 'react-native-modal';
import { MenuContext } from 'react-native-popup-menu';
class Forgot extends React.Component {
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
            <View style={styles.container}>
                <View style={{width:width,height:60}}>
                    <HeaderComponent name='Forgot Password' headerProps='notactive'/>
                </View>
                <View style={{flexDirection: 'column',marginTop:20}}>
                <View style={{}}>
                    <Text>Enter your email id to recieve new password</Text>
                </View>
                <TextInput
                    style={{
                        width: 350,
                        borderColor: 'white',
                        backgroundColor:"white",
                        borderWidth: 1,
                        borderRadius:4,
                        padding: 20,
                        marginTop:10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginBottom: 0,
                        borderBottom: 0,
                        borderTopLeftRadius:2
                    }}
                    placeholder="Email ID" underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({text})} onBlur={() => this.onBlur()}
                    onFocus={() => this.onFocus()}
                />
                    <View style={{height:60,  width: 350}}>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#ff9212',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop:10,
                            borderRadius:2
                        }}
                        onPress={this._showModal}>
                        <Text style={styles.textStyle}>SEND NEW PASSWORD</Text>
                    </TouchableOpacity></View>
                </View>
                <Modal isVisible={this.state.isModalVisible} style={{position:'absolute',bottom:-20,left:-20,right:-20,backgroundColor:'rgba(0,0,0,0.3)',flexDirection:'column'}}>
                    <View style={{backgroundColor:'white',justifyContent:"flex-end",padding:10,paddingBottom:20}}>
                        <View style={{alignItems:"center"}}>
                            <Image
                                source={require('../image/tick.png')} resizeMode='center'
                            />
                        </View>
                        <View style={{alignItems:"center"}}>
                            <Text style={{color:'#000',fontSize:20,width:230}}>New Password is sent to</Text>
                            <Text style={{color:'#000',fontSize:20,width:400,marginLeft:20}}>your registered Email ID & phone number</Text>
                        </View>

                    </View>
                </Modal>
                </View>
            </MenuContext>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ebeef3',
        height:700
    },
    welcome: {
        fontSize: 20,
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
    textStyle: {
        color: 'white',
        fontWeight:"500",
        fontSize:17
    },

});
export {Forgot};