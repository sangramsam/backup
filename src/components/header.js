import React, {Component} from 'react';
import {Image, ScrollView, Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';
import Icons from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather'
import {Currency} from './Currency';

const {ContextMenu} = renderers;

class HeaderComponent extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {renderer: ContextMenu};
    }

    onPopupEvent = (eventName, index) => {
        if (eventName !== 'itemSelected') return;
        if (index === 0) this.onEdit();
        else this.onRemove();
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: this.props.backColor ? this.props.backColor : "white",
                paddingRight: Platform.OS === 'ios' ? 10 : 10,
                paddingLeft: Platform.OS === 'ios' ? 10 : 10,
                maxHeight: 70
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: Platform.OS === 'ios' ? 15 : 0
                }}>
                    <View style={{flex: 1.5, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <TouchableOpacity onPress={() => {
                            console.log("called");
                            Actions.pop()
                        }} style={{
                            flex:1,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <FeatherIcons name="arrow-left" size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginLeft:'7%'}}>

                        {this.props.headerProps=='notactive'?<Image resizeMode='contain' source={require('../image/logo-copy.png')} style={{height: 40}}/>:<Image source={require('../image/green_logo.png')} resizeMode='contain' style={{height: 40}}/>}
                    </View>
                    <View style={{flex: 16, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 20,fontSize:16,fontWeight:'700'}}>{this.props.name}</Text>
                    </View>
                    {this.props.gallary=='active'? <MaterialIcon name="share" size={20} color="#222"/>: <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-end'}}>
                            { this.props.hide?<Icons name='cross' size={30} color='#969696'/>: <Menu>
                                <MenuTrigger customStyles={triggerStyles}>
                                    <Image source={require('../image/dropdown.png')} resizeMode='contain'
                                           style={{height: 20}}/>
                                </MenuTrigger>
                                <MenuOptions customStyles={optionsStyles}>
                                    <MenuOption onSelect={() => Actions.Myprofile()}>
                                        <View style={{flex: 1, flexDirection: "row"}}>
                                            <View style={{flex: 0.3}}>
                                                <Icon name="account-circle" size={25} color="#666666"/>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <Text style={{fontSize:13, fontFamily: 'Roboto'}}>
                                                    My Account
                                                </Text>
                                            </View>
                                        </View>
                                    </MenuOption>
                                    <MenuOption>
                                        <View style={{flex: 1, flexDirection: "row"}}>
                                            <View style={{flex: 0.3}}>
                                                <MaterialIcon name="location-on" size={25} color="#666666"/>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <Text style={{fontSize:13, fontFamily: 'Roboto'}}>
                                                    Track Order
                                                </Text>
                                            </View>
                                        </View>
                                    </MenuOption>
                                    <MenuOption>
                                        <View style={{flex: 1, flexDirection: "row"}}>
                                            <View style={{flex: 0.3}}>
                                                <MaterialIcon name="account-circle" size={25} color="#666666"/>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <Text style={{fontSize:13, fontFamily: 'Roboto'}}>
                                                    Franchise Enquiry
                                                </Text>
                                            </View>

                                        </View>
                                    </MenuOption>
                                    <MenuOption>
                                        <View style={{flex: 1, flexDirection: "row"}}>
                                            <View style={{flex: 0.3}}>
                                                <Icon name="human-male-female" size={25} color="#666666"/>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <Text style={{fontSize:13, fontFamily: 'Roboto'}}>
                                                    Wedding Enquiry
                                                </Text>
                                            </View>

                                        </View>
                                    </MenuOption>
                                    <MenuOption onSelect={()=>Actions.Currency()}>
                                        <View style={{flex: 1, flexDirection: "row"}}>
                                            <View style={{flex: 0.3}}>
                                                <Icon name="wallet" size={25} color="#666666"/>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center'}}>
                                                <Text style={{fontSize:13, fontFamily: 'Roboto'}}>
                                                    Currency:INR
                                                </Text>
                                            </View>
                                            <View style={{flex: 0.2}}>
                                                <IonicIcon name="ios-arrow-down" size={25}/>
                                            </View>
                                        </View>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>}
                        </View> }


                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container2: {
        flexDirection: 'column',
        padding: 10
    },
    backdrop: {
        backgroundColor: 'red',
        opacity: 0.5,
    },
    anchorStyle: {
        backgroundColor: 'blue',
    },
});
const triggerStyles = {
    triggerWrapper: {
        flex: 1,
        width: 40,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    triggerTouchable: {
        activeOpacity: 70,
        style: {
            flex: 1,
        },
    },
};

const optionsStyles = {
    optionsContainer: {
        backgroundColor: 'white',
        padding: 5,
        marginTop: 15,
        borderRadius: 5
    },
    optionWrapper: {
        backgroundColor: 'white',
        margin: 5,
    },
    optionTouchable: {
        underlayColor: 'white',
        activeOpacity: 70,
    },
    optionText: {
        color: 'black',
    },
};

const optionStyles = {
    optionTouchable: {
        underlayColor: 'red',
        activeOpacity: 40,
    },
    optionWrapper: {
        backgroundColor: 'pink',
        margin: 5,
    },
    optionText: {
        color: 'black',
    },
};
const menuContextStyles = {
    menuContextWrapper: styles.container2,
    backdrop: styles.backdrop,
};
export {HeaderComponent};