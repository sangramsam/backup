import React from 'react';
import Drawer from './navDrawer/Drawer'
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import CalendarPicker from 'react-native-calendar-picker';
import {LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment'
import {
    AppRegistry,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    View,
    Dimensions,
    Image
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            isModalVisible: true,
            selectedDate: moment().format(),
            isOpen: false,
            isVisible: false,
            firstTime: true,
            currentDate: new Date(),
            selectedStartDate: null,
           visibleModal:0

        };
        this.onDayPress = this.onDayPress.bind(this);
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just openned');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }

    selectCameraTapped() {
        const options = {
            quality: 0.7,
            maxWidth: 500,
            maxHeight: 500,
            noData: true,
            storageOptions: {
                skipBackup: true
            },
            customButtons: [{name: 'abc', title: 'sangranm'}]
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            this.setState({isVisible: !this.state.isVisible});

            if (response.didCancel) {
                this.setState({isVisible: !this.state.isVisible});
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                this.setState({isVisible: !this.state.isVisible});
                console.log('ImagePicker Error: ', response.error);
                this._requestPermission(['camera', 'photo']);
            }
            else if (response.customButton) {
                this.setState({isVisible: !this.state.isVisible});
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }

                RNFetchBlob.fetch('POST', this.url.uploadExpenseFile, {
                    'Content-Type': 'multipart/form-data',
                }, [
                    {name: 'image', filename: 'tmp.png', data: RNFetchBlob.wrap(source.uri)}

                ]).then((resp) => {
                    console.log(resp);
                    this.setState({
                        source: source,
                        uploaded: true,
                        imageId: JSON.parse(resp.data).data.id,
                        isVisible: !this.state.isVisible
                    });
                    Toast.top('Receipt Uploaded.');
                }).catch((err) => {
                    console.log(err);
                    this.setState({isVisible: !this.state.isVisible});
                });
            }
        });

    }

    onDayPress(day) {
        alert(day.dateString);
        this.setState({
            selected: day.dateString
        });
    };
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Hello!</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );

    _toggleModal = () => this.setState({isModalVisible: !this.state.isModalVisible});

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            Actions.PDP()
                        }}>
                            <View style={{height: 150, width: 100, justifyContent: 'center'}}>
                                <Text>Express</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center'}}>
                        <TouchableOpacity onPress={this.selectCameraTapped.bind(this)}>
                            <View style={{height: 150, width: 100, justifyContent: 'center'}}>
                                <Text>Express</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'purple', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            Actions.Example()
                        }}>
                            <View style={{height: 150, width: 100, justifyContent: 'center'}}>
                                <Text>Delivery date</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'pink', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            Actions.Gallery()
                        }}>
                            <View style={{height: 150, width: 100, justifyContent: 'center'}}>
                                <Text>Gallery</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => {
                            Actions.Home()
                        }}>
                            <View style={{height: 150, width: 100, justifyContent: 'center'}}>
                                <Text>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 0.2, backgroundColor:'green',justifyContent: 'center', alignSelf: 'stretch', alignItems: 'center'}}>
                    <TouchableOpacity  style={{flex:1}} onPress={this._toggleModal}>
                        <Text style={{color:'white'}}>Delivery popup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{flex:1}} onPress={()=>{this.setState({ visibleModal: 5 })}}>
                        <Text style={{color:'white'}}>Delivery popup</Text>
                    </TouchableOpacity>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{flex: 1, justifyContent: 'center', marginTop: 150}} backdropOpacity={0.5}>
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
                                    paddingLeft: 45,
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    borderBottomColor: '#ddd',
                                    borderBottomWidth: 1
                                }}>
                                    <Text style={{color:'#666666',fontFamily: 'Roboto', fontSize: 20, fontWeight: '500'}}>DELIVERY OPTIONS</Text>
                                </View>
                                <View style={{
                                    flex: 4,
                                    backgroundColor: 'white',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    paddingLeft: 30,
                                    paddingTop: 10,
                                    paddingBottom: 10
                                }}>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <View style={{flex: 0.3}}>
                                            <Icon name="dot-single" size={40} color="#666666"/>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={styles.text}>Standard Delivery</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <View style={{flex: 0.3}}>
                                            <Icon name="dot-single" size={40} color="#666666"/>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={styles.text}>Morning Delivery</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <View style={{flex: 0.3}}>
                                            <Icon name="dot-single" size={40} color="#666666"/>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={styles.text}>Fixed Time Delivery</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <View style={{flex: 0.3}}>
                                            <Icon name="dot-single" size={40} color="#666666"/>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <Text style={styles.text}>Mid Night Delivery</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    flex: 1,
                                    backgroundColor: '#f2f2f2',
                                    alignItems: 'flex-start',
                                    borderTopColor: '#ddd',
                                    borderTopWidth: 1,
                                    paddingLeft: 30,
                                    flexDirection: "row",
                                    paddingTop:10
                                }}>
                                    <View style={{flex: 0.1,paddingLeft:10}}>
                                        <Ionicons name="info-outline" size={20} color="#37a85d"/>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center',alignItems:'flex-start'}}>
                                        <Text style={{fontFamily: 'Roboto',fontWeight:'500', color: '#37a85d', fontSize: 16}}>Delivered 24
                                            Times in last 24 Hrs.</Text>
                                    </View>
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
                                    <Image source={require('../image/closeCircle.png')}
                                           style={{height: 30, width: 30}}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <Modal isVisible={this.state.visibleModal === 5} style={{ justifyContent: 'flex-end', margin: 0}}>
                        {this._renderModalContent()}
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
        fontFamily: 'Roboto', fontSize: 16, color: "#222222"
    },
    modalsss: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        height: 300,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

});
export {Homepage}