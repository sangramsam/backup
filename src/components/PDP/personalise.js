import React from 'react';
import {
    Text,
    StyleSheet, Image,
    View, Dimensions, TouchableOpacity,
} from 'react-native';


const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class Personalise extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    marginBottom: 15
                }}>
                    <View style={{flex: 1, flexDirection: "row",}}>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text>₹</Text>
                        </View>
                        <View style={{flex: 2, alignItems: 'flex-start'}}>
                            <Text style={[styles.currency, {marginLeft: 10}]}>1499</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', alignSelf: 'stretch', padding: 10}}>
                        <View>
                            <Text style={{fontSize: 15, color: 'black', fontFamily: 'Roboto'}}>Shining Memory
                                Personalized Lamp</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    currency: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "300",
        color: "black"

    },
});
export {Personalise}