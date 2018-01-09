import React, {Component} from 'react';
import {
    View, ScrollView, Text, Platform, TextInput, StyleSheet, Image,
    ToastAndroid, TouchableOpacity, Picker, Button, StatusBar, Dimensions
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class Varinant extends Component {

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: '#ebeef3',
                flex: 1,
                height: height

            }}>
                <View>
                    <View style={{
                        backgroundColor: '#fff',
                        padding: 20,
                        paddingTop:Platform.OS==='ios'?30:20,
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
                            }}>Select Order Delivery Date and Time</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            Actions.pop()
                        }}>
                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                                marginTop:5
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
                                flex: 6
                            }}>
                                <Text style={{fontWeight: '800',color:'#222'}}>SMALL</Text>
                                <Text style={{fontFamily:'Roboto',fontSize:15,color:'#999'}}>The Sweet Surprises Standard</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{
                                            color: '#e53333',
                                            paddingTop: 4,
                                            fontSize:28,
                                            fontWeight: '500',
                                            justifyContent:'flex-end',
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'white'}}>
                                        <Text style={{
                                            color: '#666',
                                            textDecorationLine: 'line-through',
                                            paddingTop: 0,
                                            fontSize:15,
                                            fontWeight: '500',
                                            marginTop:13
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{
                                            color: '#009d43',
                                            paddingTop: 0,
                                            fontSize:20,
                                            fontWeight: '500',
                                        }}>10% Off</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
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
                                flex: 6
                            }}>
                                <Text style={{fontWeight: '800',color:'#222'}}>SMALL</Text>
                                <Text style={{fontFamily:'Roboto',fontSize:15,color:'#999'}}>The Sweet Surprises Standard</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{
                                            color: '#e53333',
                                            paddingTop: 4,
                                            fontSize:28,
                                            fontWeight: '500',
                                            justifyContent:'flex-end',
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'white'}}>
                                        <Text style={{
                                            color: '#666',
                                            textDecorationLine: 'line-through',
                                            paddingTop: 0,
                                            fontSize:15,
                                            fontWeight: '500',
                                            marginTop:13
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{
                                            color: '#009d43',
                                            paddingTop: 0,
                                            fontSize:20,
                                            fontWeight: '500',
                                        }}>10% Off</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
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
                                flex: 6
                            }}>
                                <Text style={{fontWeight: '800',color:'#222'}}>SMALL</Text>
                                <Text style={{fontFamily:'Roboto',fontSize:15,color:'#999'}}>The Sweet Surprises Standard</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{
                                            color: '#e53333',
                                            paddingTop: 4,
                                            fontSize:28,
                                            fontWeight: '500',
                                            justifyContent:'flex-end',
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'white'}}>
                                        <Text style={{
                                            color: '#666',
                                            textDecorationLine: 'line-through',
                                            paddingTop: 0,
                                            fontSize:15,
                                            fontWeight: '500',
                                            marginTop:13
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{
                                            color: '#009d43',
                                            paddingTop: 0,
                                            fontSize:20,
                                            fontWeight: '500',
                                        }}>10% Off</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
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
                                flex: 6
                            }}>
                                <Text style={{fontWeight: '800',color:'#222'}}>SMALL</Text>
                                <Text style={{fontFamily:'Roboto',fontSize:15,color:'#999'}}>The Sweet Surprises Standard</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{
                                            color: '#e53333',
                                            paddingTop: 4,
                                            fontSize:28,
                                            fontWeight: '500',
                                            justifyContent:'flex-end',
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'white'}}>
                                        <Text style={{
                                            color: '#666',
                                            textDecorationLine: 'line-through',
                                            paddingTop: 0,
                                            fontSize:15,
                                            fontWeight: '500',
                                            marginTop:13
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{
                                            color: '#009d43',
                                            paddingTop: 0,
                                            fontSize:20,
                                            fontWeight: '500',
                                        }}>10% Off</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flex: 2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
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
                                flex: 6
                            }}>
                                <Text style={{fontWeight: '800',color:'#222'}}>SMALL</Text>
                                <Text style={{fontFamily:'Roboto',fontSize:15,color:'#999'}}>The Sweet Surprises Standard</Text>
                                <View style={{flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{
                                            color: '#e53333',
                                            paddingTop: 4,
                                            fontSize:28,
                                            fontWeight: '500',
                                            justifyContent:'flex-end',
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:0.5,justifyContent:'center',backgroundColor:'white'}}>
                                        <Text style={{
                                            color: '#666',
                                            textDecorationLine: 'line-through',
                                            paddingTop: 0,
                                            fontSize:15,
                                            fontWeight: '500',
                                            marginTop:13
                                        }}>₹ 229</Text>
                                    </View>
                                    <View style={{flex:1,justifyContent:'flex-end'}}>
                                        <Text style={{
                                            color: '#009d43',
                                            paddingTop: 0,
                                            fontSize:20,
                                            fontWeight: '500',
                                        }}>10% Off</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export {Varinant}