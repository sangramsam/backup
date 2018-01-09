/* @flow */

import React, { PureComponent } from 'react';
import {ListView, View, Text, StyleSheet, Image, Dimensions, ScrollView, Platform,ImageBackground} from 'react-native';
type State = {
    data: Array<number>,
    dataSource: ListView.DataSource,
};

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
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
            <View style={{flex:1,backgroundColor:"red",flexDirection:'column',position:'relative'}}>
                <View style={{backgroundColor:'white',padding:10}}>
                    <View style={{borderWidth:4,borderColor:"#a6a6a6",padding:10,flexDirection:'row'}}>
                        <View style={{flex:1}}>
                        </View>
                        <View style={{flex:3}}>
                            <Text style={styles.VText}>FNP100KLY </Text>
                            <Text style={styles.VText}>Order ID: 65895601 </Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={[styles.VText,{fontSize:30}]}>₹100</Text>
                        </View>
                        <Image source={require('../../image/voucher.png')}     style={{position:'absolute',top:-14,left:2,width:50,height:90}} />
                    </View>

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
    VText:{
        "color":"#a6a6a6",
        "fontFamily":"Roboto",
        fontSize: Platform.OS === 'ios' ? 17 : 18,
        "fontWeight":"700",
    }
});