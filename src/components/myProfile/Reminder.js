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
import Icon from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
import {MenuContext} from 'react-native-popup-menu';
import Modal from 'react-native-modal';

class Reminder extends React.Component {
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
                <HeaderComponent name='Reminders'/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{height: 50, backgroundColor: "#ffffff", alignSelf: 'stretch', borderRadius: 5}}>
                            <TouchableOpacity onPress={()=>{Actions.AddNewReminder()}} style={{
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: 0,
                                padding: 15,
                                shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                            }}>
                                <Text style={styles.addTextAddress}>+ ADD NEW REMINDER</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"column",minHeight:150,alignSelf:'stretch',marginTop:10,}}>
                            <View style={{backgroundColor:'white',flex:3,padding:10,flexDirection:'row',borderTopLeftRadius: 5,borderTopRightRadius:5}}>
                                <View style={{flex:1}}>
                                    <Image source={require('../../image/ballon.png')}  reSizeMode="center"    />
                                </View>
                                <View style={{flex:3}}>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:5}}>Majid Khan</Text>
                                    <Text style={{fontSize:18,fontWeight:'bold',marginBottom:8}}>Birthday  ·  5th Sep</Text>
                                    <Text style={{fontSize:16}}>Send Flowers and any gift.</Text>
                                </View>
                                <View style={{flex:0.4,justifyContent:'center'}}>
                                    <Icon name="dots-three-vertical" size={20} color="#939393"/>
                                </View>
                            </View>
                            <View style={{flex:2,backgroundColor:"#ff9212",borderBottomLeftRadius: 5,borderBottomRightRadius:5}}>
                                <TouchableOpacity style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderWidth: 0,
                                    padding: 20,
                                    paddingTop:12,
                                    shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                                }}>
                                    <Text style={styles.btnTxt}>SCHEDULE GIFT</Text>
                                </TouchableOpacity>
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
        color:"white",
        fontWeight:"700"
    }

});
export {Reminder};