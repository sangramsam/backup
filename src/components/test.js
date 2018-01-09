import React from 'react';

import Accordion from 'react-native-collapsible/Accordion';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Dimensions,
    Image
} from 'react-native';
import moment from 'moment';
import Calender from './calender';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const SECTIONS = [
    {
        title: 'STANDARD DELIVERY',
        content: ['8 AM - 12 PM',],
        icon: "truck",
        id:1,
        color:'#009d43'
    },
    {
        title: 'MIDNIGHT DELIVERY',
        content: ['8 AM - 12 PM',],
        icon: "moon",
        id:2,
        color:'#666'
    },
    {
        title: 'MORNING DELIVERY',
        content: ['8 AM - 12 PM',],
        icon: "white-balance-sunny",
        id:3,
        color:'#ff9212'
    }, {
        title: 'FIXED DAY DELIVERY',
        content: ['8 AM - 12 PM'],
        icon: "timer",
        id:4,
        color:'#2379ce'
    }
];

class Example extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            rows: [],
            track:0,
            active:0,
        };
        this.rowPressed = this.rowPressed.bind(this);
        //this.activeTab = this.activeTab.bind(this);
    }

    rowPressed( i) {
        this.setState({track:i});
        alert(i);
    }

    componentWillMount() {
        let rows = [];
        for (let i = 0; i <= 15; i++) {
            let days = moment().add(i, 'days').format("DDD");
            let weeks = moment().add(i, 'days').format("ddd");
            let tmp = {};
            tmp.days = days;
            tmp.weeks = weeks;
            rows.push(tmp)
        };
        this.setState({rows: rows});
    }

    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <View style={{flex: 0.5}}>
                    {section.id===2?<Entypo name={section.icon} color={section.color} size={20}/>:<MaterialCommunityIcons name={section.icon} size={20} color={section.color}/>}
                </View>
                <View style={{flex: 2}}>
                    <Text style={[styles.headerText,{color:section.color}]}>{section.title}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Image source={require('../image/info_outline_grey_18x18.png')} resizeMode='contain'/>
                    </View>
                    <View style={{
                        flex: 2,
                        backgroundColor: 'green',
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        padding: 5
                    }}>
                        <Text style={{color: 'white'}}>Free</Text>
                    </View>
                </View>
            </View>
        );
    }
    _activeTab(i){
        alert('called')
        this.setState({active:i})
    }
    render() {
         let temp=(section)=>{
            return (
                <View style={styles.content}>
                    <TouchableHighlight onPress={()=>{this._activeTab(section.id)}}>
                        <View style={{flex: 1, padding: 5}}>
                            <Text style={[{color: '#009d43', borderColor: '#999', borderWidth: 1, padding: 8, borderRadius: 5, fontSize: 15}]}>{section.content}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{flex: 1, padding: 5}}>
                        <Text style={[{color: '#009d43', borderColor: '#999', borderWidth: 1, padding: 8, borderRadius: 5, fontSize: 15}]}>{section.content}</Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={styles.wrapper}>
                <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flex:1,flexDirection: 'row',backgroundColor: 'white',padding:20}}>
                        <View style={{flex: 9, alignItems: 'center',justifyContent:'center'}}>
                            <Text style={{fontFamily:'Roboto',fontSize:15,fontWeight:'500'}}>Select order delivery date and time</Text>
                        </View>
                        <TouchableOpacity style={{flex:3,height:20,alignSelf:'stretch',alignItems:'flex-end',justifyContent:'center'}} onPress={()=>Actions.pop()}>
                        <View style={{flex: 1}}>
                            <Ionicons name="ios-close" size={30}/>
                        </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex: 9, backgroundColor: 'pink'}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <ScrollView>
                            <View style={{flex: 1, backgroundColor: 'red'}}>
                                <View style={{flex: 1, flexDirection: 'column', minHeight: height, paddingRight: 0}}>
                                    {Object.keys(this.state.rows).map((key, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                onPress={() => this.rowPressed(index)} key={index}>
                                                <View style={[styles.dateCard,this.state.track=== index && styles.textInputAlt]}>
                                                    <Text style={[styles.dateText, this.state.track=== index && styles.textColor]}>{this.state.rows[key].days}</Text>
                                                    <Text style={[styles.dateText, {fontSize: 12}, this.state.track=== index && styles.textColor]}
                                                    >{this.state.rows[key].weeks}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })}
                                    <View style={styles.dateCard}>
                                    <TouchableOpacity onPress={()=>{Actions.Calender({param1: 'hello'})}}>
                                        <Icon name="calendar" size={20} color="green"/>
                                    </TouchableOpacity>
                                    </View>


                                </View>
                            </View>
                        </ScrollView>
                        <View style={{flex: 20, backgroundColor: '#ebeef4'}}>
                            <View style={{padding: 8}}>
                            <Accordion underlayColor={"transparent"}
                                       sections={SECTIONS}
                                       renderHeader={this._renderHeader}
                                       renderContent={temp}
                            />
                            </View>
                            <View style={{height:50,justifyContent:'center',alignItems:'center',flex:1,width:'100%',backgroundColor:'#ff9212',position:'absolute',bottom:0}}>
                                <Text style={{fontSize:20,fontFamily:'Roboto',color:'white'}}>CONFIRM DATA AND TIME</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1
    },
    dateCard: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        padding: 20,
        backgroundColor: 'white'
    },
    dateText: {
        color: '#000',
        fontSize: 25,
        fontFamily: 'Roboto'
    },
    header: {
        padding: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 5
    },
    content: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        flex: 1,
        justifyContent: 'space-around'
    },
    headerText: {
        fontWeight: 'bold',
        fontFamily:'Roboto'
    },
    textInputAlt: {
        backgroundColor: '#1e9c42'
    },
    textColor: {
        color: '#fff'
    }
});
export {Example}