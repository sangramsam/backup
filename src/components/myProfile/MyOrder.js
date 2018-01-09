import React, {PureComponent} from 'react';
import {
    TextInput,
    Text,
    TouchableOpacity,
    Image,Animated,
    View, StyleSheet, Dimensions, ScrollView, Platform
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import BasicListView from './BasicListView';
import Cancel from './Cancel';
import type { Route, NavigationState } from 'react-native-tab-view/types';


import {HeaderComponent} from '../header';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {MenuContext} from 'react-native-popup-menu';
import Modal from 'react-native-modal';
type State = NavigationState<
    Route<{
        key: string,
        title: string,
    }>
    >;
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

class MyOrder extends PureComponent {
    static title = 'Scroll views';
    static backgroundColor = '#fff';
    static tintColor = '#222';
    static appbarElevation = 0;

    state = {
        index: 0,
        routes: [
            { key: '1', title: 'CONFIRMED' },
            { key: '2', title: 'CANCEL' }
        ],
    };

    _first: ?BasicListView;
    _second: ?Cancel;

    _handleIndexChange = index =>
        this.setState({
            index,
        });

    _handleTabItemPress = ({ route }) => {
        if (route !== this.state.routes[this.state.index]) {
            return;
        }
        switch (route.key) {
            case '1':
                if (this._first) {
                    this._first.scrollTo({ y: 0 });
                }
                break;
            case '2':
                if (this._second) {
                    this._second.scrollTo({ y: 0 });
                }
                break;
        }
    };

    _renderLabel = props => ({ route, index }) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? '#ff9212' : '#999999')
        );
        const color = props.position.interpolate({
            inputRange,
            outputRange,
        });

        return (
            <Animated.Text style={[styles.label, { color }]}>
                {route.title}
            </Animated.Text>
        );
    };

    _renderHeader = props => (
        <TabBar
            {...props}
            pressColor="#ff9212"
            onTabPress={this._handleTabItemPress}
            renderLabel={this._renderLabel(props)}
            indicatorStyle={styles.indicator}
            tabStyle={styles.tab}
            style={styles.tabbar}
        />
    );

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return (
                    <BasicListView
                        ref={(el: ?BasicListView) => (this._first = el)}
                        style={[styles.page, { backgroundColor: '#fff' }]}
                    />
                );
            case '2':
                return (
                    <Cancel
                        ref={(el: ?Cancel) => (this._second = el)}
                        style={[styles.page, { backgroundColor: '#fff' }]}
                        initialListSize={1}
                    />
                );
            default:
                return null;
        }
    };
    render() {
        return (
            <MenuContext>
                <HeaderComponent name='My Order'/>
                <TabViewAnimated
                    style={[styles.container, this.props.style]}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </MenuContext>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicator: {
        backgroundColor: '#ff9212',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
    },
    tabbar: {
        backgroundColor: '#f8f8f8',
    },
    tab: {
        opacity: 1,
        width: width/2,
    },
    page: {
        backgroundColor: '#f9f9f9',
    },
});
export {MyOrder};