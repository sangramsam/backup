import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    View, StyleSheet, Dimensions, ScrollView, Platform
} from 'react-native';
import HeaderComponent from '../headerMyaccount';

import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import RadioForm from 'react-native-radio-form';
import DatePicker from 'react-native-datepicker';
import ModalSelector from 'react-native-modal-selector'

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {MenuContext} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            date: "2016-05-15",
            textInputValue:""
        };
    }

    componentWillMount() {

    }

    _onPressButton() {

    }

    _onSelect = (item) => {
        console.log(item);
    };

    render() {
        let index = 0;
        const data = [
            {key: index++, section: true, label: 'Fruits'},
            {key: index++, label: 'Red Apples'},
            {key: index++, label: 'Cherries'},
            {key: index++, label: 'Cranberries'},
            {key: index++, label: 'Vegetable', customKey: 'Not a fruit'}
        ];
        const mockData = [
            {
                label: 'Male',
                value: 'fi'
            },
            {
                label: 'Female',
                value: 'se'
            }
        ];
        return (
            <MenuContext>
                <HeaderComponent title='My Profile' color='true'/>
                <ScrollView>

                    <View style={styles.container}>
                        <View style={{flex: 1, flexDirection: 'column', alignSelf: 'stretch'}}>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/user.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end',height: 10}}>
                                        <Text style={styles.labelHead}>Name</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            width: 250,
                                            borderBottomColor: '#e2e2e2',
                                            height: 30,
                                            padding:5,
                                            borderBottomWidth: 1,
                                            paddingLeft:0
                                        }} placeholder="Hardeep Singh" placeholderTextColor="#9999"
                                                   underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/phone.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Mobile</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            width: 250,
                                            borderBottomColor: '#e2e2e2',
                                            height: 30,
                                            padding:5,
                                            borderBottomWidth: 1,
                                            paddingLeft:0

                                        }} placeholder="Hardeep Singh" placeholderTextColor="#9999" underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/mail.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Email</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            width: 250,
                                            borderBottomColor: '#e2e2e2',
                                            height: 30,
                                            padding:5,
                                            borderBottomWidth: 1,
                                            paddingLeft:0
                                        }} placeholder="Hardeep Singh" placeholderTextColor="#9999" underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1.3, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/gender.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Gender</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        marginLeft:-12
                                    }}>
                                        <RadioForm
                                            style={{width: 250 - 30}}
                                            dataSource={mockData}
                                            itemShowKey="label"
                                            itemRealKey="value"
                                            circleSize={14}
                                            initial={1}
                                            formHorizontal={true}
                                            labelHorizontal={true}
                                            onPress={(item) => this._onSelect(item)}
                                            innerColor="#222"
                                            outerColor="#222"
                                        />

                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row',marginTop:5,backgroundColor:"white"}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/DOB.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Date of Birth</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                    }}>
                                        <DatePicker
                                            style={{width: 250}}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            minDate="2016-05-01"
                                            maxDate="2016-06-01"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            showIcon={false}
                                            customStyles={{
                                                dateInput: {
                                                        borderTopColor: 'transparent',
                                                        borderLeftColor: 'transparent',
                                                        borderRightColor: 'transparent',
                                                        borderBottomColor: '#e2e2e2',
                                                        borderBottomWidth: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'flex-end',
                                                        marginRight: 5,paddingBottom:5
                                                    },
                                                    dateText: styles.label,
                                                    placeholderText: styles.label
                                                }
                                                // ... You can check the source to find the other keys.
                                            }
                                            onDateChange={(date) => {
                                                this.setState({date: date})
                                            }}
                                        />

                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/Aniversary.png')}
                                           style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Date of Anniversary</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch'
                                    }}>
                                        <DatePicker
                                            style={{width: 250}}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            minDate="2016-05-01"
                                            maxDate="2016-06-01"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            showIcon={false}
                                            customStyles={{
                                                dateInput: {
                                                        borderTopColor: 'transparent',
                                                        borderLeftColor: 'transparent',
                                                        borderRightColor: 'transparent',
                                                        borderBottomColor: '#e2e2e2',
                                                        borderBottomWidth: 1,
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'flex-end',
                                                        marginRight: 5,paddingBottom:5
                                                    },
                                                    dateText: styles.label,
                                                    placeholderText: styles.label
                                                }
                                                // ... You can check the source to find the other keys.
                                            }
                                            onDateChange={(date) => {
                                                this.setState({date: date})
                                            }}
                                        />

                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1.8, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('../../image/address.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Address</Text>
                                    </View>
                                    <View style={{
                                        flex: 2.2,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            alignSelf:'stretch',
                                            borderBottomColor: '#e2e2e2',
                                            flex: 1,
                                            borderBottomWidth: 1,
                                            height:100,
                                            paddingLeft:0
                                        }} editable={true} maxLength={40} multiline={true} numberOfLines={2}
                                                   placeholder="B-41/B, Bharat Vihar, Chander Vihar, Nilothi Extn., Nangloi, Sunday Bazaar Road, Near BK Hardware."
                                                   placeholderTextColor="#9999"
                                                   underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                    <Image source={require('../../image/location.png')} resizeMode="contain" style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Pincode</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            width: 250,
                                            borderBottomColor: '#e2e2e2',
                                            height: 30,
                                            padding:5,
                                            borderBottomWidth: 1,
                                            paddingLeft:0
                                        }} placeholder="110041" placeholderTextColor="#999"
                                                   underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                    <Image source={require('../../image/city.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>City</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <TextInput style={{
                                            width: 250,
                                            borderBottomColor: '#e2e2e2',
                                            height: 30,
                                            padding:5,
                                            borderBottomWidth: 1,
                                            paddingLeft:0
                                        }} placeholder="New Delhi" placeholderTextColor="#999"
                                                   underlineColorAndroid='transparent'/>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, maxHeight: 100, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                    <Image source={require('../../image/county.png')} style={{width: 20, height: 20}}/>
                                </View>
                                <View style={{flex: 3, flexDirection: 'column'}}>
                                    <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end'}}>
                                        <Text style={styles.labelHead}>Country</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        alignSelf: 'stretch',
                                        backgroundColor: 'white'
                                    }}>
                                        <ModalSelector
                                            style={{width:250}}
                                            data={data}
                                            initValue="Select something yummy!"
                                            onChange={(option) => {
                                               this.setState({textInputValue:option.label});
                                                alert(`${option.label} (${option.key}) nom nom nom`)
                                            }}>

                                            <TextInput
                                                style={{borderBottomWidth:1, borderBottomColor:"#e2e2e2", padding:5,paddingLeft:0,paddingTop:8, height:40,color:"#999"}}
                                                editable={false}
                                                placeholder="Select country"
                                                value={this.state.textInputValue} />
                                        </ModalSelector>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: 30,
                                paddingLeft:20,}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#666666',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 4,
                                            height: 45,
                                            width: 120
                                        }}>
                                        <Text style={[styles.whiteFont]}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,alignItems:'flex-end',paddingRight:18}}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#ff8f34',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 4,
                                            height: 45,
                                            width: 120
                                        }}>
                                        <Text style={[styles.whiteFont]}>SAVE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </View>
                    </View>
                </ScrollView>
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: height,
        paddingTop:15,
        alignSelf: 'stretch',

    }, label: {
        color: "#999999",
        fontFamily: 'Roboto',
        fontWeight: "500",
        fontSize: 14
    },
    labelHead: {
        fontFamily: 'Roboto',
        fontWeight: "500",
        color:'#999999',
        fontSize: 14
    },
    whiteFont:
        {
            color: '#ffffff',
            fontSize:20,
            fontWeight:'bold'

        },

});
export {ProfileForm};