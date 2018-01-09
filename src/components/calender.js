import React from 'react';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
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
import {Example} from "./test";
class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            swipeToClose: true,
            selectedDate: moment().format(),
            isOpen      : true,
            isVisible   : false,
            firstTime   : true,
            currentDate : new Date(),
            selectedStartDate: null,
            isModalVisible: true
        };
        this.onDayPress = this.onDayPress.bind(this);
    }
    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just openned');
    }

    onDayPress(day) {
        //alert(day.dateString);
        this.setState({
            selected: day.dateString,
            isModalVisible:false
        });
        Actions.Example();
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flex:1,justifyContent:'center',alignSelf:'stretch',alignItems:'center'}}>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{flex: 1,justifyContent:'center'}} backdropOpacity={0.5}>
                            <View style={{height:350,padding:10}}>
                            <Calendar
                            onDayPress={this.onDayPress}
                            style={styles.calendar}
                            hideExtraDays
                            markedDates={{[this.state.selected]: {selected: true}}}
                            theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: '#32CD32',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#32CD32',
                                todayBackgroundColor: '#32CD32',
                                dayTextColor: '#000',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#32CD32',
                                selectedDotColor: '#ffffff',
                                arrowColor: 'black',
                                monthTextColor: 'black',
                                textDayFontFamily: 'Roboto',
                                textMonthFontFamily: 'Roboto',
                                textDayHeaderFontFamily: 'Roboto',
                                textDayFontSize: 16,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 16,
                                'stylesheet.day.basic': {
                                    today: {
                                        backgroundColor:'#000'
                                    }
                                }
                            }}
                        />
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
        alignSelf:'center',
        height  : 300,

    }

});
export {Calender}