import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,ScrollView,
    View, StyleSheet, Dimensions, Platform
} from 'react-native';
import { MenuContext } from 'react-native-popup-menu';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {HeaderComponent} from './header';
const {width} = Dimensions.get('screen');

class LoginWithoutPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    render() {
        return (
            <MenuContext>
            <View style={styles.container}>
                <View style={{width:width,height:60}}>
                <HeaderComponent name="Login without password" headerProps='notactive'/>
                </View>
                <View style={{flex:1,marginTop:30}}>
                    <View>
                        <Text style={{textAlign:"center",fontSize:20,color:"black"}}>Enter the OTP sent to</Text>
                        <Text style={{textAlign:"center",fontSize:15,color:"#5fc068"}}>xxxxxxxxxxxngh@fnp.com and XXXXXX7202</Text>
                    </View>
                    <View style={{ height:60,paddingTop:12,flexDirection: 'row', justifyContent: 'space-around'}} >
                        <View style={{}}>
                            <TextInput
                                ref={'textInput'}
                                type={'TextInput'}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                style={[styles.textInput, styles.textStyles]}
                                returnKeyType='go'
                                placeholderTextColor={brandColor}
                                selectionColor={brandColor}
                                maxLength={1}
                            />
                        </View>
                        <View style={{}}>
                            <TextInput
                                ref={'textInput'}
                                type={'TextInput'}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                style={[styles.textInput, styles.textStyles]}
                                returnKeyType='go'
                                placeholderTextColor={brandColor}
                                selectionColor={brandColor}
                                maxLength={1}
                            />
                        </View>
                        <View style={{}}>
                            <TextInput
                                ref={'textInput'}
                                type={'TextInput'}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                style={[styles.textInput, styles.textStyles]}
                                returnKeyType='go'
                                placeholderTextColor={brandColor}
                                selectionColor={brandColor}
                                maxLength={1}
                            />
                        </View>
                        <View style={{}}>
                            <TextInput
                                ref={'textInput'}
                                type={'TextInput'}
                                underlineColorAndroid={'transparent'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                style={[styles.textInput, styles.textStyles]}
                                returnKeyType='go'
                                placeholderTextColor={brandColor}
                                selectionColor={brandColor}
                                maxLength={1}
                            />
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',width:350}}>
                            <TouchableOpacity
                                style={{
                                backgroundColor: '#ff9212',
                                    borderRadius: 2,
                                    marginTop:20,
                                    flex:1,
                                    height:50
                                }}>
                                <Text style={styles.textStyle}>VERIFY</Text>
                            </TouchableOpacity>
                    </View>


                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',width:350}}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ff9212',
                                borderRadius: 2,
                                marginTop:20,
                                flex:1,
                                height:50
                            }} onPress={()=>{Actions.SetPassword()}}>
                            <Text style={styles.textStyle}>After Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </MenuContext>
        );
    }
}

const brandColor = '#744BAC';
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
        fontWeight: "500",
        textAlign: 'center',
        alignItems:"center",
        fontSize: 20,
        marginTop:8
    },
    textStyles: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        width: 40,
        padding: 0,
        margin: 0,
        fontSize: 20,
        color: "#744BAC",
        fontFamily: 'Roboto',
        borderBottomWidth: 1.5,
        borderBottomColor: "black"
    },

});
export {LoginWithoutPassword};