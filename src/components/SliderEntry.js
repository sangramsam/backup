import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './../styles/SliderEntry.style';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SliderEntry extends Component {

    constructor (props) {
        super(props);
        this.state = {
            starCount: 3,
        }
    }
    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked '${title}'`); }}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    <View style = {{
                        flex: 3,
                        flexDirection: 'row'
                    }}>
                        <View style = {{
                            flex: 2,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}>
                            <Text style = {{
                                fontSize: 14,
                            }}>
                                Special Combo
                            </Text>
                        </View>
                        <View style = {{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start'
                        }}>
                            <View style = {{
                                marginRight: 5
                            }}>
                                <Text style = {{
                                    color: '#ff9212',
                                }}>4.1</Text>
                            </View>
                            <View>
                                <StarRating
                                    disabled={true}
                                    emptyStar={'ios-star-outline'}
                                    fullStar={'ios-star'}
                                    halfStarEnabled = {true}
                                    halfStar={'ios-star-half'}
                                    iconSet={'Ionicons'}
                                    starColor = {'#ff9212'}
                                    starSize = {15}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                        </View>
                        <View style = {{
                            flex: 1,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end'
                        }}>
                            <Text style = {{
                                fontSize: 18
                            }}>₹ 599</Text>
                        </View>
                    </View>



                    {/* <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text> */}
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style = {{
                        flex: 2,
                    }}>
                        <View style = {{
                            paddingHorizontal: 5,
                            justifyContent: 'center'
                        }}>
                            <Text><Text style = {{color: '#42a36b', fontSize: 12}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#4F8EF7" /></Text></Text>
                        </View>
                    </View>
                    <View style = {{
                        flex: 2,
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}>
                        <View style = {{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            marginRight: 10,

                        }}>
                            <Text style = {{
                                fontSize: 14
                            }}>₹ 1799</Text>
                        </View>
                        <View style = {{
                            flex: 0.7,
                            justifyContent: 'center',
                            alignItems: 'flex-end',

                        }}>
                            <Text style = {{
                                color: 'red',
                            }}>
                                50% off
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
