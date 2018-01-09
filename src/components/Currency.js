import React from 'react';
import Modal from 'react-native-modal';
import moment from 'moment'
import {
    AppRegistry,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    View,
    Dimensions,
    TextInput
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            swipeToClose: true,
            selectedDate: moment().format(),
            isOpen: true,
            isVisible: false,
            firstTime: true,
            currentDate: new Date(),
            selectedStartDate: null,
            isModalVisible: true
        };
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just openned');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flex: 1, justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center'}}>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{flex: 1, marginTop: 70, alignItems: 'center'}} backdropOpacity={1.5}>
                            <View style={{
                                minHeight: height / 1.3,
                                width: width / 1.3,
                                backgroundColor: "white",
                                flexDirection: 'column'
                            }}>
                                <View style={{flex: 0.5, backgroundColor: '#ddd', flexDirection: 'row'}}>
                                    <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontSize: 18, fontFamily: 'Roboto'}}>Select Currency</Text>
                                    </View>
                                    <TouchableOpacity style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}} onPress={() =>{Actions.pop();this.setState({isModalVisible: false})}}>
                                    <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                                            <IonicIcon name="ios-close" size={25}/>
                                    </View>
                                    </TouchableOpacity>

                                </View>
                                <View style={{flex: 6}}>
                                    <View style={{flexDirection: 'column', flex: 1}}>
                                        <ScrollView>
                                            <View style={styles.currency}>
                                                <Text style={{fontSize: 15}}>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                            <View style={styles.currency}>
                                                <Text>USD</Text>
                                            </View>
                                        </ScrollView>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        width: window.width,
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: 300
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {
        color: "black",
        fontSize: 22
    },
    modalsss: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 300,

    },
    currency: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }

});
export {Currency}