import React, {Component} from 'react';
import {
    View, ScrollView, Text, Platform, TextInput, StyleSheet, Image,
    ToastAndroid, TouchableOpacity, Picker, Button, StatusBar, Dimensions
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class selectPopup extends Component {

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: '#ebeef3',
                flex: 1,
                height: height

            }}>
                <View >
                    <View style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        paddingTop:45,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            flex: 8
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                fontFamily:'Roboto'
                            }}>Select Order Delivery Date and Time</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            Actions.pop()
                        }}>
                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Ionicons name="ios-close" size={40}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{flexDirection: 'column', padding: 10}}>
                        <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 20, marginBottom: 10}}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icons name="circle" size={20} color="#999"/>
                            </View>
                            <View style={{
                                flex: 4,
                            }}>
                                <Text style={{fontWeight: '800', fontFamily:'Roboto'}}>5 DAYS SHIPPING</Text>
                                <Text style={{fontFamily:'Roboto'}}>Earlises Delivery: 22nd Dec</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9,
                                    borderBottomLeftRadius: 9,
                                    backgroundColor: 'red',
                                    height: 5,
                                    padding: 10,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        fontWeight: '500',
                                        justifyContent: 'center',
                                        fontFamily:'Roboto'
                                    }}>₹ 2298</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 20, marginBottom: 10}}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icons name="circle" size={20} color="#999"/>
                            </View>
                            <View style={{
                                flex: 4,
                            }}>
                                <Text style={{fontWeight: '800', fontFamily:'Roboto'}}>5 DAYS SHIPPING</Text>
                                <Text style={{fontFamily:'Roboto'}}>Earlises Delivery: 22nd Dec</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9,
                                    borderBottomLeftRadius: 9,
                                    backgroundColor: 'red',
                                    height: 5,
                                    padding: 10,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        fontWeight: '500',
                                        justifyContent: 'center',
                                        fontFamily:'Roboto'
                                    }}>₹ 2298</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 20, marginBottom: 10}}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icons name="circle" size={20} color="#999"/>
                            </View>
                            <View style={{
                                flex: 4,
                            }}>
                                <Text style={{fontWeight: '800', fontFamily:'Roboto'}}>5 DAYS SHIPPING</Text>
                                <Text style={{fontFamily:'Roboto'}}>Earlises Delivery: 22nd Dec</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9,
                                    borderBottomLeftRadius: 9,
                                    backgroundColor: 'red',
                                    height: 5,
                                    padding: 10,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        fontWeight: '500',
                                        justifyContent: 'center',
                                        fontFamily:'Roboto'
                                    }}>₹ 2298</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 20, marginBottom: 10}}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icons name="circle" size={20} color="#999"/>
                            </View>
                            <View style={{
                                flex: 4,
                            }}>
                                <Text style={{fontWeight: '800', fontFamily:'Roboto'}}>5 DAYS SHIPPING</Text>
                                <Text style={{fontFamily:'Roboto'}}>Earlises Delivery: 22nd Dec</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9,
                                    borderBottomLeftRadius: 9,
                                    backgroundColor: 'red',
                                    height: 5,
                                    padding: 10,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        fontWeight: '500',
                                        justifyContent: 'center',
                                        fontFamily:'Roboto'
                                    }}>₹ 2298</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#fff', flexDirection: 'row', padding: 20, marginBottom: 10}}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icons name="circle" size={20} color="#999"/>
                            </View>
                            <View style={{
                                flex: 4,
                            }}>
                                <Text style={{fontWeight: '800', fontFamily:'Roboto'}}>5 DAYS SHIPPING</Text>
                                <Text style={{fontFamily:'Roboto'}}>Earlises Delivery: 22nd Dec</Text>
                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderTopRightRadius: 9,
                                    borderBottomRightRadius: 9,
                                    borderBottomLeftRadius: 9,
                                    backgroundColor: 'red',
                                    height: 5,
                                    padding: 10,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        paddingTop: 0,
                                        paddingBottom: 1,
                                        fontWeight: '500',
                                        justifyContent: 'center',
                                        fontFamily:'Roboto'
                                    }}>₹ 2298</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export {selectPopup}