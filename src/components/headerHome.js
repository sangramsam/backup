import React, {Component} from 'react';
import {Image, ScrollView, Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';


import Menu, {
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';
const {ContextMenu} = renderers;

export default class HeaderHome extends Component
{
    constructor(props, ctx) {
        super(props, ctx);
        this.state = {renderer: ContextMenu};
    }
    render(){
        return (
            <View style={{
                position:'relative',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxHeight: 55,
                flexDirection: 'row',
                marginTop: Platform.OS === 'ios' ? 20 : null,
                backgroundColor:'#fff',
                shadowColor: 'rgba(0, 0, 0, 0.36);',
                shadowOffset: { width: 10, height: 10 },
                shadowOpacity: 0.7,
                shadowRadius: 5,
                elevation: 3,
                borderWidth: 0,


            }}>

                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        {!this.props.arrow?<TouchableOpacity onPress={this.props.openDrawer}><Image
                            source={require('../image/11.png')} resizeMode='contain'
                            style={{width: 25, height: 30}}/></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.pop()}><Image
                                source={require('../image/back.png')} resizeMode='contain'
                                style={{width: 20, height: 30}}/></TouchableOpacity>}
                    </View>
                    <View style={{flex: 4, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Image source={require('../image/logo.png')} resizeMode='contain'
                               style={{width: 150, height: 48}}/>
                    </View>

                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: Platform.OS === 'ios' ? '6%' : '1%'
                }}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcon name="search"  size={25} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{
                          //Actions.Cart();
                          Actions.CartEmpty();
                        }}>

                            <MaterialIcon name="shopping-cart"  size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:Platform.OS === 'ios' ?'5%':null}}>
                        <Menu>
                            <MenuTrigger customStyles={triggerStyles}>
                                <Icon name="dots-vertical"  size={25} />
                            </MenuTrigger>
                            <MenuOptions customStyles={optionsStyles}>
                                <MenuOption onSelect={() => Actions.Myprofile()}>
                                    <View style={{flex: 1, flexDirection: "row"}}>
                                        <View style={{flex: 0.3}}>
                                            <Icon name="account-circle" size={25} />
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
                        </Menu>
                    </View>
                </View>
            </View>
        )
}
}
const styles = StyleSheet.create({
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