import React, {Component} from 'react';
import {
    TextInput,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View, StyleSheet,
    Picker, Image, Dimensions, Platform, ScrollView
} from 'react-native';
import {HeaderComponent} from './header';
import { MenuContext } from 'react-native-popup-menu';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {Select, Option} from "react-native-chooser";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', password: ''};
        this._onPressButton = this._onPressButton.bind(this);
        this.state = {
            langauge: 'Java',
            value: "+91",
        };
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
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#ebeef3',
                        padding: 20,
                        height: height
                    }}>
                        <View>
                            <View style={[styles.text_hold]}>
                                <Text>Create FNP account</Text>
                            </View>
                            <View style={styles.mainHolder}>
                                <View>
                                    <TextInput underlineColorAndroid='transparent' placeholder="Name" style={{
                                        height: 50,
                                        borderRadius: 5,
                                        padding: 15,
                                        backgroundColor: '#fff',
                                        borderColor: 'gray',
                                        borderWidth: 1
                                    }}/>
                                </View>
                                <View style={styles.number_holder}>
                                    <View style={{flex: 1}}>
                                        <Select
                                            defaultText={this.state.value}
                                            indicator={'down'}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: 'gray',
                                                borderRadius: 5,
                                                padding: 15,
                                                width: Platform.OS === 'ios' ? 80 : 80,
                                                paddingTop: 15,
                                                backgroundColor: '#fff',
                                            }}
                                            textStyle={{}}
                                            backdropStyle={{backgroundColor: "rgba(192,192,192,0.3)"}}
                                            optionListStyle={{backgroundColor: "#F5FCFF"}}
                                        >
                                            <Option value={{name: "+92"}}>+92</Option>
                                            <Option value="+93">+93</Option>
                                            <Option value="+94">+94</Option>
                                            <Option value="+95">+95</Option>
                                            <Option value="+96">+96</Option>
                                            <Option value="+97">+97</Option>
                                            <Option value="+98">+98</Option>
                                            <Option value="+99">+99</Option>
                                            <Option value="+88">+88</Option>

                                        </Select>
                                    </View>
                                    <TextInput underlineColorAndroid='transparent' placeholder="Mobile no" style={{
                                        height: 50,
                                        borderRadius: 5,
                                        flex: 2,
                                        paddingLeft: 15,
                                        backgroundColor: '#fff',
                                        borderColor: 'gray',
                                        marginLeft: 10,
                                        borderWidth: 1
                                    }}/>
                                </View>
                                <View style={styles.email}>
                                    <TextInput underlineColorAndroid='transparent' placeholder="Email" style={{
                                        height: 50,
                                        borderRadius: 5,
                                        paddingLeft: 15,
                                        backgroundColor: '#fff',
                                        borderColor: 'gray',
                                        borderWidth: 1
                                    }}/>
                                </View>
                                <View style={styles.email}>
                                    <TextInput underlineColorAndroid='transparent' placeholder="* Create password"
                                               style={{
                                                   height: 50,
                                                   borderRadius: 5,
                                                   paddingLeft: 15,
                                                   backgroundColor: '#fff',
                                                   borderColor: 'gray',
                                                   borderWidth: 1
                                               }}/>
                                </View>
                                <View style={{marginTop: 10, marginBottom: 20}}>
                                    <Text style={{color: '#999999'}}>
                                        At least 6 characters and number
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#ff9212',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                        height:45,
                                        borderRadius: 4,
                                    }}>
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: 20
                                        }}>REGISTER</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 20
                                }}>
                                    <Text style={{color: '#666666', fontSize: 16}}>Existing user?</Text>
                                    <Text style={{
                                        color: '#2179d0',
                                        marginLeft: 10,
                                        fontSize: 18,
                                        fontWeight: '700'
                                    }}>LOGIN</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 10,
                                    marginBottom: 10
                                }}>
                                    <Text style={{
                                        color: '#666666',
                                    }}>OR REGISTER USING</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    alignSelf: 'stretch',
                                    maxHeight: 45
                                }}>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#4f6db1',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            width: 150,
                                            borderRadius: 4,
                                            padding: 12
                                        }}
                                        onPress={this._fbAuth}>
                                        <Image style={[styles.ImageIconStyle1, {marginRight: 5, height: 15}]}
                                               source={require('../image/fbLogo.png')}
                                               resizeMode='center'/>
                                        <Text style={styles.whiteFont}>FACEBOOK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#d80c14',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 150,
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
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    number_holder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    email: {
        marginTop: 13
    },
    mainHolder: {
        backgroundColor: '#fff',
        padding: 20,
        paddingBottom: 30,
        shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2

    },
    socialHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ImageIconStyle1: {

        height: 20,
        width: 10,
        marginRight: 10,
        marginLeft: 25

    },
    ImageIconStyle2: {
        height: 17,
        width: 30,
        marginRight: 7,
        marginLeft: 25
    },
    whiteFont:
        {
            color: '#ffffff',
            marginLeft: 10
        },
    text_hold: {
        fontSize: 10,
        marginBottom: 10
    }
});
export {Registration};

