import React,{Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    ImageBackground
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';

export default class Payment extends Component{
    render()
    {
        return(
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>Actions.drawer({data:'thankyou'})} style={{minHeight:200,flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                    <Text>Success</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{minHeight:200,flex:1,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
                    <Text>Failure</Text>
                </TouchableOpacity>
            </View>
        )
    }
}