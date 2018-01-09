import React, {Component} from 'react';
import {
    View, ScrollView, Text, Platform, TextInput, StyleSheet, Image,
    ToastAndroid, TouchableOpacity, Picker, Button, StatusBar, Dimensions
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import IconsMaterial from 'react-native-vector-icons/MaterialIcons';
import IconsCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {MenuContext} from 'react-native-popup-menu';
import Tabs from 'react-native-tabs';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {HeaderComponent} from './header';
class CartEmpty extends Component {
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
            <View>
                <HeaderComponent name='Shopping Cart' headerProps="active"/>
                <ScrollView>
                    <View style={{flexDirection: 'column', backgroundColor: '#ebeef4'}}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 40
                        }}>
                            <View><IconsMaterial name='shopping-cart' color="#cbd0d9" size={100}/></View>
                            <View><Text style={{
                                color: '#d0d4dc',
                                fontSize: 16,
                                marginBottom: 40
                            }}>Your cart is empty</Text></View>
                            <View>
                                <Text style={{
                                    color: '#4a4b4b',
                                    fontSize: 20,
                                    fontWeight: '600'
                                }}>
                                    You might be interested in
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            padding: 10
                        }}>

                            <View style={styles.card}>

                                <View style={styles.cardInner}>
                                    <View style={{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode='contain'

                                            style={{flexShrink: 1, flex: 1, width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 2,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingRight: '2%'
                                        }}>
                                            <View style={{
                                                flex: 4,
                                                paddingLeft: 5,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style={{flex: 1}}>
                                                <Text style={{color: '#ff9212', marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled={true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor={'#ff9212'}
                                                    starSize={16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov
                                                    6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                    name="ios-information-circle-outline" size={15}
                                                    color="#42a36b"/></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>

                                <View style={styles.cardInner}>
                                    <View style={{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode='contain'

                                            style={{flexShrink: 1, flex: 1, width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 2,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                flex: 4,
                                                paddingLeft: 5,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style={{flex: 1}}>
                                                <Text style={{color: '#ff9212', marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled={true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor={'#ff9212'}
                                                    starSize={16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov
                                                    6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                    name="ios-information-circle-outline" size={15}
                                                    color="#42a36b"/></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>

                                <View style={styles.cardInner}>
                                    <View style={{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode='contain'

                                            style={{flexShrink: 1, flex: 1, width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 2,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                flex: 4,
                                                paddingLeft: 5,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 13,
                                                    paddingRight: '2%'
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style={{flex: 1}}>
                                                <Text style={{color: '#ff9212', marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled={true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor={'#ff9212'}
                                                    starSize={16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov
                                                    6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                    name="ios-information-circle-outline" size={15}
                                                    color="#42a36b"/></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>

                                <View style={styles.cardInner}>
                                    <View style={{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode='contain'

                                            style={{flexShrink: 1, flex: 1, width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 2,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                flex: 4,
                                                paddingLeft: 5,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style={{flex: 1}}>
                                                <Text style={{color: '#ff9212', marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled={true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor={'#ff9212'}
                                                    starSize={16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov
                                                    6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                    name="ios-information-circle-outline" size={15}
                                                    color="#42a36b"/></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>

                                <View style={styles.cardInner}>
                                    <View style={{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode='contain'

                                            style={{flexShrink: 1, flex: 1, width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 2,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <View style={{
                                                flex: 4,
                                                paddingLeft: 5,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                <Text style={{
                                                    fontSize: 13,
                                                    paddingRight: '2%'
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style={{flex: 1}}>
                                                <Text style={{color: '#ff9212', marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled={true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor={'#ff9212'}
                                                    starSize={16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            }}>
                                                <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov
                                                    6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                    name="ios-information-circle-outline" size={15}
                                                    color="#42a36b"/></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={styles.container}>

                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Tabs  selected={this.state.page} style={{backgroundColor: 'white', paddingTop: 46, paddingBottom: 23}}
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
                        <TouchableOpacity onPress={()=>{Actions.Notification()}}>
                        <View name="third" style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <IconsMaterial name='notifications' color='#666666' size={22}/>
                            <Text style={{
                                color: '#666666',
                                fontSize: 10
                            }}>Notifications</Text>
                        </View>
                        </TouchableOpacity>
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
    card: {
        width: '47%',
        padding: 5,
        paddingBottom: 0,
        height: 220,
        margin: 5,
        shadowColor: 'rgba(0, 0, 0, 0.36);',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    cardInner: {
        flexDirection: 'column',
        flex: 1
    },
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

export {CartEmpty}