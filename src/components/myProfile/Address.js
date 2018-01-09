import React from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    View, StyleSheet, Dimensions, ScrollView, Platform
} from 'react-native';
import {HeaderComponent} from '../header';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {MenuContext} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

class Address extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    _onPressButton() {

    }

    render() {
        return (
            <MenuContext>
                <ScrollView>
                    <HeaderComponent name='Saved Addresses'/>
                    <View style={styles.container}>
                        <View style={{height: 50, backgroundColor: "#ffffff", alignSelf: 'stretch', borderRadius: 5}}>
                            <TouchableOpacity onPress={()=>{Actions.AddressRegistration()}} style={{
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: 0,
                                padding: 15,
                                shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                            }}>
                                <Text style={styles.addTextAddress}>+ ADD NEW ADDRESS</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"column",minHeight:180,alignSelf:'stretch',marginTop:10}}>
                            <View style={{backgroundColor:'white',flex:2,padding:15,borderTopLeftRadius: 5,borderTopRightRadius:5}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Majid Khan</Text>
                                <Text style={{fontSize:16,width:230}}>Majid Khan
                                    U-37/8, Saket, delhi -110030, Delhi, India
                                    Mob: 9999097172</Text>
                            </View>
                            <View style={{flex:1,}}>
                                <View style={{flexDirection:'row',backgroundColor:'#f8f8f8',borderBottomLeftRadius: 5,borderBottomRightRadius:5}}>
                                    <View style={{flex:1,padding:15,alignItems:'center',justifyContent:'center',borderRightColor:'black',borderRightWidth:1}}>
                                        <Text style={styles.btnTxt}>EDIT</Text>
                                    </View>
                                    <View style={{flex:1,padding:15,alignItems:'center',justifyContent:'center'}} >
                                        <Text style={styles.btnTxt}>DELETE</Text>
                                    </View>
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
        padding: 10,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        height: height,
    },
    addTextAddress: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: 'black'
    },
    btnTxt:{
        fontSize:20,
        color:"#666666",
        fontWeight:"700"
    }

});
export {Address};