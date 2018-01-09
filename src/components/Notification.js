import React, {Component} from 'react';
import {
    View, ScrollView, Text, Platform, TextInput, StyleSheet, Image,
    ToastAndroid, TouchableOpacity, Picker, Button, StatusBar, Dimensions
} from 'react-native';
import IconsMaterial from 'react-native-vector-icons/MaterialIcons';
import IconsCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Tabs from 'react-native-tabs';
import {HeaderComponent} from './header';
import {MenuContext} from 'react-native-popup-menu';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3,
            page: 'second'
        }
    }

    render() {
        return (
            <MenuContext>
                <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#ebeef4'}}>
                    <HeaderComponent name='Notification' headerProps="active"/>
                    <ScrollView>
                        <View>
                            <View style={{
                                height: 150,
                                padding: 10,
                                flex: 1
                            }}>
                                <Image
                                    resizeMode='contain'

                                    style={{flexShrink: 1, width: null}}
                                    source={require('../image/banner-notification.png')}
                                />
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            margin: 5,
                            height: 110
                        }}>
                            <View style={{
                                flex: 1,
                                padding: 10,
                                justifyContent: 'flex-start',
                            }}>
                                <Image
                                    resizeMode='contain'

                                    style={{flexShrink: 1, flex: 1, width: null}}
                                    source={require('../image/flower-image.png')}
                                />
                            </View>
                            <View style={{
                                flex: 3,
                                padding: 5
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}>Happiness is on the way !</Text>
                                <Text style={{
                                    marginTop: 5,
                                    color: '#a9a9a9'
                                }}>Your Gift to Hardeep will be delivered today</Text>
                                <Text style={{
                                    marginTop: 15
                                }}>2 days ago</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            margin: 5,
                            height: 110
                        }}>
                            <View style={{
                                flex: 1,
                                padding: 10,
                                justifyContent: 'flex-start',
                            }}>
                                <Image
                                    resizeMode='contain'

                                    style={{flexShrink: 1, flex: 1, width: null}}
                                    source={require('../image/flower-image.png')}
                                />
                            </View>
                            <View style={{
                                flex: 3,
                                padding: 5
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}>Happiness is on the way !</Text>
                                <Text style={{
                                    marginTop: 5,
                                    color: '#a9a9a9'
                                }}>Your Gift to Hardeep will be delivered today</Text>
                                <Text style={{
                                    marginTop: 15
                                }}>2 days ago</Text>
                            </View>
                        </View>

                    </ScrollView>
                    <View>
                        <Tabs style={{
                            marginBottom: 100
                        }} selected={this.state.page}
                              style={{backgroundColor: 'white', paddingTop: 46, paddingBottom: 23}}
                              onSelect={el => this.setState({page: el.props.name})}>
                            <View name="first" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 10,
                                    padding: 6,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    borderRadius: 5,
                                    position: 'absolute',
                                    left: 20,
                                    top: -3,
                                    justifyContent: 'center',
                                    zIndex: 2
                                }}>
                                    <Text style={{
                                        fontSize: 11,
                                        color: '#fff'
                                    }}>₹ 599</Text>
                                </View>
                                <IconsMaterial name='account-balance-wallet' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10
                                }}>Wallet</Text>
                            </View>
                            <View name="second" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsMaterial name='card-giftcard' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10
                                }}>My Orders</Text>
                            </View>
                            <View name="third" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 10,
                                    padding: 6,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    borderRadius: 5,
                                    position: 'absolute',
                                    left: 32,
                                    top: -3,
                                    justifyContent: 'center',
                                    zIndex: 2
                                }}>
                                    <Text style={{
                                        fontSize: 11,
                                        color: '#fff'
                                    }}>5</Text>
                                </View>
                                <IconsMaterial name='notifications' color='#389c43' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    color: '#389c43'
                                }}>Notifications</Text>
                            </View>
                            <View name="fourth" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsCommunity name='account' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10
                                }}>My Account</Text>
                            </View>
                            <View name="fifth" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsMaterial name='help' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10
                                }}>Help</Text>
                            </View>
                        </Tabs>
                    </View>
                </View>
            </MenuContext>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
};
export {Notification}