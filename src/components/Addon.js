import React, {Component} from 'react';
import {
    View, ScrollView, Text, Platform, TextInput, StyleSheet, Image,
    ToastAndroid, TouchableOpacity, Picker, Button, StatusBar, Dimensions
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'react-native-custom-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderComponent} from './header';
import {MenuContext} from 'react-native-popup-menu';

class Addon extends Component {

    render() {
        const shadowOpt = {
            width: 100,
            height: 100,
            color: "#000",
            border: 2,
            radius: 3,
            opacity: 0.2,
            x: 0,
            y: 3,
            style: {marginVertical: 5}
        }
        return (
            <MenuContext>
                <View>
                    <HeaderComponent name="Make it Extra Speacial" headerProps='active' hide='addon'/>
                    <ScrollView>
                        <View style={{marginTop: 40, flexDirection: 'column'}}>
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                padding: 10
                            }}>
                                <View style={styles.card}>

                                    <View style={{
                                        flexDirection: 'column'
                                    }}>
                                        <View style={{
                                            flex: 1,
                                            alignItems: 'flex-end'
                                        }}>
                                            <Icon name="ios-information-circle-outline" size={20} color="#c0c0c0"/>
                                        </View>
                                    </View>
                                    <View style={styles.cardInner}>
                                        <View style={{
                                            flex: 6,
                                        }}>
                                            <Image
                                                resizeMode='contain'

                                                style={{flexShrink: 1, flex: 1, width: null}}
                                                source={require('../image/chocolate.png')}
                                            />
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flex: 2,
                                        }}>
                                            <Text style={{
                                                color: '#000'
                                            }}>10 Diary Milk Chocol...</Text>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    fontSize: 20
                                                }}>299</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f8f8f8',
                                            padding: 4,
                                            flex: 1.5,
                                            minHeight: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                            }}>

                                                <Checkbox style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#000',
                                                    borderWidth: 1,
                                                    borderRadius: 3,
                                                    borderColor: '#b6b6b6'
                                                }}
                                                          checked={true}/>
                                            </View>
                                            <View style={{
                                                flex: 2
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="minus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#fff',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 20
                                                        }}>2</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="plus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.card}>
                                    {/* <View style = {{
 position: 'absolute',
 right: '2%'
 }}>
 <FontAwesomeIcon name="info" size={20} color="#3f3f3f" />
 </View> */}
                                    <View style={styles.cardInner}>
                                        <View style={{
                                            flex: 6,
                                        }}>
                                            <Image
                                                resizeMode='contain'

                                                style={{flexShrink: 1, flex: 1, width: null}}
                                                source={require('../image/chocolate.png')}
                                            />
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flex: 2,
                                        }}>
                                            <Text style={{
                                                color: '#000'
                                            }}>10 Diary Milk Chocol...</Text>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    fontSize: 20
                                                }}>299</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f8f8f8',
                                            padding: 4,
                                            flex: 1.5,
                                            minHeight: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                            }}>

                                                <Checkbox style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#000',
                                                    borderWidth: 1,
                                                    borderRadius: 3,
                                                    borderColor: '#b6b6b6'
                                                }}
                                                          checked={true}/>
                                            </View>
                                            <View style={{
                                                flex: 2
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="minus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#fff',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 20
                                                        }}>2</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="plus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.card}>
                                    {/* <View style = {{
 position: 'absolute',
 right: '2%'
 }}>
 <FontAwesomeIcon name="info" size={20} color="#3f3f3f" />
 </View> */}
                                    <View style={styles.cardInner}>
                                        <View style={{
                                            flex: 6,
                                        }}>
                                            <Image
                                                resizeMode='contain'

                                                style={{flexShrink: 1, flex: 1, width: null}}
                                                source={require('../image/chocolate.png')}
                                            />
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flex: 2,
                                        }}>
                                            <Text style={{
                                                color: '#000'
                                            }}>10 Diary Milk Chocol...</Text>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    fontSize: 20
                                                }}>299</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f8f8f8',
                                            padding: 4,
                                            flex: 1.5,
                                            minHeight: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                            }}>

                                                <Checkbox style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#000',
                                                    borderWidth: 1,
                                                    borderRadius: 3,
                                                    borderColor: '#b6b6b6'
                                                }}
                                                          checked={true}/>
                                            </View>
                                            <View style={{
                                                flex: 2
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="minus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#fff',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 20
                                                        }}>2</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="plus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.card}>
                                    {/* <View style = {{
 position: 'absolute',
 right: '2%'
 }}>
 <FontAwesomeIcon name="info" size={20} color="#3f3f3f" />
 </View> */}
                                    <View style={styles.cardInner}>
                                        <View style={{
                                            flex: 6,
                                        }}>
                                            <Image
                                                resizeMode='contain'

                                                style={{flexShrink: 1, flex: 1, width: null}}
                                                source={require('../image/chocolate.png')}
                                            />
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flex: 2,
                                        }}>
                                            <Text style={{
                                                color: '#000'
                                            }}>10 Diary Milk Chocol...</Text>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    fontSize: 20
                                                }}>299</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f8f8f8',
                                            padding: 4,
                                            flex: 1.5,
                                            minHeight: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                            }}>

                                                <Checkbox style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#000',
                                                    borderWidth: 1,
                                                    borderRadius: 3,
                                                    borderColor: '#b6b6b6'
                                                }}
                                                          checked={true}/>
                                            </View>
                                            <View style={{
                                                flex: 2
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="minus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#fff',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 20
                                                        }}>2</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="plus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.card}>
                                    {/* <View style = {{
 position: 'absolute',
 right: '2%'
 }}>
 <FontAwesomeIcon name="info" size={20} color="#3f3f3f" />
 </View> */}
                                    <View style={styles.cardInner}>
                                        <View style={{
                                            flex: 6,
                                        }}>
                                            <Image
                                                resizeMode='contain'

                                                style={{flexShrink: 1, flex: 1, width: null}}
                                                source={require('../image/chocolate.png')}
                                            />
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flex: 2,
                                        }}>
                                            <Text style={{
                                                color: '#000'
                                            }}>10 Diary Milk Chocol...</Text>
                                            <Text
                                                style={{
                                                    color: 'red',
                                                    fontSize: 20
                                                }}>299</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f8f8f8',
                                            padding: 4,
                                            flex: 1.5,
                                            minHeight: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <View style={{
                                                flex: 1,
                                            }}>

                                                <Checkbox style={{
                                                    backgroundColor: 'transparent',
                                                    color: '#000',
                                                    borderWidth: 1,
                                                    borderRadius: 3,
                                                    borderColor: '#b6b6b6'
                                                }}
                                                          checked={true}/>
                                            </View>
                                            <View style={{
                                                flex: 2
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="minus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#fff',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 20
                                                        }}>2</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}>
                                                        <TouchableOpacity onPress={this._onPressButton}>
                                                            <FontAwesomeIcon name="plus" size={20} color="#3f3f3f"/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.50);',
                        shadowOffset: {width: 10, height: 0},
                        shadowOpacity: 0.6,
                        shadowRadius: 15,
                        elevation: 50,
                        borderWidth: 0
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#fdffbf',
                            padding: 15
                        }}>
                            <View style={{
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                flex: 1
                            }}>
                                <Text>
                                    <Text style={{
                                        color: '#88897a',
                                        fontWeight: '600'
                                    }}>2 Adds ons 298</Text>
                                    <Text><Icon name="ios-information-circle-outline" size={20} color="#c0c0c0"/></Text>
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: '#88897a'
                                }}>Total ₹ 897</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#f19215',
                            padding: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity>
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    fontSize: 16
                                }}>CONTINUE WITH 2 ADD ONS</Text>
                            </TouchableOpacity>
                        </View>
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
        height: 250,
        margin: 5,
        shadowColor: 'rgba(0, 0, 0, 0.36);',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 0
    },
    cardInner: {
        flexDirection: 'column',
        flex: 1
    },
};
export {Addon};