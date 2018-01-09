import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:2}}>
                    <Text style={{fontSize:15,color:'black',fontWeight:'bold',fontFamily:'Roboto',marginBottom:5}}>This gift contains:</Text>
                    <Text style={{fontSize:15,color:'#ff9212',fontWeight:'bold',fontFamily:'Roboto'}}>8 Red Rose Bouquet</Text>
                    <Text style={{fontSize:15,color:'#ff9212',fontWeight:'bold',fontFamily:'Roboto'}}>8 Red Rose Bouquet</Text>
                </View>
                <View style={{flex:3,marginTop:5}}>
                    <Text style={{fontSize:14,color:'black',fontFamily:'Roboto',lineHeight:20}}>{this.props.data}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:50,
        padding:10,
        backgroundColor:'white',
        alignSelf:'stretch'
    }
});
export {Description};