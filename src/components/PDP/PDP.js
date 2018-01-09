import React from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Platform,
    Button,
    TextInput
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker';
import {Tabs} from './CustomTab';
import renderIf from '../randerif';
import {Express} from './express';
import {Cake} from './cake';
import {selectPopup} from './selectPopup';
import {Personalise} from './personalise'
import {PersonaliseImage} from './personaliseImage'
import {Description} from '../descttionTab/descriptoion';
import HomeHeader from '../headerHome.js';
import {MenuContext} from 'react-native-popup-menu';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
const customStyle = {borderBottomColor: '#1e9c57', borderBottomWidth: 3};
import Modal from 'react-native-modal';
class PDP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            heading: "FIND THE PERFECT GIFTS EVERYTIME",
            subHeading: "15,599 Products, 3 Hrs Express Delivery",
            starCount: 3.5,
            date: "",
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            content: 'Red Roses are the forever sign of deep, passionate, and long-lasting love. To let your loved ones know about your emotions for them, this is the best gift. We have creatively wrapped a red paper around these roses and tied with a red Ribbon to add more beauty to this floral arrangement.',
            page: "first",
            productType: this.props.productType,
            visibleModal:0,
            buy:''
        }
    }

    _onSelect = (item) => {
        console.log(item);
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    };
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    _renderModalContent = () => (
        <View style={styles.modalContent}>
            <Text>Hello!</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );
    getHeight() {
        switch (this.state.productType) {
            case "express":
                return 250;
            case "cake":
                return 250;
            case "personalise":
                return 450;
                case "International":
                return 250;
            default:
                return 250;
        }
    }

    render() {
        return (
            <MenuContext>
                <View style={styles.container}>
                    <HomeHeader arrow='true'/>
                    <View style={{flex: 1, alignSelf: 'stretch', marginTop: '2%'}}>
                        <Swiper showsButtons={false} showsPagination={false} loop={false}>
                            <View style={styles.slide1}>
                                <ScrollView>
                                    <View style={{
                                        flex: 1,
                                        width: width,
                                        marginBottom: 60
                                    }}>
                                        <View style={{backgroundColor: 'white', height: 350}}>
                                            <Image source={require('../../image/PDP.png')}
                                                   style={{width: window.width, height: 350}} resizeMode={'cover'}
                                            />
                                            <View style={{
                                                alignSelf: 'flex-start',
                                                position: 'absolute',
                                                bottom: Platform.OS === 'ios' ? 10 : 10,
                                                right: 0
                                            }}>
                                                <TouchableOpacity onPress={() => Actions.Gallery()}>
                                                    <Image source={require('../../image/preview.png')}
                                                           style={{width: 70, height: 70}} resizeMode="cover"
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                        <View style={{flex: 1}}>
                                            {/* for epress product */}
                                            {renderIf(this.state.productType === 'express', <Express/>)}
                                            {/* for egg product */}
                                            {renderIf(this.state.productType === 'cake', <Cake/>)}
                                            {/* for personalize product */}
                                            {renderIf(this.state.productType === 'personalise', <Personalise/>)}
                                            {/* for curier product */}
                                            {renderIf(this.state.productType === 'courier', <Personalise/>)}
                                            {/* for Internationalproduct */}
                                            {renderIf(this.state.productType === 'International', <Personalise/>)}
                                            <View style={{
                                                backgroundColor: '#f4f4f4',
                                                alignItems: 'center',
                                                //height: 250, for express product
                                                //height: 450, for personalize product with text,
                                                height: this.getHeight(),
                                                paddingTop: 20,
                                                flexDirection: 'column'
                                            }}>
                                                <View style={{height: 60}}>
                                                    <Text style={{
                                                        color: "#636363",
                                                        fontSize: 16,
                                                        fontFamily: 'Roboto',
                                                        marginBottom: 5
                                                    }}>Delivery
                                                        to</Text>
                                                    <View style={{
                                                        width: width - 40,
                                                        borderColor: "#ff7100",
                                                        padding: 5,
                                                        borderWidth: 2,
                                                        borderRadius: 5,
                                                        paddingLeft: 10,
                                                        flexDirection: "row",
                                                        backgroundColor: 'white'
                                                    }}>
                                                        <View style={{flex: 0.2}}>
                                                            <Image source={require('../../image/location_1.png')}
                                                                   resizeMode="center"/>
                                                        </View>
                                                        <View style={{flex: 0.8, justifyContent: 'center',}}>
                                                            <TouchableOpacity onPress={() => Actions.Location()}>
                                                                <Text>Enter Pincode or Area</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{height: 60, marginTop: 50}}>
                                                    <Text style={{
                                                        color: "#636363",
                                                        fontSize: 16,
                                                        fontFamily: 'Roboto',
                                                        marginBottom: 5
                                                    }}>Delivery on</Text>
                                                    <View style={{
                                                        width: width - 40,
                                                        borderColor: "#adadad",
                                                        padding: 5,
                                                        borderWidth: 1,
                                                        borderRadius: 5,
                                                        paddingLeft: 10,
                                                        flexDirection: "row",
                                                        backgroundColor: '#fff'
                                                    }}>
                                                        {/* delivery on  after selection  */}
                                                        {/*  <View style={{flex: 0.6}}>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <View style={{flex: 2}}>
                                                                <Text style={{
                                                                    fontSize: 43,
                                                                    fontFamily: 'Roboto',
                                                                    color: '#000',
                                                                    fontWeight: '600'
                                                                }}>16</Text>
                                                            </View>
                                                            <View style={{flex: 2}}>
                                                                <View style={{
                                                                    flexDirection: 'column',
                                                                    flex: 1,
                                                                    justifyContent: 'center'
                                                                }}>
                                                                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                                        <Text style={{
                                                                            fontFamily: 'Roboto',
                                                                            color: '#000'
                                                                        }}>JAN</Text>
                                                                    </View>
                                                                    <View style={{flex: 1}}>
                                                                        <Text style={{
                                                                            fontFamily: 'Roboto',
                                                                            color: '#000'
                                                                        }}>THU</Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </View>
                                                    </View>
                                                    <View style={{flex: 1.2}}>
                                                        <View style={{flexDirection: 'column', flex: 1}}>
                                                            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#000"
                                                                }}>Courier: <Text
                                                                    style={{color: 'green'}}>FREE</Text></Text>
                                                            </View>
                                                            <View style={{flex: 1}}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#000"
                                                                }}>2:00 - 15:00 Hrs</Text>
                                                            </View>
                                                        </View>
                                                    </View>*/}
                                                        {/* delivery on selection  */}
                                                        <View style={{flex: 0.2}}>
                                                            <Image source={require('../../image/calender.png')}
                                                                   resizeMode="center"/>
                                                        </View>
                                                        <TouchableOpacity style={{flex: 0.8, justifyContent: 'center'}} onPress={() => {this.state.productType==="International" ? Actions.selectPopup() : Actions.Example()}}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#adadad"
                                                                }}>Select Delivery Date</Text>
                                                        </TouchableOpacity>
                                                        <View style={{
                                                            flex: 0.2,
                                                            alignItems: 'flex-end',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Image source={require('../../image/right_arrow.png')}
                                                                   resizeMode="center"/>
                                                        </View>

                                                    </View>

                                                </View>
                                                {/* personalise */}
                                                {renderIf(this.state.productType === 'personalise',
                                                    <PersonaliseImage/>)}
                                            </View>
                                            <View style={{flex: 6, padding: 20}}>
                                                <View style={{
                                                    flex: 2,
                                                    backgroundColor: 'pink',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    minHeight: 200,
                                                    marginBottom: 20
                                                }}>
                                                    <Tabs selected={this.state.page} style={{backgroundColor: 'white'}}
                                                          customStyle={customStyle}
                                                          selectedStyle={{
                                                              color: '#020202',
                                                              fontSize: 15,
                                                              fontWeight: '600',
                                                              fontFamily: 'Roboto'
                                                          }}
                                                          onSelect={el => {
                                                              this.setState({page: el.props.name});
                                                              this.setState({content: "Red Roses are the forever sign of deep, passionate, and long-lasting love. To let your loved ones know about your emotions for them, this is the best gift. We have creatively wrapped a red paper around these roses and tied with a red Ribbon to add more beauty to this floral arrangement."})
                                                          }}>
                                                        <Text name="first">Description</Text>
                                                        <Text name="second">Delivery Info</Text>
                                                        <Text name="third">Care</Text>
                                                    </Tabs>
                                                    {renderIf(this.state.page === 'first', <Description
                                                        data={this.state.content}/>)}
                                                    {renderIf(this.state.page === 'second', <Description
                                                        data={this.state.content}/>)}
                                                    {renderIf(this.state.page === 'third', <Description
                                                        data={this.state.content}/>)}
                                                </View>
                                                <View style={{
                                                    flex: 1,
                                                    backgroundColor: '#f2f2f2',
                                                    padding: 10,
                                                    paddingLeft: 0,
                                                    paddingRight: 0,
                                                    paddingBottom: 0
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        paddingBottom: 10
                                                    }}>
                                                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                            <Image source={require('../../image/unique-products.png')}
                                                                   resizeMode="contain"
                                                                   style={{width: 75, height: 75}}/>
                                                        </View>
                                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                                            <Text style={{
                                                                fontSize: Platform.OS === 'ios' ? 19 : 20,
                                                                fontFamily: 'Roboto',
                                                                color: 'black',
                                                                letterSpacing: Platform.OS === 'ios' ? 0.2 : 0.2,
                                                            }}>100% Smile Guaranteed</Text>
                                                            <Text style={{
                                                                fontSize: 13,
                                                                fontFamily: 'Roboto',
                                                                color: 'green'
                                                            }}>Unique Products . On Time Delivery</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#f8f8f8',
                                                        flexDirection: 'row',
                                                        paddingTop: 20,
                                                        paddingBottom: 10
                                                    }}>
                                                        <View style={{flex: 1, alignItems: 'center'}}>
                                                            <Image source={require('../../image/secure.png')}
                                                                   style={{width: 20, height: 25}}/>
                                                            <Text
                                                                style={{flex: 1, alignItems: 'center', marginTop: 10}}>100%
                                                                Safe and </Text>
                                                            <Text style={{flex: 1, alignItems: 'center'}}>Secure
                                                                payments.</Text>
                                                        </View>
                                                        <View style={{flex: 1}}>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                flex: 0.3,
                                                            }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 18,
                                                                        color: "#000",
                                                                        fontFamily: "Roboto",
                                                                        fontWeight: 'bold'
                                                                    }}>3.3</Text>
                                                                </View>
                                                                <View style={{
                                                                    flex: 4,
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                    <StarRating
                                                                        disabled={false}
                                                                        maxStars={5}
                                                                        rating={this.state.starCount}
                                                                        starColor={'#feb614'}
                                                                        starSize={19}
                                                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                                    />
                                                                </View>
                                                            </View>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                flex: 0.1,
                                                                marginTop: 5
                                                            }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'flex-start', marginLeft: 2
                                                                }}>
                                                                    <Image
                                                                        source={require('../../image/certificate.png')}/>
                                                                </View>
                                                                <View style={{
                                                                    flex: 6,
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'flex-start'
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 13,
                                                                        fontFamily: 'Roboto'
                                                                    }}><Text style={{
                                                                        color: '#000',
                                                                        fontWeight: '500'
                                                                    }}>TRUSTED</Text> COMPANY</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{flex: 2, marginLeft: 6, marginTop: 5}}>
                                                                <Text style={{
                                                                    fontSize: 13,
                                                                    fontFamily: "Roboto",
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    5693 review
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </ScrollView>
                                {renderIf(this.state.buy === 'cart', <View style={styles.overlay}></View>)}
                                {renderIf(this.state.buy === 'cart',<View style={{alignSelf: 'flex-start', position: 'absolute', flex: 1, bottom: Platform.OS === 'ios' ? 50 : 50,}}>
                                    <View style={{flex:5,height:100,width:width,backgroundColor:'white'}}>
                                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                            <View style={{flex:1,alignItems:'flex-end'}}>
                                                <Image source={require('../../image/tick.png')} resizeMode="contain" style={{width:22,height:22}}/>
                                            </View>
                                            <View style={{flex:4,paddingLeft:5}}>
                                                <Text style={{fontSize:18,fontFamily:'Roboto'}}>Gift has been added to your cart</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>)}

                                {renderIf(this.state.buy !== 'cart', <View style={{
                                    alignSelf: 'flex-start',
                                    position: 'absolute',
                                    flex: 1,
                                    bottom: Platform.OS === 'ios' ? 0 : 0, flexDirection: 'row'
                                }}>
                                    <View style={{flex: 1,}}>
                                        <TouchableHighlight underlayColor="white"  onPress={()=>{this.setState({ buy: 'cart' })}} style={{
                                            backgroundColor: "white",
                                            alignItems: 'center',
                                            padding: 15,
                                            shadowRadius: 10,
                                            shadowColor: Platform.OS === 'ios' ? '#000' : '#000',
                                            shadowOpacity: 0.5,
                                            shadowOffset: {
                                                width: 2,
                                                height: 3,
                                            }
                                        }}>
                                            <Text style={[styles.btnText, {color: "#000"}]}>ADD TO CART</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{flex: 1,}}>
                                        <TouchableHighlight  underlayColor="#ff9212"  onPress={()=>Actions.Addon()}
                                                             style={{backgroundColor: '#ff9212', alignItems: 'center', padding: 15}}>
                                            <Text style={[styles.btnText, {color: 'white'}]}>BUY NOW</Text>
                                        </TouchableHighlight>
                                    </View></View>)}
                                    {renderIf(this.state.buy === 'cart', <View style={{
                                    alignSelf: 'flex-start',
                                    position: 'absolute',
                                    flex: 1,
                                    bottom: Platform.OS === 'ios' ? 0 : 0, flexDirection: 'row'
                                }}>
                                    <View style={{flex: 1,}}>
                                        <TouchableHighlight underlayColor="white"  onPress={()=>{this.setState({ buy: 'cart' })}} style={{
                                            backgroundColor: "#666",
                                            alignItems: 'center',
                                            padding: 15,
                                            shadowRadius: 10,
                                            shadowColor: Platform.OS === 'ios' ? '#000' : '#000',
                                            shadowOpacity: 0.5,
                                            shadowOffset: {
                                                width: 2,
                                                height: 3,
                                            }
                                        }}>
                                            <Text style={[styles.btnText, {color: "#FFF"}]}>VIEW CART</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{flex: 2,}}>
                                        <TouchableHighlight  underlayColor="#ff9212"  onPress={()=>Actions.Addon()}
                                                             style={{backgroundColor: '#ff9212', alignItems: 'center', padding: 15}}>
                                            <Text style={[styles.btnText, {color: 'white'}]}>PROCEED TO CHECKOUT</Text>
                                        </TouchableHighlight>
                                    </View></View>)}
                            </View>
                            <View style={styles.slide1}>
                                <ScrollView>
                                    <View style={{
                                        flex: 1,
                                        width: width,
                                        marginBottom: 60
                                    }}>
                                        <View style={{backgroundColor: 'white', height: 350}}>
                                            <Image source={require('../../image/PDP.png')}
                                                   style={{width: window.width, height: 350}} resizeMode={'cover'}
                                            />
                                            <View style={{
                                                alignSelf: 'flex-start',
                                                position: 'absolute',
                                                bottom: Platform.OS === 'ios' ? 10 : 10,
                                                right: 0
                                            }}>
                                                <TouchableOpacity onPress={() => Actions.Gallery()}>
                                                    <Image source={require('../../image/preview.png')}
                                                           style={{width: 70, height: 70}} resizeMode="cover"
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                        <View style={{flex: 1}}>
                                            {/* for epress product */}
                                            {renderIf(this.state.productType === 'express', <Express/>)}
                                            {/* for egg product */}
                                            {renderIf(this.state.productType === 'cake', <Cake/>)}
                                            {/* for personalize product */}
                                            {renderIf(this.state.productType === 'personalise', <Personalise/>)}
                                            <View style={{
                                                backgroundColor: '#f4f4f4',
                                                alignItems: 'center',
                                                //height: 250, for express product
                                                //height: 450, for personalize product with text,
                                                height: this.getHeight(),
                                                paddingTop: 20,
                                                flexDirection: 'column'
                                            }}>
                                                <View style={{height: 60}}>
                                                    <Text style={{
                                                        color: "#636363",
                                                        fontSize: 16,
                                                        fontFamily: 'Roboto',
                                                        marginBottom: 5
                                                    }}>Delivery
                                                        to</Text>
                                                    <View style={{
                                                        width: width - 40,
                                                        borderColor: "#ff7100",
                                                        padding: 5,
                                                        borderWidth: 2,
                                                        borderRadius: 5,
                                                        paddingLeft: 10,
                                                        flexDirection: "row",
                                                        backgroundColor: 'white'
                                                    }}>
                                                        <View style={{flex: 0.2}}>
                                                            <Image source={require('../../image/location_1.png')}
                                                                   resizeMode="center"/>
                                                        </View>
                                                        <View style={{flex: 0.8, justifyContent: 'center',}}>
                                                            <TouchableOpacity onPress={() => Actions.Location()}>
                                                                <Text>Enter Pincode or Area</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{height: 60, marginTop: 50}}>
                                                    <Text style={{
                                                        color: "#636363",
                                                        fontSize: 16,
                                                        fontFamily: 'Roboto',
                                                        marginBottom: 5
                                                    }}>Delivery on</Text>
                                                    <View style={{
                                                        width: width - 40,
                                                        borderColor: "#adadad",
                                                        padding: 5,
                                                        borderWidth: 1,
                                                        borderRadius: 5,
                                                        paddingLeft: 10,
                                                        flexDirection: "row",
                                                        backgroundColor: '#fff'
                                                    }}>
                                                        {/* delivery on  after selection  */}
                                                        {/*  <View style={{flex: 0.6}}>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <View style={{flex: 2}}>
                                                                <Text style={{
                                                                    fontSize: 43,
                                                                    fontFamily: 'Roboto',
                                                                    color: '#000',
                                                                    fontWeight: '600'
                                                                }}>16</Text>
                                                            </View>
                                                            <View style={{flex: 2}}>
                                                                <View style={{
                                                                    flexDirection: 'column',
                                                                    flex: 1,
                                                                    justifyContent: 'center'
                                                                }}>
                                                                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                                        <Text style={{
                                                                            fontFamily: 'Roboto',
                                                                            color: '#000'
                                                                        }}>JAN</Text>
                                                                    </View>
                                                                    <View style={{flex: 1}}>
                                                                        <Text style={{
                                                                            fontFamily: 'Roboto',
                                                                            color: '#000'
                                                                        }}>THU</Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </View>
                                                    </View>
                                                    <View style={{flex: 1.2}}>
                                                        <View style={{flexDirection: 'column', flex: 1}}>
                                                            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#000"
                                                                }}>Courier: <Text
                                                                    style={{color: 'green'}}>FREE</Text></Text>
                                                            </View>
                                                            <View style={{flex: 1}}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#000"
                                                                }}>2:00 - 15:00 Hrs</Text>
                                                            </View>
                                                        </View>
                                                    </View>*/}
                                                        {/* delivery on selection  */}
                                                        <View style={{flex: 0.2}}>
                                                            <Image source={require('../../image/calender.png')}
                                                                   resizeMode="center"/>
                                                        </View>
                                                        <View style={{flex: 0.8, justifyContent: 'center'}}>
                                                            <TouchableOpacity onPress={() => Actions.Example()}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    fontFamily: 'Roboto',
                                                                    color: "#adadad"
                                                                }}>Select Delivery Date</Text>
                                                            </TouchableOpacity>
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

                                                </View>
                                                {/* personalise */}
                                                {renderIf(this.state.productType === 'personalise',
                                                    <PersonaliseImage/>)}
                                            </View>
                                            <View style={{flex: 6, padding: 20}}>
                                                <View style={{
                                                    flex: 2,
                                                    backgroundColor: 'pink',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    minHeight: 200,
                                                    marginBottom: 20
                                                }}>
                                                    <Tabs selected={this.state.page} style={{backgroundColor: 'white'}}
                                                          customStyle={customStyle}
                                                          selectedStyle={{
                                                              color: '#020202',
                                                              fontSize: 15,
                                                              fontWeight: '600',
                                                              fontFamily: 'Roboto'
                                                          }}
                                                          onSelect={el => {
                                                              this.setState({page: el.props.name});
                                                              this.setState({content: "Red Roses are the forever sign of deep, passionate, and long-lasting love. To let your loved ones know about your emotions for them, this is the best gift. We have creatively wrapped a red paper around these roses and tied with a red Ribbon to add more beauty to this floral arrangement."})
                                                          }}>
                                                        <Text name="first">Description</Text>
                                                        <Text name="second">Delivery Info</Text>
                                                        <Text name="third">Care</Text>
                                                    </Tabs>
                                                    {renderIf(this.state.page === 'first', <Description
                                                        data={this.state.content}/>)}
                                                    {renderIf(this.state.page === 'second', <Description
                                                        data={this.state.content}/>)}
                                                    {renderIf(this.state.page === 'third', <Description
                                                        data={this.state.content}/>)}
                                                </View>
                                                <View style={{
                                                    flex: 1,
                                                    backgroundColor: '#f2f2f2',
                                                    padding: 10,
                                                    paddingLeft: 0,
                                                    paddingRight: 0,
                                                    paddingBottom: 0
                                                }}>
                                                    <View style={{
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        paddingBottom: 10
                                                    }}>
                                                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                                                            <Image source={require('../../image/unique-products.png')}
                                                                   resizeMode="contain"
                                                                   style={{width: 75, height: 75}}/>
                                                        </View>
                                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                                            <Text style={{
                                                                fontSize: Platform.OS === 'ios' ? 19 : 20,
                                                                fontFamily: 'Roboto',
                                                                color: 'black',
                                                                letterSpacing: Platform.OS === 'ios' ? 0.2 : 0.2,
                                                            }}>100% Smile Guaranteed</Text>
                                                            <Text style={{
                                                                fontSize: 13,
                                                                fontFamily: 'Roboto',
                                                                color: 'green'
                                                            }}>Unique Products . On Time Delivery</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                        backgroundColor: '#f8f8f8',
                                                        flexDirection: 'row',
                                                        paddingTop: 20,
                                                        paddingBottom: 10
                                                    }}>
                                                        <View style={{flex: 1, alignItems: 'center'}}>
                                                            <Image source={require('../../image/secure.png')}
                                                                   style={{width: 20, height: 25}}/>
                                                            <Text
                                                                style={{flex: 1, alignItems: 'center', marginTop: 10}}>100%
                                                                Safe and </Text>
                                                            <Text style={{flex: 1, alignItems: 'center'}}>Secure
                                                                payments.</Text>
                                                        </View>
                                                        <View style={{flex: 1}}>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                flex: 0.3,
                                                            }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 18,
                                                                        color: "#000",
                                                                        fontFamily: "Roboto",
                                                                        fontWeight: 'bold'
                                                                    }}>3.3</Text>
                                                                </View>
                                                                <View style={{
                                                                    flex: 4,
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'center'
                                                                }}>
                                                                    <StarRating
                                                                        disabled={false}
                                                                        maxStars={5}
                                                                        rating={this.state.starCount}
                                                                        starColor={'#feb614'}
                                                                        starSize={19}
                                                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                                    />
                                                                </View>
                                                            </View>
                                                            <View style={{
                                                                flexDirection: "row",
                                                                flex: 0.1,
                                                                marginTop: 5
                                                            }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'flex-start', marginLeft: 2
                                                                }}>
                                                                    <Image
                                                                        source={require('../../image/certificate.png')}/>
                                                                </View>
                                                                <View style={{
                                                                    flex: 6,
                                                                    alignItems: 'flex-start',
                                                                    justifyContent: 'flex-start'
                                                                }}>
                                                                    <Text style={{
                                                                        fontSize: 13,
                                                                        fontFamily: 'Roboto'
                                                                    }}><Text style={{
                                                                        color: '#000',
                                                                        fontWeight: '500'
                                                                    }}>TRUSTED</Text> COMPANY</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{flex: 2, marginLeft: 6, marginTop: 5}}>
                                                                <Text style={{
                                                                    fontSize: 13,
                                                                    fontFamily: "Roboto",
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    5693 review
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </ScrollView>
                                <View style={{
                                    alignSelf: 'flex-start',
                                    position: 'absolute',
                                    flex: 1,
                                    bottom: Platform.OS === 'ios' ? 0 : 0, flexDirection: 'row'
                                }}>
                                    <View style={{flex: 1,}}>
                                        <TouchableOpacity style={{
                                            backgroundColor: "white",
                                            alignItems: 'center',
                                            padding: 15,
                                            shadowRadius: 10,
                                            elevation: 2,
                                            shadowColor: Platform.OS === 'ios' ? '#000' : '#000',
                                            shadowOpacity: 0.5,
                                            shadowOffset: {
                                                width: 2,
                                                height: 3,
                                            }
                                        }}>
                                            <Text style={[styles.btnText, {color: "#000"}]}>ADD TO CART</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1,}}>
                                        <TouchableOpacity
                                            style={{backgroundColor: '#ff9212', alignItems: 'center', padding: 15, elevation: 2}}>
                                            <Text style={[styles.btnText, {color: 'white'}]}>BUY NOW</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </Swiper>
                    </View>
                </View>
            </MenuContext>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "white",

        width: width,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    btnText: {
        fontSize: 18,
        fontFamily: "Roboto"
    },
    currency: {
        fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "300",
        color: "black"

    },
    label: {
        color: "#adadad",
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 400,
        marginLeft: 5
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red"
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    overlay:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.5
    }
};
export {PDP}