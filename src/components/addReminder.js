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
import {HeaderComponent} from './header'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {MenuContext} from 'react-native-popup-menu';
import DatePicker from 'react-native-datepicker'
import ModalSelector from 'react-native-modal-selector'

class AddNewReminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: '',
            textInputValue: '',
            disableButton: true
        };
    }

    render() {
        let index = 0;
        const data = [
            {key: index++, section: true, label: 'Fruits'},
            {key: index++, label: 'Red Apples'},
            {key: index++, label: 'Cherries'},
            {key: index++, label: 'Cranberries'},
            // etc...
            // Can also add additional custom keys which are passed to the onChange callback
            {key: index++, label: 'Vegetable', customKey: 'Not a fruit'}
        ];
        console.log(this.state.date);
        return (
            <MenuContext>
                <View style={{flex:1}}>
                    <HeaderComponent name='Add Reminder'/>
                <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 20, backgroundColor: '#eee'}}>
                    <View style={{
                        flex: 1,
                        maxHeight: 240,
                        backgroundColor: '#fff',
                        shadowColor: '#eee',
                        shadowOffset: {width: 2, height: 1},
                        shadowOpacity: 0.6,
                        shadowRadius: 1,
                        elevation: 1,
                    }}>
                        <View style={{flex: 1, borderColor: '#eee', borderWidth: 1}}>
                            <TextInput underlineColorAndroid='transparent' placeholder='*Name'
                                       style={{paddingLeft: 10,paddingTop:'4%'}}/>
                        </View>
                        <View style={{flex: 1, borderColor: '#eee', borderWidth: 1, position: 'relative'}}>
                            <ModalSelector
                                data={data}
                                initValue="Select something yummy!"
                                supportedOrientations={['portrait']}
                                onChange={(option) => {
                                    this.setState({textInputValue: option.label})
                                }}>

                                <TextInput
                                    underlineColorAndroid='transparent'

                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        paddingLeft: 10,
                                        paddingTop:'4%',
                                        borderWidth: 0,
                                        color: '#000'
                                    }}
                                    editable={false}
                                    placeholder="*Occasion"
                                    value={this.state.textInputValue}/>

                            </ModalSelector>
                            <Icon name='keyboard-arrow-down' size={20}
                                  style={{position: 'absolute', right: 10, top: '30%'}}/>
                        </View>


                        <View style={{flex: 1, borderColor: '#eee', borderWidth: 1}}>
                            <DatePicker
                                style={{width: '100%'}}
                                date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="YYYY-MM-DD"
                                placeholderTextColor='#000'
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        display: 'none'
                                    },
                                    dateInput: {
                                        borderWidth: 0,
                                        alignItems: 'flex-start',
                                        paddingLeft: 12,
                                        paddingTop: 5,


                                    },
                                    placeholderText: {
                                        color: '#B9B9B9'
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {
                                    this.setState({date: date})
                                }}
                            />
                            <Icon name='keyboard-arrow-down' size={20}
                                  style={{position: 'absolute', right: 10, top: '30%'}}/>
                        </View>
                        <View style={{flex: 2, borderColor: '#eee', borderWidth: 1}}>
                            <TextInput underlineColorAndroid='transparent' placeholder='*Notes'
                                       style={{paddingLeft: 10,paddingTop:'4%',}}/>
                        </View>
                    </View>
                    <View style={{flex: 1, marginTop: 20, maxHeight: 60}}>
                        <TouchableOpacity disabled={this.state.disableButton} style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#f19215',
                            padding: 10,
                            position: 'relative'
                        }}>
                            <Text style={{
                                flex: 1,
                                color: '#fff',
                                textAlign: 'center',
                                paddingTop: 0,
                                fontWeight: '900',
                                fontSize: 18
                            }}>ADD REMINDERS</Text>
                            {this.state.disable ? null : <Text style={{
                                position: 'absolute',
                                backgroundColor: '#fff',
                                opacity: 0.3,
                                right: 0,
                                left: 0,
                                top: 0,
                                bottom: 0
                            }}></Text>}
                        </TouchableOpacity>
                    </View>

                </View>
                </View>
            </MenuContext>
        )
    }
}

export {AddNewReminder}
