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
                backgroundColor: this.props.backColor ? this.props.backColor:"white",
                paddingRight: Platform.OS === 'ios' ? 10 : 20,
                paddingLeft: Platform.OS === 'ios' ? 10 : 20,
                maxHeight: 70
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: Platform.OS === 'ios' ? 15 : 0
                }}>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <TouchableOpacity onPress={() => {
                            console.log("called");
                            Actions.pop()
                        }} style={{
                            alignSelf:'stretch',
                            padding:15
                        }}>
                            <Image source={require('../image/back.png')} resizeMode='contain'  />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Image source={require('../image/logo-copy.png')} resizeMode='center'/>
                    </View>
                    <View style={{flex: 20, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 20}}>{this.props.name}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Menu>
                            <MenuTrigger customStyles={triggerStyles}>
                                <Image source={require('../image/dropdown.png')} resizeMode='contain' style={{height:20}} />
                            </MenuTrigger>
                            <MenuOptions >
                                <MenuOption onSelect={() => Actions.Myprofile()}>
                                    <Text>
                                        MyProfile
                                    </Text>
                                </MenuOption>
                                <MenuOption >
                                    <Text>
                                        Delete
                                    </Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
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
        flex:1,
        width:30,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'flex-end',
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
        backgroundColor: 'green',
        padding: 5,
    },
    optionsWrapper: {
        backgroundColor: 'purple',
    },
    optionWrapper: {
        backgroundColor: 'yellow',
        margin: 5,
    },
    optionTouchable: {
        underlayColor: 'gold',
        activeOpacity: 70,
    },
    optionText: {
        color: 'brown',
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