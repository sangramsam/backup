import React, { Component } from 'react';
import { View, ScrollView, Text,Platform,TextInput,StyleSheet,Image,FlatList,
    ToastAndroid,TouchableOpacity,Picker,Button,StatusBar,Dimensions} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import IconsMaterial from 'react-native-vector-icons/MaterialIcons';
import HomeHeader from './headerHome.js';
import {MenuContext} from 'react-native-popup-menu';
import LinearGradient from 'react-native-linear-gradient';
const width=Dimensions.get('window').width;
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            starCount: 3,
            loading: false,
            data: [{
                name: 'saurav',
                text: 'BIRTHDAY',
                color: '#e74547',
                img: '../image/popular.png',
            },
                {
                    name: 'gaurav',
                    text: 'FLOWERS',
                    img: '../image/popular.png',
                    color: '#f19215'
                },
                {
                    name: 'parth',
                    text: 'CAKES',
                    img: '../image/popular.png',
                    color:'#a05052'
                },
                {
                    name: 'sangram',
                    text: 'GIFTS',
                    img: '../image/popular.png',
                    color: 'green'
                },
                {
                    name: 'gaurav',
                    text: 'GIFTS',
                    img: '../image/popular.png',
                    color:'#3e79d0'
                },
                {
                    name: 'parth',
                    text: 'PLANTS',
                    img: '../image/popular.png',
                    color:'red'
                },
                {
                    name: 'sangram',
                    text: 'GIFTS',
                    img: '../image/popular.png',
                    color:'#3e79d0'
                }

            ],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            enable:true
        };
    }
    render () {
        var ITEM_HEIGHT=80;
        console.log(this.props);
        return (
            <MenuContext>
            <View>
                <HomeHeader arrow='true'/>
                <ScrollView style={{marginBottom:70}}>
                    <View style={{flex:1,width:width,backgroundColor:'#fff',marginTop:0, padding: 15}}>
                        <FlatList style={{flex:1}} horizontal={true} showsHorizontalScrollIndicator={false} onScrollEnd={()=>{console.log('end Reached') }}  onEndReachedThreshold={300}
                                  data={this.state.data}
                                  getItemLayout={(data, index) => (
                                      {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
                                  )}
                                  renderItem={({ item }) => (
                                      <View style={{flex:1,flexDirection:'column',
                                          shadowColor: 'rgba(0, 0, 0, 0.36);',
                                          shadowOffset: { width: 0, height: 0 },
                                          shadowOpacity: 0.6,
                                          shadowRadius: 5,
                                          margin: 4,
                                          width:90,
                                          borderRadius: 3,
                                          elevation: 2}}>
                                          <View style={{borderTopRightRadius: 5,borderTopLeftRadius: 5,padding: 5,flex:2,justifyContent:'center',alignItems:'center',backgroundColor:item.color,maxHeight:50}}>

                                              <Image source={require('../image/ballon.png')} resizeMode='contain' style={{width:20, height:430}} />

                                          </View>
                                          <View style={{flex:3,justifyContent:'center',alignItems:'center', padding: 6}}>
                                              <Text>{item.text}</Text>
                                          </View>
                                      </View>
                                  )}
                                  onEndReached = {(ITEM_HEIGHT)=>{this.setState({ enable:false})}}
                                  {...this.props}

                        />

                        <LinearGradient colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)']} style={styles.linearGradient} start={{ x: 0, y: 1 }}
                                        end={{ x:0, y: 0 }}>

                        </LinearGradient>

                        {this.state.enable?<View style={{position:'absolute',top:20,fontSize:60,right:10,flex:1}}><Image source={require('../image/question.png')}/>
                        </View>:null}
                    </View>
                    <View style = {{marginTop: 0, flexDirection: 'column', backgroundColor: '#ebeef4'}}>
                        <View style = {{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            padding: 10
                        }}>
                            <View style = {styles.card}>

                                <View style = {styles.cardInner}>
                                    <View style = {{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode = 'contain'

                                            style={{flexShrink:1, flex: 1,width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style = {{
                                        flex: 2,

                                    }}>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingRight: '2%'
                                        }}>
                                            <View style = {{flex: 4, paddingLeft: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text style = {{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style = {{flex: 1,alignItems: 'flex-end'}}>
                                                <Text style = {{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style = {{flex: 1}}>
                                                <Text style = {{color: '#ff9212',marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style = {{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled = {true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor = {'#ff9212'}
                                                    starSize = {16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style = {{flexDirection: 'row'}}>
                                            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text><Text style = {{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.card}>

                                <View style = {styles.cardInner}>
                                    <View style = {{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode = 'contain'

                                            style={{flexShrink:1, flex: 1,width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style = {{
                                        flex: 2,

                                    }}>
                                        <View style = {{
                                            flexDirection: 'row'
                                        }}>
                                            <View style = {{flex: 4, paddingLeft: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text style = {{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style = {{flex: 1,alignItems: 'flex-end'}}>
                                                <Text style = {{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style = {{flex: 1}}>
                                                <Text style = {{color: '#ff9212',marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style = {{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled = {true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor = {'#ff9212'}
                                                    starSize = {16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style = {{flexDirection: 'row'}}>
                                            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text><Text style = {{color: '#42a36b',fontSize: 13}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.card}>

                                <View style = {styles.cardInner}>
                                    <View style = {{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode = 'contain'

                                            style={{flexShrink:1, flex: 1,width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style = {{
                                        flex: 2,

                                    }}>
                                        <View style = {{
                                            flexDirection: 'row'
                                        }}>
                                            <View style = {{flex: 4, paddingLeft: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text style = {{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style = {{flex: 1,alignItems: 'flex-end'}}>
                                                <Text style = {{
                                                    fontSize: 13,
                                                    paddingRight: '2%'
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style = {{flex: 1}}>
                                                <Text style = {{color: '#ff9212',marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style = {{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled = {true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor = {'#ff9212'}
                                                    starSize = {16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style = {{flexDirection: 'row'}}>
                                            <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text><Text style = {{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.card}>

                                <View style = {styles.cardInner}>
                                    <View style = {{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode = 'contain'

                                            style={{flexShrink:1, flex: 1,width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style = {{
                                        flex: 2,

                                    }}>
                                        <View style = {{
                                            flexDirection: 'row'
                                        }}>
                                            <View style = {{flex: 4, paddingLeft: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text style = {{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style = {{flex: 1,alignItems: 'flex-end'}}>
                                                <Text style = {{
                                                    fontSize: 13
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style = {{flex: 1}}>
                                                <Text style = {{color: '#ff9212',marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style = {{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled = {true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor = {'#ff9212'}
                                                    starSize = {16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style = {{flexDirection: 'row'}}>
                                            <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text><Text style = {{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.card}>

                                <View style = {styles.cardInner}>
                                    <View style = {{
                                        flex: 6,
                                        padding: 10
                                    }}>
                                        <Image
                                            resizeMode = 'contain'

                                            style={{flexShrink:1, flex: 1,width: null}}
                                            source={require('../image/chocolate.png')}
                                        />
                                    </View>
                                    <View style = {{
                                        flex: 2,

                                    }}>
                                        <View style = {{
                                            flexDirection: 'row'
                                        }}>
                                            <View style = {{flex: 4, paddingLeft: 5, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text style = {{fontSize: 12, color: '#000', fontWeight: 'bold'}}>
                                                    Enigmatic 20 Red...
                                                </Text>
                                            </View>
                                            <View style = {{flex: 1,alignItems: 'flex-end'}}>
                                                <Text style = {{
                                                    fontSize: 13,
                                                    paddingRight: '2%'
                                                }}>₹ 44</Text>
                                            </View>
                                        </View>
                                        <View style = {{
                                            flexDirection: 'row',
                                            paddingLeft: 5
                                        }}>
                                            <View style = {{flex: 1}}>
                                                <Text style = {{color: '#ff9212',marginTop: 2, fontSize: 14}}>3.5</Text>
                                            </View>
                                            <View style = {{flex: 5, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <StarRating
                                                    disabled={true}
                                                    emptyStar={'ios-star-outline'}
                                                    fullStar={'ios-star'}
                                                    halfStarEnabled = {true}
                                                    halfStar={'ios-star-half'}
                                                    iconSet={'Ionicons'}
                                                    starColor = {'#ff9212'}
                                                    starSize = {16}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style = {{
                                        flexDirection: 'row',
                                        padding: 4,
                                        flex: 1.5,
                                        minHeight: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style = {{flexDirection: 'row'}}>
                                            <View style = {{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                                <Text><Text style = {{color: '#42a36b', fontSize: 13}}>Get it on 29th Nov 6 </Text><Text style = {{paddingLeft: 50}}><Icon name="ios-information-circle-outline" size={15} color="#42a36b" /></Text></Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style = {{
                            flexDirection: 'row',
                            margin: 13,
                            paddingTop: 20,
                            padding: 10,
                            paddingBottom: 20,
                            marginTop: 0,
                            backgroundColor: '#fff'
                        }}>
                            <View style = {{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                marginTop: -10
                            }}>
                                <Image resizeMode = 'contain' style = {{
                                    flexShrink:1 ,width: null,
                                }}source={require('../image/tag.png')}/>
                            </View>
                            <View style = {{
                                flex: 8,
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                flexDirection: 'column'
                            }}>
                                <Text style = {{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    marginBottom: 4
                                }}>
                                    You could pay less !
                                </Text>
                                <Text style = {{
                                    fontSize: 12
                                }}>These gifts has a Secret Deal - Login to reveal it</Text>
                            </View>
                            <View style = {{
                                flex:4,
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'flex-end'
                            }}>
                                <TouchableOpacity style = {{flexDirection: 'row', backgroundColor: '#f19215', padding: 8, borderRadius: 3, paddingRight: 18, paddingLeft: 18}}>
                                    <Text style = {{color: '#fff', justifyContent: 'center', paddingTop:1, fontSize: 16}}>LOGIN</Text>
                                    <Text style = {{justifyContent: 'center', paddingLeft: 10, paddingTop: 1}}><Icon name="ios-arrow-forward" size={20} color="#fff" /></Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style ={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.50);',
                    shadowOffset: { width: 10, height: 0 },
                    shadowOpacity: 0.6,
                    shadowRadius: 15,
                    elevation: 50,
                }}>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'row',
                        borderRightWidth: 0.5,
                        borderRightColor: '#000',
                        paddingTop: 10,
                        paddingBottom: Platform.OS === 'ios'?26:10
                    }}>
                        <View style = {{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            marginRight: 10
                        }}><Text> <IconsMaterial name = 'sort' color = '#666666' size={22}/></Text>
                        </View>
                        <View style = {{
                            flex: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center',

                        }}><Text>Sort</Text></View>
                    </View>
                    <View style = {{
                        flex: 1,
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingBottom: Platform.OS === 'ios'?20:5
                    }}>
                        <View style = {{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            marginRight: 10,
                            marginBottom:10
                        }}><Text><IconsMaterial name = 'filter-list' color = '#666666' size={22}/></Text></View>
                        <View style = {{
                            flex: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            marginBottom:8
                        }}><Text>Filter</Text></View>
                    </View>
                </View>
            </View>
            </MenuContext>
        );
    }
}


const styles = {
    card: {
        width: '47%',
        padding: 5,
        paddingBottom: 0,
        height: 220,
        margin: 5,
        shadowColor: 'rgba(0, 0, 0, 0.36);',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    cardInner:{
        flexDirection: 'column',
        flex: 1
    },
    wrapper: {
        flex:1,
        flexDirection:'row',
        width:600,
        maxHeight:100,
        overflow:'visible',
        position:'relative'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        overflow:'visible',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        flexDirection:'row',

        overflow:'visible',


    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        flexDirection:'row',
        overflow:'visible'

    },
    slideInner:{
        flex:1,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        flexDirection:'row',
        width:50
    },
    linearGradient:{
        position:'absolute',
        right:0,
        height:100,
        width:50
    }
};
export {Category}