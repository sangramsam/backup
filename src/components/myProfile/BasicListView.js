/* @flow */

import React, { PureComponent } from 'react';
import {ListView, View, Text, StyleSheet, Image, Dimensions, ScrollView, Platform} from 'react-native';
const {height} = Dimensions.get('screen');
import StepIndicator from 'react-native-step-indicator';
import dummyData from '../data';
type State = {
    data: Array<number>,
    dataSource: ListView.DataSource
};
const stepIndicatorStyles = {
    stepIndicatorSize: 20,
    currentStepIndicatorSize:10,
    separatorStrokeWidth: 10,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: '#009858',
    separatorFinishedColor: '#009858',
    separatorUnFinishedColor: '#eeeeee',
    stepIndicatorFinishedColor: '#009858',
    stepIndicatorUnFinishedColor: '#999999',
    stepIndicatorCurrentColor: '#009858',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#009858',
    stepIndicatorLabelFinishedColor: '#009858',
    stepIndicatorLabelUnFinishedColor: '#999999',
    labelColor: '#999999',
    labelSize: 15,
    currentStepLabelColor: '#009858'
}
export default class ListViewExample extends PureComponent<{}, State> {
    state = {
        data: [],
        dataSource: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        }),
    };

    componentWillMount() {
        this._genRows();
    }

    _root: ?ListView;

    _genRows = () => {
        const data = this.state.data.slice(0);
        const itemsLength = data.length;

        if (itemsLength >= 1) {
            return;
        }

        for (let i = 0; i < 1; i++) {
            data.push(itemsLength + i);
        }

        this.setState({
            data,
            dataSource: this.state.dataSource.cloneWithRows(data),
        });
    };

    _renderRow = index => (
        <ScrollView>
        <View style={{flex:1,backgroundColor:"red",flexDirection:'column'}}>
            <View style={{minHeight:200,backgroundColor:'#ffffff'}} >
                <View style={{flexDirection:'row',padding:10,backgroundColor:'#f8f8f8'}}>
                    <View style={{flex:5}}>
                        <Text style={styles.OrderText}>Order #689563201</Text>
                        <Text style={styles.OrderText}>Sent to Majid</Text>
                    </View>
                        <View style={{flex:5,alignItems:'flex-end'}}>
                           <Image source={require('../../image/processing.png')}   />
                            <Text style={styles.OrderText}>2 Oct’ 17, 01:33 PM</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',padding:10}}>
                    <View style={{flex:3}}>
                      <Image style={{borderRadius:5}} source={require('../../image/cake-image.png')} reSizeMode="center" />
                    </View>
                        <View style={{flex:6,lignItems:'flex-start'}}>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>Product Name</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 599 <Text style={{color:"#248a64",marginLeft:10}}>Small</Text></Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>Qty: <Text>-</Text><Text>1</Text></Text>
                        </View>
                </View>
                {/*<View style={{flexDirection:'row',padding:10}}>
                    <View style={{flex:4,backgroundColor:'orange'}}>
                      <Image source={require('../../image/cake-image.png')} reSizeMode="center" />
                    </View>
                        <View style={{flex:6,backgroundColor:'orange',alignItems:'flex-start'}}>
                            <Text>Product Name</Text>
                            <Text>599 <Text>Small</Text></Text>
                            <Text>Qty: <Text>1</Text></Text>
                        </View>
                </View>*/}
                <View style={{flexDirection:'row',maxHeight:500,padding:10}}>
                    <View style={{flex:4}}>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Subtotal</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Shipping</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Discount (Coupon code : HDFC20)</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Donation</Text>
                        <Text style={[styles.OrderText,{marginBottom:5,color:'black',fontWeight:'bold',fontSize:20}]}>Total</Text>
                    </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 898</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 0</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>- ₹ 200</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 1</Text>
                            <Text style={[styles.OrderText,{marginBottom:5,color:'#e82b37',fontWeight:'bold',fontSize:20}]}>₹ 699</Text>
                        </View>
                </View>
            </View>
            <View style={{minHeight:400,backgroundColor:'#f8f8f8'}} >
                <Text>ORDER STATUS</Text>
                <View style={styles.statuscontainer}>
                <View style={styles.stepIndicator}>
                    <StepIndicator
                        customStyles={stepIndicatorStyles}
                        stepCount={4}
                        direction='vertical'
                        currentPosition={1}
                        labels={dummyData.data.map(item => item.title)}
                    />
                </View>
                </View>
            </View>
            <View style={{minHeight:70,padding:10,backgroundColor:"white"}} >
                <Text style={{fontSize:15}}>DELIVERY ADDRESS</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Majid Khan</Text>
                <Text style={{fontSize:16,width:230}}>Majid Khan
                    U-37/8, Saket, delhi -110030, Delhi, India
                    Mob: 9999097172</Text>
            </View>
            <View style={{height:60,backgroundColor:'#f8f8f8',alignItems:"center",justifyContent:'center'}}>
                <Text style={{fontSize:22,color:"#666666",fontWeight:"700"}}>NEED HELP</Text>
            </View>
        </View>
        <View style={{flex:1,backgroundColor:"red",flexDirection:'column',marginTop:10}}>
            <View style={{minHeight:200,backgroundColor:'#ffffff'}} >
                <View style={{flexDirection:'row',padding:10,backgroundColor:'#f8f8f8'}}>
                    <View style={{flex:5}}>
                        <Text style={styles.OrderText}>Order #689563201</Text>
                        <Text style={styles.OrderText}>Sent to Majid</Text>
                    </View>
                        <View style={{flex:5,alignItems:'flex-end'}}>
                           <Image source={require('../../image/delivered.png')}   />
                            <Text style={styles.OrderText}>2 Oct’ 17, 01:33 PM</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',padding:10}}>
                    <View style={{flex:3}}>
                      <Image style={{borderRadius:5}} source={require('../../image/cake-image.png')} reSizeMode="center" />
                    </View>
                        <View style={{flex:6,lignItems:'flex-start'}}>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>Product Name</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 599 <Text style={{color:"#248a64",marginLeft:10}}>Small</Text></Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>Qty: <Text>-</Text><Text>1</Text></Text>
                        </View>
                </View>
                {/*<View style={{flexDirection:'row',padding:10}}>
                    <View style={{flex:4,backgroundColor:'orange'}}>
                      <Image source={require('../../image/cake-image.png')} reSizeMode="center" />
                    </View>
                        <View style={{flex:6,backgroundColor:'orange',alignItems:'flex-start'}}>
                            <Text>Product Name</Text>
                            <Text>599 <Text>Small</Text></Text>
                            <Text>Qty: <Text>1</Text></Text>
                        </View>
                </View>*/}
                <View style={{flexDirection:'row',maxHeight:500,padding:10}}>
                    <View style={{flex:4}}>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Subtotal</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Shipping</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Discount (Coupon code : HDFC20)</Text>
                        <Text style={[styles.OrderText,{marginBottom:5}]}>Donation</Text>
                        <Text style={[styles.OrderText,{marginBottom:5,color:'black',fontWeight:'bold',fontSize:20}]}>Total</Text>
                    </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 898</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 0</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>- ₹ 200</Text>
                            <Text style={[styles.OrderText,{marginBottom:5}]}>₹ 1</Text>
                            <Text style={[styles.OrderText,{marginBottom:5,color:'#e82b37',fontWeight:'bold',fontSize:20}]}>₹ 699</Text>
                        </View>
                </View>
            </View>
            <View style={{minHeight:400,backgroundColor:'#f8f8f8'}} >
                <Text>ORDER STATUS</Text>
                <View style={styles.statuscontainer}>
                    <View style={styles.stepIndicator}>
                        <StepIndicator
                            customStyles={stepIndicatorStyles}
                            stepCount={4}
                            direction='vertical'
                            currentPosition={1}
                            labels={dummyData.data.map(item => item.title)}
                        />
                    </View>
                </View>
            </View>
            <View style={{minHeight:70,padding:10,backgroundColor:"white"}} >
                <Text style={{fontSize:15}}>DELIVERY ADDRESS</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Majid Khan</Text>
                <Text style={{fontSize:16,width:230}}>Majid Khan
                    U-37/8, Saket, delhi -110030, Delhi, India
                    Mob: 9999097172</Text>
            </View>
            <View style={{height:200,padding:10,backgroundColor:"white",borderTopColor:'#ddd',borderTopWidth:1}} >
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:15}}>RECEIVED BY</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Majid Khan</Text>
                        <Image source={require('../../image/sign.png')}  reSizeMode="center"    />
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Image source={require('../../image/dummy.png')}  reSizeMode="center" style={{width:120,height:120}}  />
                    </View>

                </View>

            </View>
            <View style={{height:60,backgroundColor:'#f8f8f8',alignItems:"center",justifyContent:'center'}}>
                <Text style={{fontSize:22,color:"#666666",fontWeight:"700"}}>NEED HELP</Text>
            </View>
        </View>
        </ScrollView>
    );

    scrollTo = (...args: any) => this._root && this._root.scrollTo(...args);

    render() {
        return (
            <ListView
                {...this.props}
                removeClippedSubviews={false}
                contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                onEndReached={this._genRows}
                ref={(el: ?ListView) => (this._root = el)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex:1,
        height:height
    },
    row: {
        margin: 8,
        padding: 16,
        borderRadius: 3,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'rgba(0, 0, 0, .4)',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    OrderText:{
        "color":"#222222",
        "fontFamily":"Roboto",
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        "fontWeight":"400",
    },
    stepIndicator: {
        marginVertical:10,
        paddingHorizontal:10
    },
    statuscontainer: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#f8f8f8'
    },
});