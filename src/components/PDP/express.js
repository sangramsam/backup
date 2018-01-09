import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
class Express extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    backgroundColor: 'white',
                    marginBottom: 15
                }}>
                    <View style={{
                        flex: 2,
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{fontSize: 16, color: "#000", fontFamily: "Roboto"}}>Enigmatic 8 Red Roses</Text>
                        <View style={{flexDirection: "row", flex: 1, marginTop: 5}}>
                            <View style={{flex: 1}}>
                                <Text style={{
                                    fontSize: 14,
                                    color: "#feb614",
                                    fontFamily: "Roboto",
                                    fontWeight: 'bold'
                                }}>3.3</Text>
                            </View>
                            <View style={{flex: 4, alignItems: 'center'}}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    starColor={'#feb614'}
                                    starSize={19}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                            <View style={{flex: 3.5}}>
                                <Text style={{color: '#2179d0', fontSize: 15}}>11
                                    Reviews</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: "row",}}>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                            <Text>₹</Text>
                        </View>
                        <View style={{flex: 2, alignItems: 'flex-end'}}>
                            <Text style={styles.currency}>1499</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>Actions.Varinant()}>
                    <View style={{
                        flex: 0,
                        backgroundColor: '#f8f8f8',
                        borderRadius: 5,
                        borderColor: '#adadad',
                        borderWidth: 1,
                        flexDirection: 'row',
                        padding: 20

                    }}>

                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'Roboto'
                            }}>Small</Text>
                            <Text style={{fontSize: 20, fontFamily: 'Roboto'}}>Enigmatic 8 Red
                                Roses</Text>
                        </View>
                        <View style={{
                            flex: 0.2,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            <Image source={require('../../image/right_arrow.png')}
                                   resizeMode="center"/>
                        </View>

                    </View>
                </TouchableOpacity>
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
    export {Express}