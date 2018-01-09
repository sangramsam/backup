import React, {Component} from 'react';
import {
    Image,
    TextInput,
    ScrollView,
    FlatList,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-checkbox';
import {HeaderComponent} from './header';
import {MenuContext} from 'react-native-popup-menu';
import PropTypes from 'prop-types';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            enable: false
        }
    }

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    render() {
        const ADDRESS = () => {
            return (<View style={{
                flex: 1,
                flexDirection: 'row',
                minHeight: 70,
                paddingTop: 15,
                paddingLeft: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#CDCDCD',
                paddingBottom: 15,
                paddingRight: 20
            }}>
                <View style={{flex: 3, alignItems: 'flex-start'}}><Text
                    style={{fontSize: 15, fontWeight: '400'}}>ADDRESS</Text></View>
                <View style={{flex: 5, alignItems: 'center', backgroundColor: 'pink'}}>
                    <TouchableOpacity
                        style={{flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f19215'}}
                        onPress={() => {
                            this.setState({enable: true})
                        }}>
                        <Text style={{
                            flex: 1,
                            color: '#fff',
                            textAlign: 'center',
                            paddingTop: 0,
                            fontWeight: '900',
                            fontSize: 18
                        }}>ADDRESS</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                    name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
            </View>);
        }
        return (
            <MenuContext>
                <View style={{flex: 1, height: HEIGHT}}>
                    <HeaderComponent name='Order'/>
                    <ScrollView>
                        <View style={{flex: 1, marginBottom: 50}}>

                            <View style={{flex: 1, flexDirection: 'column', position: 'relative', marginTop: 2, backgroundColor:'#fff', paddingTop:10}}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    width: 72,
                                    backgroundColor: '#00AB44',
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                    padding: 5,
                                    marginLeft: 20,





                                }}>
                                    <View style={{flex: 1}}>
                                        <Icon name="card-giftcard" size={20} color='#fff'/>
                                    </View>
                                    <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                        <Text style={{color: '#fff'}}>GIFT1</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flex: 1,

                                    minHeight: 520,
                                    borderTopColor: '#CDCDCD',
                                    borderTopWidth: 1,
                                    borderBottomColor: '#CDCDCD',
                                    borderBottomWidth: 1,
                                    backgroundColor:'#fff',


                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        maxHeight: 90,
                                        borderBottomWidth: 2,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingTop:10,
                                        paddingRight: 20,
                                        backgroundColor:'#f8f8f8'



                                    }}>

                                        <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'flex-end'}}>
                                            <Image source={require('../image/engimatic.jpg')} resizeMode='contain'
                                                   style={{width: 100, height: 70}}/>
                                        </View>
                                        <View style={{flex: 3, flexDirection: 'column'}}>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Engimatic 8 Red Roses</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Small</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Qty 1</Text>
                                            </View>


                                        </View>
                                        <View style={{flex: 1}}>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{color: '#EF000F'}}>₹ 599</Text>
                                            </View>

                                        </View>

                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 100,
                                        paddingTop: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 3, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>DELIVERY DATE</Text></View>
                                        <View style={{flex: 3}}>
                                            <View style={{flex: 1}}><Text style={{fontSize: 15, fontWeight: '500'}}>2
                                                OCT,2017</Text></View>
                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13}}>Midnight
                                                Delivery</Text>
                                                <Text style={{fontSize: 13}}>11:00 PM -11:59 PM</Text></View></View>
                                        <View style={{flex: 1}}><Text style={{
                                            padding: 4,
                                            paddingLeft: 5,
                                            borderRadius: 20,
                                            color: '#fff',
                                            width:50,
                                            backgroundColor: '#EF000F',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>₹ 250</Text></View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                                            name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 100,
                                        paddingTop: 15,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>ADDRESS</Text></View>
                                        <View style={{flex: 2}}>

                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13}}>Sumit Gupta
                                                (9415345312)</Text>
                                                <Text style={{fontSize: 13, width: 156}}>252, JG-3 , VikasPuri , New
                                                    Delhi,Delhi 110018,India</Text></View></View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 80,
                                        paddingTop: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 3, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>MESSAGE CARD</Text></View>
                                        <View style={{flex: 3}}>

                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13, fontWeight: '300'}}>Use
                                                template or</Text>
                                                <Text style={{fontSize: 13, fontWeight: '300'}}>write your
                                                    own</Text></View></View>
                                        <View style={{flex: 1}}><Text style={{
                                            padding: 4,
                                            paddingLeft: 10,
                                            borderRadius: 20,
                                            color: '#fff',
                                            backgroundColor: '#00AB44',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>Free</Text></View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                                            name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
                                    </View>

                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 140,
                                        paddingTop: 20,
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 1.1, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}></Text></View>
                                        <View style={{flex: 1.9, flexDirection: 'column'}}>

                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <View style={{flex: 1}}><Text>Subtotal</Text></View>
                                                <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹
                                                    599</Text></View>
                                            </View>

                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItem: 'flex-start',
                                                marginBottom: 10
                                            }}>
                                                <View style={{flex: 1}}><Text>Shipping</Text></View>
                                                <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹
                                                    250</Text></View>
                                            </View>
                                            <View style={{flex: 1.5, minHeight: 30}}>
                                                <View style={{
                                                    flex: 2,
                                                    flexDirection: 'row',
                                                    borderTopColor: '#CDCDCD',
                                                    borderTopWidth: 1
                                                }}>
                                                    <View style={{
                                                        flex: 0.9,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'flex-end'
                                                    }}><Text
                                                        style={{fontSize: 16, fontWeight: '500'}}>TOTAL</Text></View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'flex-end'
                                                    }}><Text style={{color: '#EF000F', fontSize: 16}}>₹
                                                        360</Text></View>
                                                </View>
                                                <View style={{flex: 1, alignItems: 'flex-start'}}><Text
                                                    style={{fontSize: 12}}>pay now and earn <Text
                                                    style={{color: '#EF000F'}}>₹ 84 FNP Cash</Text></Text></View>
                                            </View>
                                        </View>

                                    </View>


                                </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'column', position: 'relative', marginTop: 20}}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    width: 72,
                                    backgroundColor: '#00AB44',
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                    padding: 5,
                                    marginLeft: 20
                                }}>
                                    <View style={{flex: 1}}>
                                        <Icon name="card-giftcard" size={20} color='#fff'/>
                                    </View>
                                    <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                        <Text style={{color: '#fff'}}>GIFT1</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flex: 1,
                                    paddingTop: 10,
                                    minHeight: 520,
                                    borderTopColor: '#CDCDCD',
                                    borderTopWidth: 1,
                                    borderBottomColor: '#CDCDCD',
                                    borderBottomWidth: 1
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        maxHeight: 90,
                                        borderBottomWidth: 2,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        backgroundColor: '#F8F8F8',
                                        paddingRight: 20
                                    }}>

                                        <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'flex-end'}}>
                                            <Image source={require('../image/engimatic.jpg')} resizeMode='center'
                                                   style={{width: 100, height: 70}}/>
                                        </View>
                                        <View style={{flex: 3, flexDirection: 'column'}}>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Engimatic 8 Red Roses</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Small</Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text>Qty 1</Text>
                                            </View>


                                        </View>
                                        <View style={{flex: 1}}>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{color: '#EF000F'}}>₹ 599</Text>
                                            </View>

                                        </View>

                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 100,
                                        paddingTop: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 3, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>DELIVERY DATE</Text></View>
                                        <View style={{flex: 3}}>
                                            <View style={{flex: 1}}><Text style={{fontSize: 15, fontWeight: '500'}}>2
                                                OCT,2017</Text></View>
                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13}}>Midnight
                                                Delivery</Text>
                                                <Text style={{fontSize: 13}}>11:00 PM -11:59 PM</Text></View></View>
                                        <View style={{flex: 1.2}}><Text style={{
                                            padding: 4,
                                            paddingLeft: 5,
                                            borderRadius: 20,
                                            color: '#fff',
                                            backgroundColor: '#EF000F',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>₹ 2500</Text></View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                                            name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
                                    </View>
                                    {this.state.enable ? <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 100,
                                        paddingTop: 15,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>ADDRESS</Text></View>
                                        <View style={{flex: 2}}>

                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13}}>Sumit Gupta
                                                (9415345312)</Text>
                                                <Text style={{fontSize: 13, width: 156}}>252, JG-3 , VikasPuri , New
                                                    Delhi,Delhi 110018,India</Text></View></View>
                                    </View> : <ADDRESS/>}

                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 80,
                                        paddingTop: 20,
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#CDCDCD',
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 3, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}>MESSAGE CARD</Text></View>
                                        <View style={{flex: 3}}>

                                            <View style={{flex: 1.5}}><Text style={{fontSize: 13, fontWeight: '300'}}>Use
                                                template or</Text>
                                                <Text style={{fontSize: 13, fontWeight: '300'}}>write your
                                                    own</Text></View></View>
                                        <View style={{flex: 1}}><Text style={{
                                            padding: 4,
                                            paddingLeft: 10,
                                            borderRadius: 20,
                                            color: '#fff',
                                            backgroundColor: '#00AB44',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>Free</Text></View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                                            name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
                                    </View>


                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        minHeight: 140,
                                        paddingTop: 20,
                                        paddingBottom: 10,
                                        paddingRight: 20
                                    }}>
                                        <View style={{flex: 1.1, alignItems: 'center'}}><Text
                                            style={{fontSize: 15, fontWeight: '400'}}></Text></View>
                                        <View style={{flex: 1.9, flexDirection: 'column'}}>

                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <View style={{flex: 1}}><Text>Subtotal</Text></View>
                                                <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹
                                                    599</Text></View>
                                            </View>

                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                alignItem: 'flex-start',
                                                marginBottom: 10
                                            }}>
                                                <View style={{flex: 1}}><Text>Shipping</Text></View>
                                                <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹
                                                    250</Text></View>
                                            </View>
                                            <View style={{flex: 1.5, minHeight: 30}}>
                                                <View style={{
                                                    flex: 2,
                                                    flexDirection: 'row',
                                                    borderTopColor: '#CDCDCD',
                                                    borderTopWidth: 1
                                                }}>
                                                    <View style={{
                                                        flex: 0.9,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'flex-end'
                                                    }}><Text
                                                        style={{fontSize: 16, fontWeight: '500'}}>TOTAL</Text></View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'flex-end'
                                                    }}><Text style={{color: '#EF000F', fontSize: 16}}>₹
                                                        360</Text></View>
                                                </View>
                                                <View style={{flex: 1, alignItems: 'flex-start'}}><Text
                                                    style={{fontSize: 12}}>pay now and earn <Text
                                                    style={{color: '#EF000F'}}>₹ 84 FNP Cash</Text></Text></View>
                                            </View>
                                        </View>

                                    </View>


                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                minHeight: 140,
                                paddingTop: 20,
                                paddingBottom: 10,
                                paddingRight: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: '#CDCDCD'
                            }}>
                                <View style={{flex: 1.1, alignItems: 'center'}}><Text
                                    style={{fontSize: 15, fontWeight: '400'}}>Summary</Text></View>
                                <View style={{flex: 1.9, flexDirection: 'column'}}>

                                    <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                                        <View style={{flex: 1}}><Text>Subtotal</Text></View>
                                        <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹ 599</Text></View>
                                    </View>

                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItem: 'flex-start',
                                        marginBottom: 10
                                    }}>
                                        <View style={{flex: 1}}><Text>Discount</Text></View>
                                        <View style={{flex: 1, alignItems: 'flex-end'}}><Text>- ₹ 254</Text></View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItem: 'flex-start',
                                        marginBottom: 20
                                    }}>
                                        <View style={{flex: 1}}><Text>Shipping</Text></View>
                                        <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹ 250</Text></View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignItem: 'flex-start',
                                        marginBottom: 20,
                                        marginLeft: -25
                                    }}>
                                        <View style={{flex: 2}}><CheckBox
                                            label='Use FNP Cash from Wallet '
                                            labelStyle={{fontSize: 12}}

                                            checkboxStyle={{
                                                height: 15,
                                                width: 15,
                                                backgroundColor: 'orange',
                                                borderColor: 'orange',
                                                borderWidth: 1
                                            }}
                                            onChange={(checked) => console.log('I am checked', checked)}

                                        /></View>
                                        <View style={{flex: 1, alignItems: 'flex-end'}}><Text>₹ 250</Text></View>
                                    </View>
                                    <View style={{
                                        flex: 1.5,
                                        minHeight: 60,
                                        borderTopColor: '#CDCDCD',
                                        borderTopWidth: 1,
                                        borderBottomWidth: 1,
                                        paddingBottom: 10,
                                        borderBottomColor: '#CDCDCD'
                                    }}>
                                        <View style={{flex: 2, flexDirection: 'row'}}>
                                            <View style={{
                                                flex: 0.9,
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-end'
                                            }}><Text style={{fontSize: 16, fontWeight: '500'}}>GRAND TOTAL</Text></View>
                                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}><Text
                                                style={{color: '#EF000F', fontSize: 16}}>₹ 360</Text></View>
                                        </View>
                                        <View style={{flex: 1, alignItems: 'flex-start'}}><Text style={{fontSize: 12}}>pay
                                            now and earn <Text style={{color: '#EF000F'}}>₹ 84 FNP
                                                Cash</Text></Text></View>

                                    </View>
                                    <View style={{flex: 1, minHeight: 100, flexDirection: 'row'}}>
                                        <View style={{flex: 1.2}}>
                                            <View style={{flex: 1, justifyContent: 'center'}}><Text>Coupon
                                                Code</Text></View>
                                            <View style={{flex: 1}}><TextInput underlineColorAndroid='transparent'
                                                                               style={{
                                                                                   borderColor: '#eee',
                                                                                   borderWidth: 1
                                                                               }}/></View>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                            <View style={{flex: 3}}></View>
                                            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}><View
                                                style={{
                                                    flex: 1,
                                                    justifyContent: 'flex-end',
                                                    alignItems: 'flex-end'
                                                }}><Icon name='check' size={15} color='#45CC92'/></View>
                                                <View style={{flex: 1.2, alignItems: 'flex-end', paddingLeft: 7}}><Text
                                                    style={{fontSize: 10, color: '#45CC92'}}>10% verified
                                                    approved</Text></View></View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                minHeight: 60,
                                paddingTop: 20,
                                paddingBottom: 20,
                                paddingRight: 20,
                                borderBottomColor: '#eee',
                                borderBottomWidth: 1
                            }}>
                                <View style={{flex: 3, alignItems: 'center'}}><View><Text
                                    style={{fontSize: 15, fontWeight: '500'}}>PAYMENT</Text></View><View><Text
                                    style={{fontSize: 12, fontWeight: '400'}}>Last payment method</Text></View></View>
                                <View style={{flex: 4}}>

                                    <View style={{flex: 1.5}}><Text style={{fontSize: 14, fontWeight: '600'}}>0989
                                        ******** 9098</Text>
                                        <Text style={{fontSize: 13, fontWeight: '300'}}>Via Credit
                                            Card</Text></View></View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}><Icon
                                    name="keyboard-arrow-right" size={30} style={{marginLeft: 10}}/></View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                minHeight: 60,
                                paddingTop: 25,
                                paddingBottom: 4,
                                paddingLeft: 20
                            }}>
                                <View style={{flex: 1}}><CheckBox
                                    label='I agree to T&C /Disclaimer'
                                    labelStyle={{fontSize: 12}}

                                    checkboxStyle={{height: 15, width: 15, borderColor: 'orange', borderWidth: 2}}
                                    onChange={(checked) => console.log('I am checked', checked)}

                                /></View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{width: WIDTH, position: 'absolute', bottom: 0}}>
                        <TouchableOpacity onPress={()=>Actions.Payment()} style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: '#f19215',
                            padding: 10,
                            borderRadius: 2,
                            paddingRight: 20,
                            paddingLeft: 20
                        }}>
                            <Text style={{
                                flex: 1,
                                color: '#fff',
                                textAlign: 'center',
                                paddingTop: 0,
                                fontWeight: '900',
                                fontSize: 18
                            }}>PLACE ORDER</Text>


                        </TouchableOpacity>
                    </View>
                </View>
            </MenuContext>
        )
    }
}
