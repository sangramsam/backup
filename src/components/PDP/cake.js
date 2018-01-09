import React from 'react';
import {
    Text,
    StyleSheet, Image,
    View, Dimensions, TouchableOpacity, Platform
} from 'react-native';
import Modal from 'react-native-modal';
import RadioForm from 'react-native-radio-form';
import EntypoIcon from 'react-native-vector-icons/Entypo'
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const mockData = [
    {
        label: 'With Egg',
        value: 'fi'
    },
    {
        label: 'EggLess',
        value: 'se'
    }
];
const cakeFlavour = [
    {
        label: 'Chocolate',
        value: 'fi'
    },
    {
        label: 'Vanila',
        value: 'se'
    }, {
        label: 'Butterscotch',
        value: 'si'
    }, {
        label: 'Chocolate',
        value: 'sc'
    }, {
        label: 'Black Forest',
        value: 'st'
    },
];

class Cake extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalVisible: false
        };
    }

    _toggleModal = () => this.setState({isModalVisible: !this.state.isModalVisible})


    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    backgroundColor: 'white',
                    marginBottom: 15
                }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        marginBottom: 15
                    }}>
                        <View style={{flex: 1, flexDirection: "row",}}>
                            <View style={{flex: 1.6, alignItems: 'flex-end'}}>
                                <Text>₹</Text>
                            </View>
                            <View style={{flex: 2, alignItems: 'flex-start'}}>
                                <Text style={[styles.currency, {marginLeft: 10}]}>1499</Text>
                            </View>
                            <View style={{flex: 0.4, alignItems: 'center'}}>
                                <View style={{backgroundColor:'orange',padding:Platform.OS === 'ios'?4:4,borderRadius:19}}><EntypoIcon name='flash' color='#fff' size={13}/></View>
                            </View>

                        </View>
                        <View style={{flex: 1, alignItems: 'center', alignSelf: 'stretch', padding: 10}}>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                alignSelf: 'stretch'
                            }}>
                                <RadioForm
                                    style={{width: width-180}}
                                    dataSource={mockData}
                                    itemShowKey="label"
                                    itemRealKey="value"
                                    circleSize={16}
                                    initial={1}
                                    innerColor={"white"}
                                    outerColor={"red"}
                                    formHorizontal={true}
                                    labelHorizontal={true}
                                    onPress={(item) => this._onSelect(item)}
                                />
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{
                    flex: 0,
                    backgroundColor: '#f8f8f8',
                    borderRadius: 5,
                    borderColor: '#adadad',
                    borderWidth: 1,
                    padding: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'Roboto'
                    }}>1/2 KG WITH EGG</Text>
                    <Text style={{fontSize: 13, fontFamily: 'Roboto', marginTop: 5}}>Chocolate cake half kg</Text>
                </View>
                <View style={{flex: 0, marginTop: 10}}>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text style={{color: "black", fontSize: 16, fontFamily: 'Roboto', marginBottom: 5}}>Select cake
                            flavour</Text>
                        <View style={{
                            width: width - 30,
                            borderColor: "#adadad",
                            padding: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingLeft: 10,
                            flexDirection: "row",
                        }}>
                            <View style={{flex: 0.8, justifyContent: 'center'}}>
                                <Text style={{
                                    fontSize: 16,
                                    fontFamily: 'Roboto',
                                    color: "#adadad"
                                }}>Cake flavour</Text>
                            </View>
                            <View style={{
                                flex: 0.2,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={require('../../image/right_arrow.png')}
                                       resizeMode="center"/>
                            </View>
                            <Modal isVisible={this.state.isModalVisible}>
                            <View style={{flex: 1, justifyContent: 'center'}} backdropOpacity={0.5}>
                                <View style={{
                                    borderRadius: 5,
                                    flexDirection: 'column',
                                    height: 250,
                                    backgroundColor: '#fff',
                                    padding:1.153
                                }}>
                                    <View style={{
                                        flex: 0.5,
                                        backgroundColor: 'white',
                                        padding: 10,
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        borderColor: '#ddd',
                                        borderWidth: 1
                                    }}>
                                        <Text>SELECT CAKE FLAVOUR</Text>
                                    </View>
                                    <View style={{
                                        flex: 4,
                                        backgroundColor: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <RadioForm
                                            style={{paddingLeft: 30, marginTop: 4}}
                                            dataSource={cakeFlavour}
                                            itemShowKey="label"
                                            itemRealKey="value"
                                            circleSize={16}
                                            initial={1}
                                            innerColor={"white"}
                                            outerColor={"#ff9212"}
                                            formHorizontal={false}
                                            labelHorizontal={true}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity onPress={this._toggleModal}>
                                    <View style={{
                                        justifyContent: 'center',
                                        height: 100,
                                        backgroundColor: 'transparent',
                                        position: 'relative',
                                        top: 15,
                                        left: 140
                                    }}>
                                        <Image source={require('../../image/closeCircle.png')}
                                               style={{height: 30, width: 30}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
    }

    }

    const styles = StyleSheet.create({
        currency: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "300",
        color: "black"

    },
    });
    export {Cake}