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
import RadioForm from 'react-native-radio-form';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view'
import {HeaderComponent} from './header'
import {MenuContext} from 'react-native-popup-menu';

const HEIGHT = Dimensions.get('window').height;
var radio_props = [
    {label: 'Home', value: 0},
    {label: 'Address', value: 1},
    {label: 'Others', value: 2}
];

class AddressRegistration extends Component {
    _onSelect = (item) => {
        console.log(item);
    };

    render() {
        return (
            <MenuContext>
                <View style={{flex: 1,height:HEIGHT}}>
                    <HeaderComponent name='Add Addresses'/>
                    <KeyboardAwareView animated={true}>
                        <ScrollView style={{flex:1,padding: 20,}}>
                            <View style={{flex:1, backgroundColor: '#fff', borderRadius: 8}}>
                                <View style={{flex: 1, minHeight: 50, justifyContent: 'center', position: 'relative'}}>
                                    <TextInput style={{flex: 1, fontSize: 17, paddingLeft: 20}}
                                               underlineColorAndroid='transparent' placeholder='* Recipient name'/>
                                    <Image source={require('../image/contact.png')} resizeMode='center'
                                           style={{position: 'absolute', right: 20, width: 25}}/>
                                </View>

                                <View style={{
                                    flex: 1,
                                    minHeight: 30,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#4d4d4d38',
                                    justifyContent: 'center',
                                    borderTopWidth: 1,
                                    borderTopColor: '#4d4d4d38',
                                    position: 'relative'
                                }}>
                                    <TextInput style={{fontSize: 17, paddingLeft: 20}}
                                               underlineColorAndroid='transparent'
                                               placeholder='* Recipient address'/>
                                    <Text style={{fontSize: 15, position: 'absolute', right: 25}}>Line 1</Text>
                                </View>
                                <View style={{
                                    flex: 1,
                                    minHeight: 30,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#4d4d4d38',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <TextInput underlineColorAndroid='transparent'
                                               style={{fontSize: 17, paddingLeft: 20}}/>
                                    <Text style={{fontSize: 15, position: 'absolute', right: 25}}>Line 2</Text>
                                </View>
                                <View style={{flex: 1, minHeight: 30, justifyContent: 'center', position: 'relative'}}>
                                    <TextInput underlineColorAndroid='transparent' value='110018' editable={false}
                                               selectTextOnFocus={false} style={{fontSize: 17, paddingLeft: 20}}/>
                                </View>
                                <View style={{
                                    flex: 1,
                                    minHeight: 30,
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#4d4d4d38',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    borderTopWidth: 1,
                                    borderTopColor: '#4d4d4d38'
                                }}>
                                    <TextInput underlineColorAndroid='transparent' value='Delhi' editable={false}
                                               selectTextOnFocus={false} style={{fontSize: 17, paddingLeft: 20}}/>
                                </View>
                                <View style={{
                                    flex: 1,
                                    minHeight: 30,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        borderRightWidth: 1,
                                        borderRightColor: '#4d4d4d38',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        borderBottompWidth: 2,
                                        borderBottomColor: '#4d4d4d38'
                                    }}>
                                        <TextInput underlineColorAndroid='transparent' value='+91  INDIA'
                                                   editable={false}
                                                   selectTextOnFocus={false} style={{fontSize: 17, paddingLeft: 20}}/>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        position: 'relative',
                                        borderBottompWidth: 2,
                                        borderBottomColor: '#4d4d4d38'
                                    }}>
                                        <TextInput underlineColorAndroid='transparent' placeholder='* Mobile'
                                                   style={{fontSize: 17, paddingLeft: 20, color: '#000'}}/>
                                        <Image source={require('../image/contact.png')} resizeMode='center'
                                               style={{position: 'absolute', right: 20, width: 25}}/>
                                    </View>
                                </View>
                                <View style={{
                                    flex: 1,
                                    minHeight: 30,
                                    justifyContent: 'center',
                                    position: 'relative',
                                    borderTopWidth: 1,
                                    borderBottomColor: '#4d4d4d38'
                                }}>
                                    <TextInput underlineColorAndroid='transparent'
                                               placeholder='Recipient email (optional)'
                                               style={{fontSize: 18, paddingLeft: 20}}/>
                                </View>
                                <View style={{flex: 2, minHeight: 125, borderTopWidth: 1, borderTopColor: '#4d4d4d38'}}>
                                    <View style={{flex: 2, justifyContent: 'center'}}>
                                        <Text style={{fontSize: 18, paddingLeft: 20}}>Address Type</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20}}>
                                        <RadioForm
                                            style={{width: 350 - 30, fontSize: 17, marginLeft: -14}}
                                            dataSource={radio_props}
                                            itemShowKey="label"
                                            itemRealKey="value"
                                            circleSize={18}
                                            initial={1}
                                            formHorizontal={true}
                                            labelHorizontal={true}
                                            onPress={(item) => this._onSelect(item)}
                                            outerColor="#000"

                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={{flex: 1, marginTop: 20}}>
                                <TouchableOpacity style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#f19215',
                                    padding: 10
                                }}>
                                    <Text style={{
                                        flex: 1,
                                        color: '#fff',
                                        textAlign: 'center',
                                        paddingTop: 0,
                                        fontWeight: '900',
                                        fontSize: 18
                                    }}>USE THIS ADDRESS</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </KeyboardAwareView>

                </View>
            </MenuContext>
        )
    }
}

export {AddressRegistration};