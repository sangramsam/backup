import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Platform,
    FlatList,
    TextInput,
    StyleSheet,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Picker,
    Button,
    StatusBar,
    Dimensions
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {MenuContext} from 'react-native-popup-menu';
import {sliderWidth, itemWidth} from './../styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles, {colors} from './../styles/index.style';
import {ENTRIES1, ENTRIES2} from './entries';
import HeaderHome from './headerHome';
import Swiper from 'react-native-swiper';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Tabs from 'react-native-tabs';
const width = Dimensions.get('window').width;
import IconsMaterial from 'react-native-vector-icons/MaterialIcons';
import IconsCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const SLIDER_1_FIRST_ITEM = 1;

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            isModalVisible: false,
            slider1Ref: null,
            entries: '3',
            starCount: 3,
            loading: false,
            data: [{
                name: 'saurav',
                text: 'BIRTHDAY',
                color: '#e74547',
                img: '../images/assests/popular.png',
            },
                {
                    name: 'gaurav',
                    text: 'FLOWERS',
                    img: '../images/assests/popular.png',
                    color: '#f19215'
                },
                {
                    name: 'parth',
                    text: 'CAKES',
                    img: '../images/assests/popular.png',
                    color: '#a05052'
                },
                {
                    name: 'sangram',
                    text: 'GIFTS',
                    img: '../images/assests/popular.png',
                    color: 'green'
                },
                {
                    name: 'gaurav',
                    text: 'GIFTS',
                    color: '#3e79d0'
                },
                {
                    name: 'parth',
                    text: 'PLANTS',
                    color: 'red'
                },
                {
                    name: 'sangram',
                    text: 'GIFTS',
                    color: '#3e79d0'
                }

            ],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            enable: true
        };
    }

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
    };

    _renderItem({item, index}) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    get example1() {
        const {slider1ActiveSlide, slider1Ref} = this.state;
        return (
            <View>
                <View style={styles.exampleContainer}>
                    <Text style={styles.title}>Example 1</Text>
                    <Text style={styles.subtitle}>
                        No momentum | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots
                    </Text>
                    <Carousel
                        ref={(c) => {
                            if (!this.state.slider1Ref) {
                                this.setState({slider1Ref: c});
                            }
                        }}
                        data={ENTRIES1}
                        renderItem={this._renderItemWithParallax}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        hasParallaxImages={true}
                        firstItem={SLIDER_1_FIRST_ITEM}
                        inactiveSlideScale={0.94}
                        inactiveSlideOpacity={0.7}
                        enableMomentum={false}
                        containerCustomStyle={styles.slider}
                        contentContainerCustomStyle={styles.sliderContentContainer}
                        loop={true}
                        loopClonesPerSide={2}
                        autoplay={true}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
                    />
                    <Pagination
                        dotsLength={ENTRIES1.length}
                        activeDotIndex={slider1ActiveSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor={'rgba(255, 255, 255, 0.92)'}
                        dotStyle={styles.paginationDot}
                        inactiveDotColor={colors.black}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={slider1Ref}
                        tappableDots={!!slider1Ref}
                    />
                </View>
            </View>
        );
    }

    get example2 () {
        return (

            <View style={styles.exampleContainer}>
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    paddingHorizontal: 10
                }}>
                    <View style = {{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: '#000',
                            fontSize: 18,
                            fontWeight: '500'
                        }}>Birthday Gifts</Text>
                    </View>
                    <View style = {{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}>
                        <TouchableOpacity style = {{borderColor: '#389c44', borderWidth: 1, flex: 1, flexDirection: 'row', backgroundColor: 'transparent', padding: 5, borderRadius: 2, paddingRight: 10, paddingLeft: 10}}>
                            <Text style = {{color: '#389c44', justifyContent: 'center', paddingTop:1, fontSize: 16}}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }

    /*get gradient () {
        return (
            <LinearGradient
                colors={[colors.background1, colors.background2]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
            />
        );
    }*/

    render() {
        var ITEM_HEIGHT = 80;
        console.log(this.props);
        return (
            <MenuContext>
                <View>
                    <HeaderHome openDrawer={this.context.drawer.open}/>
                    <ScrollView style = {{
                        marginBottom: 50
                    }}>
                        <View style={{
                            flex: 1,
                            width: width,
                            backgroundColor: '#fff',
                            marginTop: 0,
                            paddingLeft: 10,
                            padding: 15,
                            paddingBottom:20
                        }}>
                            <FlatList style={{flex: 1}} horizontal={true} showsHorizontalScrollIndicator={false}
                                      onScrollEnd={() => {
                                          console.log('end Reached')
                                      }} onEndReachedThreshold={300}
                                      data={this.state.data}
                                      getItemLayout={(data, index) => (
                                          {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                                      )}
                                      renderItem={({item}) => (
                                          <TouchableOpacity onPress={()=>{Actions.Category()}} style={{
                                              flex: 0.4, flexDirection: 'column',
                                              shadowColor: 'rgba(0, 0, 0, 0.36);',
                                              shadowOffset: {width: 0, height: 0},
                                              shadowOpacity: 0.6,
                                              shadowRadius: 5,
                                              margin: 4,
                                              width: 90,
                                              borderRadius: 3,
                                              elevation: 2
                                          }}>
                                              <View style={{
                                                  borderTopRightRadius: 5,
                                                  borderTopLeftRadius: 5,
                                                  padding: 5,
                                                  flex: 2,
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  backgroundColor: item.color,
                                                  maxHeight: 50
                                              }}>

                                                  <Image source={require('../image/ballon.png')} resizeMode='contain'
                                                         style={{width: 20, height: 430}}/>

                                              </View>
                                              <View style={{
                                                  flex: 3,
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                  padding: 6
                                              }}>
                                                  <Text style={{
                                                      fontSize: 13,
                                                      fontFamily: 'Roboto'
                                                  }}>{item.text}</Text>
                                              </View>
                                          </TouchableOpacity>
                                      )}
                                      onEndReached={(ITEM_HEIGHT) => {
                                          this.setState({enable: false})
                                      }}
                                      {...this.props}

                            />

                            <LinearGradient
                                colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']}
                                style={styles.linearGradient} start={{x: 2, y: 1}}
                                end={{x: 0, y: 0}}>

                            </LinearGradient>

                            {this.state.enable ?
                                <View style={{position: 'absolute', top: 20, fontSize: 60, right: 10, flex: 1}}><Image
                                    source={require('../image/question.png')}/>
                                </View> : null}
                        </View>
                        <View style={{
                            flex: 1, flexDirection: 'column', backgroundColor: '#ebeef3', marginTop:2,
                            padding: 10,paddingTop:0
                        }}>
                            <View style={{height: 300}}>
                                <Swiper style={styles.wrapper} showsButtons={false} paginationStyle={{bottom: 10, left: null, right: 20}}
                                        dot={<View style={{
                                            backgroundColor: '#fff',
                                            width: 6,
                                            height: 6,
                                            borderRadius: 4,
                                            marginLeft: 6,
                                            marginRight: 6,
                                            marginTop: 3,
                                            marginBottom: 3
                                        }}/>}
                                        activeDot={<View style={{
                                            backgroundColor: '#fff',
                                            width: 8,
                                            height: 8,
                                            borderWidth: 1,
                                            borderColor: '#000',
                                            borderRadius: 4,
                                            marginLeft: 3,
                                            marginRight: 3,
                                            marginTop: 3,
                                            marginBottom: 3
                                        }}/>}>
                                    <View style={[styles.slide1]}>
                                        <Image style={{width: width, height: 400}}
                                               source={require('../image/layer45.png')}
                                        />
                                    </View>
                                    <View style={styles.slide1}>
                                        <Image style={{width: width, height: 400}}
                                               source={require('../image/layer45.png')}
                                        />
                                    </View>
                                    <View style={styles.slide3}>
                                        <Image style={{width: width, height: 400}}
                                               source={require('../image/layer45.png')}
                                        />
                                    </View>
                                </Swiper>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                height: 120,
                                backgroundColor: '#fff',
                                shadowColor: 'black',
                                marginTop: 20,
                                margin: 4,
                                shadowColor: Platform.OS === 'ios' ? '#fff' : '#000',
                                shadowOffset: {width: 50, height: 2},
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                // elevation: 1,
                                borderRadius: 5
                            }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image style={{width: 45, height: 45, marginTop: -10}}
                                           source={require('../image/arrivals.png')}
                                    />
                                    <Text style={styles.commanText}>New Arrivals</Text>
                                </View>
                                <View style={{
                                    height: 50,
                                    flex: 0.1,
                                    borderStyle: 'solid',
                                    borderLeftWidth: 1,
                                    alignItems: 'center',
                                    lineHeight: 10,
                                    alignSelf: "center",
                                    justifyContent: 'center',
                                    borderColor: '#efefef'
                                }}></View>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image style={{width: 45, height: 45, marginTop: -10}}
                                           source={require('../image/popular.png')}
                                    />
                                    <Text style={styles.commanText}>Most popular</Text>
                                </View>
                                <View style={{
                                    height: 50,
                                    flex: 0.1,
                                    borderStyle: 'solid',
                                    borderLeftWidth: 1,
                                    alignItems: 'center',
                                    lineHeight: 10,
                                    alignSelf: "center",
                                    justifyContent: 'center',
                                    borderColor: '#efefef'
                                }}></View>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image style={{width: 45, height: 45, marginTop: -10}}
                                           source={require('../image/delivery.png')}
                                    />
                                    <Text style={styles.commanText}>Same Day Delivery</Text>
                                </View>
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                padding: 15,
                                margin: 5

                            }}>
                                <View>
                                    <Text style={{fontSize: 25}}>Hi,</Text>
                                </View>
                                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{
                                        fontFamily: 'Roboto'
                                    }}>Set your prefence help us give you
                                    </Text>
                                    <Text style={{}}>best offer and sugestions.</Text>
                                </View>
                                <View style={{flex: 1, marginTop: 10}}>
                                    <TouchableOpacity style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        backgroundColor: '#f19215',
                                        padding: 10,
                                        borderRadius: 2,
                                        paddingRight: 20,
                                        paddingLeft: 20
                                    }}>
                                        <Text
                                            style={{
                                                fontFamily: 'Roboto',
                                                color: '#fff',
                                                justifyContent: 'center',
                                                paddingTop: 1,
                                                fontSize: 16
                                            }}>LETS
                                            GO</Text>
                                        <Text style={{justifyContent: 'center', paddingLeft: 10, paddingTop: 1}}><Icon
                                            name="ios-arrow-forward" size={20} color="#fff"/></Text>

                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff', padding: 20, margin: 4}}>
                                <View>
                                    <Text style={{fontSize: 15,fontFamily: 'Roboto'}}>Your Gift to Hardeep will be delivered soon....</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    marginTop: 15
                                }}>
                                    <Progress.Bar progress={0.6} width={300} color={'#42a36b'}/>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 15,}}>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 12, color: '#666666', fontFamily: 'Roboto'}}>
                                            Confirmed 5th Sep 11.30
                                        </Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 12, color: '#666666',fontFamily: 'Roboto'}}>
                                            Processing
                                        </Text>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontSize: 12}}>
                                            On the Way
                                        </Text>
                                    </View>
                                    <View style={{flex: 1.2, flexDirection: 'column'}}>
                                            <Text style={{ fontFamily: 'Roboto',fontSize:15}}>Delivery</Text>
                                            <Text style={{color: '#42a36b', fontFamily: 'Roboto',fontSize:Platform.OS==='ios'?11:13}}>7th Sep' 17 09.00-21.00 Hrs</Text>
                                    </View>
                                </View>
                                <View style={{flex: 1, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity style={{
                                        borderColor: '#f6c581',
                                        borderWidth: 1,
                                        flex: 1,
                                        flexDirection: 'row',
                                        backgroundColor: 'transparent',
                                        padding: 10,
                                        borderRadius: 2,
                                        paddingRight: 20,
                                        paddingLeft: 20
                                    }}>
                                        <Text style={{
                                            color: '#f19215',
                                            justifyContent: 'center',
                                            paddingTop: 1,
                                            fontSize: 16,
                                            fontFamily: 'Roboto'
                                        }}>SEE IT ONE THE WAY</Text>
                                        <Text style={{
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                            paddingTop: 1,
                                            fontFamily: 'Roboto'
                                        }}><FontAwesomeIcon name="map-marker" size={20} color="#f19215"/></Text>

                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{backgroundColor: '#fff', margin: 8}}>
                                {/* <StatusBar
                  translucent={true}
                  backgroundColor={'rgba(0, 0, 0, 0.3)'}
                  barStyle={'light-content'}
                /> */}
                                {/*{ this.gradient }*/}
                                <ScrollView
                                    style={styles.scrollview}
                                    contentContainerStyle={styles.scrollviewContentContainer}
                                    indicatorStyle={'white'}
                                    scrollEventThrottle={200}
                                    directionalLockEnabled={true}
                                >
                                    {/* { this.example1 } */}
                                    {this.example2}
                                </ScrollView>

                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 15,
                                paddingBottom: 10
                            }}>
                                <Text style={{
                                    fontSize: 26,
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontFamily: 'Roboto'
                                }}>
                                    Popular Gifts
                                </Text>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 16,
                                    marginTop: 2,
                                    fontFamily: 'Roboto'
                                }}>
                                    Top picks curated just the way you want
                                </Text>
                            </View>
                            <View style={{marginTop: 10, flexDirection: 'column', backgroundColor: '#ebeef4'}}>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    padding: 10
                                }}>
                                    <View style={styles.card}>
                                        <View style={styles.cardInner}>
                                            <TouchableOpacity onPress={() => {
                                                Actions.PDP({productType: "express"})
                                            }} style={{
                                                flex: 6
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    padding: 10
                                                }}>
                                                    <Image
                                                        resizeMode='contain'
                                                        style={{flexShrink: 1, flex: 1, width: null}}
                                                        source={require('../image/chocolate.png')}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{
                                                flex: 2,

                                            }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingRight: '2%'
                                                }}>
                                                    <View style={{
                                                        flex: 4,
                                                        paddingLeft: 5,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text style={{fontFamily: 'Roboto', fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                            Enigmatic 20 Red...
                                                        </Text>
                                                    </View>
                                                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                                                        <Text style={{
                                                            fontSize: 13,
                                                            fontFamily: 'Roboto'
                                                        }}>₹ 44</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 5
                                                }}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={{
                                                            color: '#ff9212',
                                                            marginTop: 2,
                                                            fontSize: 14
                                                        }}>3.5</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 5,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <StarRating
                                                            disabled={true}
                                                            emptyStar={'ios-star-outline'}
                                                            fullStar={'ios-star'}
                                                            halfStarEnabled={true}
                                                            halfStar={'ios-star-half'}
                                                            iconSet={'Ionicons'}
                                                            starColor={'#ff9212'}
                                                            starSize={16}
                                                            maxStars={5}
                                                            rating={this.state.starCount}
                                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                padding: 4,
                                                flex: 1.5,
                                                minHeight: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <TouchableOpacity onPress={() => {
                                                            this.setState({isModalVisible: true})
                                                        }}>
                                                            <Text><Text style={{color: '#42a36b', fontSize: 13, fontFamily: 'Roboto'}}>Get it
                                                                on
                                                                29th Nov 6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                                name="ios-information-circle-outline" size={15}
                                                                color="#42a36b"/></Text></Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Modal isVisible={this.state.isModalVisible}>
                                                        <View
                                                            style={{flex: 1, justifyContent: 'center', marginTop: 150}}
                                                            backdropOpacity={0.5}>
                                                            <View style={{
                                                                borderRadius: 5,
                                                                flexDirection: 'column',
                                                                height: 250,
                                                                backgroundColor: '#fff',
                                                                padding: 1.153
                                                            }}>
                                                                <View style={{
                                                                    flex: 0.5,
                                                                    backgroundColor: 'white',
                                                                    padding: 10,
                                                                    paddingLeft: 45,
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'center',
                                                                    borderBottomColor: '#ddd',
                                                                    borderBottomWidth: 1
                                                                }}>
                                                                    <Text style={{
                                                                        color: '#666666',
                                                                        fontFamily: 'Roboto',
                                                                        fontSize: 20,
                                                                        fontWeight: '500'
                                                                    }}>DELIVERY OPTIONS</Text>
                                                                </View>
                                                                <View style={{
                                                                    flex: 4,
                                                                    backgroundColor: 'white',
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'center',
                                                                    paddingLeft: 30,
                                                                    paddingTop: 10,
                                                                    paddingBottom: 10
                                                                }}>
                                                                    <View style={{flexDirection: 'row', flex: 1}}>
                                                                        <View style={{flex: 0.3}}>
                                                                            <Icons name="dot-single" size={40}
                                                                                   color="#666666"/>
                                                                        </View>
                                                                        <View
                                                                            style={{flex: 2, justifyContent: 'center'}}>
                                                                            <Text style={styles.text}>Standard
                                                                                Delivery</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{flexDirection: 'row', flex: 1}}>
                                                                        <View style={{flex: 0.3}}>
                                                                            <Icons name="dot-single" size={40}
                                                                                   color="#666666"/>
                                                                        </View>
                                                                        <View
                                                                            style={{flex: 2, justifyContent: 'center'}}>
                                                                            <Text style={styles.text}>Morning
                                                                                Delivery</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{flexDirection: 'row', flex: 1}}>
                                                                        <View style={{flex: 0.3}}>
                                                                            <Icons name="dot-single" size={40}
                                                                                   color="#666666"/>
                                                                        </View>
                                                                        <View
                                                                            style={{flex: 2, justifyContent: 'center'}}>
                                                                            <Text style={styles.text}>Fixed Time
                                                                                Delivery</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{flexDirection: 'row', flex: 1}}>
                                                                        <View style={{flex: 0.3}}>
                                                                            <Icons name="dot-single" size={40}
                                                                                   color="#666666"/>
                                                                        </View>
                                                                        <View
                                                                            style={{flex: 2, justifyContent: 'center'}}>
                                                                            <Text style={styles.text}>Mid Night
                                                                                Delivery</Text>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                                <View style={{
                                                                    flex: 1,
                                                                    backgroundColor: '#f2f2f2',
                                                                    alignItems: 'flex-start',
                                                                    borderTopColor: '#ddd',
                                                                    borderTopWidth: 1,
                                                                    paddingLeft: 30,
                                                                    flexDirection: "row",
                                                                    paddingTop: 10
                                                                }}>
                                                                    <View style={{flex: 0.1, paddingLeft: 10}}>
                                                                        <Ionicons name="info-outline" size={20}
                                                                                  color="#37a85d"/>
                                                                    </View>
                                                                    <View style={{
                                                                        flex: 1,
                                                                        justifyContent: 'center',
                                                                        alignItems: 'flex-start'
                                                                    }}>
                                                                        <Text style={{
                                                                            fontFamily: 'Roboto',
                                                                            fontWeight: '500',
                                                                            color: '#37a85d',
                                                                            fontSize: 16,
                                                                            fontFamily: 'Roboto'
                                                                        }}>Delivered 24
                                                                            Times in last 24 Hrs.</Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <TouchableOpacity onPress={() => {
                                                                this.setState({isModalVisible: false})
                                                            }}>
                                                                <View style={{
                                                                    justifyContent: 'center',
                                                                    height: 100,
                                                                    backgroundColor: 'transparent',
                                                                    position: 'relative',
                                                                    top: 15,
                                                                    left: 140
                                                                }}>
                                                                    <Image source={require('../image/closeCircle.png')}
                                                                           style={{height: 30, width: 30}}/>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </Modal>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.cardInner}>
                                            <TouchableOpacity onPress={() => {
                                                Actions.PDP({productType: "cake"})
                                            }} style={{
                                                flex: 6
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    padding: 10
                                                }}>
                                                    <Image
                                                        resizeMode='contain'
                                                        style={{flexShrink: 1, flex: 1, width: null}}
                                                        source={require('../image/chocolate-cake-1kg_1.jpg')}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{
                                                flex: 2,

                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 4,
                                                        paddingLeft: 5,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text style={{fontFamily: 'Roboto',fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                            Enigmatic 20 Red...
                                                        </Text>
                                                    </View>
                                                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                                                        <Text style={{
                                                            fontSize: 13
                                                        }}>₹ 44</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 5
                                                }}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={{
                                                            color: '#ff9212',
                                                            marginTop: 2,
                                                            fontSize: 14
                                                        }}>3.5</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 5,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <StarRating
                                                            disabled={true}
                                                            emptyStar={'ios-star-outline'}
                                                            fullStar={'ios-star'}
                                                            halfStarEnabled={true}
                                                            halfStar={'ios-star-half'}
                                                            iconSet={'Ionicons'}
                                                            starColor={'#ff9212'}
                                                            starSize={16}
                                                            maxStars={5}
                                                            rating={this.state.starCount}
                                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                padding: 4,
                                                flex: 1.5,
                                                minHeight: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on
                                                            29th Nov 6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                            name="ios-information-circle-outline" size={15}
                                                            color="#42a36b"/></Text></Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.cardInner}>
                                            <TouchableOpacity onPress={() => {
                                                Actions.PDP({productType: "personalise"})
                                            }} style={{
                                                flex: 6
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    padding: 10
                                                }}>
                                                    <Image
                                                        resizeMode='contain'

                                                        style={{flexShrink: 1, flex: 1, width: null}}
                                                        source={require('../image/shining-memory-personalized-lamp_1.jpg')}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{
                                                flex: 2,

                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 4,
                                                        paddingLeft: 5,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text style={{fontFamily: 'Roboto',fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                            Enigmatic 20 Red...
                                                        </Text>
                                                    </View>

                                                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                                                        <Text style={{
                                                            fontSize: 13,
                                                            paddingRight: '2%'
                                                        }}>₹ 44</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 5
                                                }}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={{
                                                            color: '#ff9212',
                                                            marginTop: 2,
                                                            fontSize: 14,
                                                            fontFamily: 'Roboto'
                                                        }}>3.5</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 5,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <StarRating
                                                            disabled={true}
                                                            emptyStar={'ios-star-outline'}
                                                            fullStar={'ios-star'}
                                                            halfStarEnabled={true}
                                                            halfStar={'ios-star-half'}
                                                            iconSet={'Ionicons'}
                                                            starColor={'#ff9212'}
                                                            starSize={16}
                                                            maxStars={5}
                                                            rating={this.state.starCount}
                                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                padding: 4,
                                                flex: 1.5,
                                                minHeight: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                        flex: 2,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text><Text style={{color: '#42a36b', fontSize: 13}}>Get it on
                                                            29th Nov 6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                            name="ios-information-circle-outline" size={15}
                                                            color="#42a36b"/></Text></Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.cardInner}>
                                            <TouchableOpacity onPress={() => {
                                                Actions.PDP({productType: "courier"})
                                            }} style={{
                                                flex: 6
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    padding: 10
                                                }}>
                                                    <Image
                                                        resizeMode='contain'

                                                        style={{flexShrink: 1, flex: 1, width: null}}
                                                        source={require('../image/flower-image.png')}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{
                                                flex: 2,

                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 4,
                                                        paddingLeft: 5,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text style={{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                            Enigmatic 20 Red...
                                                        </Text>
                                                    </View>
                                                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                                                        <Text style={{
                                                            fontSize: 13
                                                        }}>₹ 144</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 5
                                                }}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={{
                                                            color: '#ff9212',
                                                            marginTop: 2,
                                                            fontSize: 14
                                                        }}>3.5</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 5,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <StarRating
                                                            disabled={true}
                                                            emptyStar={'ios-star-outline'}
                                                            fullStar={'ios-star'}
                                                            halfStarEnabled={true}
                                                            halfStar={'ios-star-half'}
                                                            iconSet={'Ionicons'}
                                                            starColor={'#ff9212'}
                                                            starSize={16}
                                                            maxStars={5}
                                                            rating={this.state.starCount}
                                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                padding: 4,
                                                flex: 1.5,
                                                minHeight: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text><Text style={{fontFamily: 'Roboto', color: '#42a36b', fontSize: 13}}>Get it on
                                                            29th Nov 6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                            name="ios-information-circle-outline" size={15}
                                                            color="#42a36b"/></Text></Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <View style={styles.cardInner}>
                                            <TouchableOpacity onPress={() => {
                                                Actions.PDP({productType: "International"})
                                            }} style={{
                                                flex: 6
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    padding: 10
                                                }}>
                                                    <Image
                                                        resizeMode='contain'

                                                        style={{flexShrink: 1, flex: 1, width: null}}
                                                        source={require('../image/chocolate.png')}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{
                                                flex: 2,

                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        flex: 4,
                                                        paddingLeft: 5,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text style={{fontFamily: 'Roboto', fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                            Enigmatic 20 Red...
                                                        </Text>
                                                    </View>
                                                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                                                        <Text style={{
                                                            fontSize: 13,
                                                            paddingRight: '2%'
                                                        }}>₹ 44</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 5
                                                }}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={{
                                                            color: '#ff9212',
                                                            marginTop: 2,
                                                            fontSize: 14
                                                        }}>3.5</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 5,
                                                        justifyContent: 'center',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <StarRating
                                                            disabled={true}
                                                            emptyStar={'ios-star-outline'}
                                                            fullStar={'ios-star'}
                                                            halfStarEnabled={true}
                                                            halfStar={'ios-star-half'}
                                                            iconSet={'Ionicons'}
                                                            starColor={'#ff9212'}
                                                            starSize={16}
                                                            maxStars={5}
                                                            rating={this.state.starCount}
                                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                padding: 4,
                                                flex: 1.5,
                                                minHeight: 10,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'flex-start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <Text><Text style={{color: '#42a36b', fontSize: 13, fontFamily: 'Roboto',}}>Get it on
                                                            29th Nov 6 </Text><Text style={{paddingLeft: 50}}><Icon
                                                            name="ios-information-circle-outline" size={15}
                                                            color="#42a36b"/></Text></Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    margin: 13,
                                    paddingTop: 20,
                                    padding: 10,
                                    paddingBottom: 20,
                                    marginTop: 0,
                                    backgroundColor: '#fff'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        marginTop: -10
                                    }}>
                                        <Image resizeMode='contain' style={{
                                            flexShrink: 1, width: null,
                                        }} source={require('../image/tag.png')}/>
                                    </View>
                                    <View style={{
                                        flex: 9,
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        flexDirection: 'column'
                                    }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            marginBottom: 4,
                                            fontFamily: 'Roboto',
                                        }}>
                                            You could pay less !
                                        </Text>
                                        <Text style={{
                                            fontSize: 12
                                        }}>These gifts has a Secret Deal - Login to reveal it</Text>
                                    </View>
                                    <View style={{
                                        flex: 4,
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        alignItems: 'flex-end'
                                    }}>
                                        <TouchableOpacity style={{
                                            flexDirection: 'row',
                                            backgroundColor: '#f19215',
                                            padding: 8,
                                            borderRadius: 3,
                                            paddingRight: 18,
                                            paddingLeft: 18
                                        }}>
                                            <Text style={{
                                                color: '#fff',
                                                justifyContent: 'center',
                                                paddingTop: 1,
                                                fontSize: 16,
                                                fontFamily: 'Roboto',
                                            }}>LOGIN</Text>
                                            <Text
                                                style={{justifyContent: 'center', paddingLeft: 10, paddingTop: 1}}><Icon
                                                name="ios-arrow-forward" size={20} color="#fff"/></Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </ScrollView>
                    <View>
                        <Tabs  selected={this.state.page}
                              style={{backgroundColor: 'white', paddingTop: Platform.OS === 'ios' ? 45 : 20, paddingBottom: Platform.OS === 'ios' ? 30 : 20}}
                              onSelect={el => this.setState({page: el.props.name})}>
                            <View name="first" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 10,
                                    padding: 6,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    borderRadius: 5,
                                    position: 'absolute',
                                    left: 20,
                                    top: -3,
                                    justifyContent: 'center',
                                    zIndex: 2
                                }}>
                                    <Text style={{
                                        fontSize: 11,
                                        color: '#fff',
                                        fontFamily: 'Roboto',
                                    }}>₹ 599</Text>
                                </View>
                                <IconsMaterial name='account-balance-wallet' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    fontFamily: 'Roboto',
                                }}>Wallet</Text>
                            </View>
                            <View name="second" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsMaterial name='card-giftcard' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    fontFamily: 'Roboto',
                                }}>My Orders</Text>
                            </View>
                            <View name="third" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    backgroundColor: 'red',
                                    height: 10,
                                    padding: 6,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    borderRadius: 5,
                                    position: 'absolute',
                                    left: 32,
                                    top: -3,
                                    justifyContent: 'center',
                                    zIndex: 2
                                }}>
                                    <Text style={{
                                        fontSize: 11,
                                        color: '#fff',
                                        fontFamily: 'Roboto',
                                    }}>5</Text>
                                </View>
                                <IconsMaterial name='notifications' color='#389c43' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    color: '#389c43',
                                    fontFamily: 'Roboto',
                                }}>Notifications</Text>
                            </View>
                            <View name="fourth" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsCommunity name='account' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    fontFamily: 'Roboto',
                                }}>My Account</Text>
                            </View>
                            <View name="fifth" style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <IconsMaterial name='help' color='#666666' size={22}/>
                                <Text style={{
                                    color: '#666666',
                                    fontSize: 10,
                                    fontFamily: 'Roboto',
                                }}>Help</Text>
                            </View>
                        </Tabs>
                    </View>
                </View>
            </MenuContext>
        );
    }
}

export {Home}