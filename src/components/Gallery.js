import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import {HeaderComponent} from './header';
import {MenuContext} from 'react-native-popup-menu';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        };
        this._fbAuth = this._fbAuth.bind(this);
    }
    _fbAuth= (i) =>{
        this.setState({index:i});
       // alert(i);
        this.refs.sliderX.scrollBy(i)
    }
    onSwipe = (index) => {
      console.log('index changed', index);
        if(index===1){
            this.setState({index:index});
        }else if(index===2){
            this.setState({index:index});
        }else if(index===0){
            this.setState({index:index});
        }
    }
    render() {
        return (
            <MenuContext>
            <HeaderComponent name='' gallary="active"/>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',alignSelf:'stretch',width:width,flexDirection:'column'}}>
            <View style={styles.wrapper}>
                <Swiper  autoplay={false}   onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)} showsButtons={false}  ref="sliderX" onIndexChanged={this.onSwipe} >
                    <View style={styles.slide1}>
                        <Image resize='contain'  source={require('../image/asiatic-lilies-deluxe_1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image resize='contain'   source={require('../image/orchid-aura-premium_1.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image resize='contain'  source={require('../image/enigmatic-20-red-roses_1.jpg')}/>
                    </View>
                </Swiper>
            </View>
                <View style={{flex:1,height:150}}>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={() => this._fbAuth(0)} style={[{height:93},this.state.index===0 && styles.active]} >
                    <Image  resize='cover' style={{width:90,height:90}} source={require('../image/asiatic-lilies-deluxe_1.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._fbAuth(1)} style={[{height:93},this.state.index===1 && styles.active]} >
                    <Image resize='cover' style={{width:90,height:90}}  source={require('../image/orchid-aura-premium_1.jpg')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._fbAuth(2)} style={[{height:93},this.state.index===2 && styles.active]} >
                    <Image resize='cover' style={{width:90,height:90}} source={require('../image/enigmatic-20-red-roses_1.jpg')}/>
                    </TouchableOpacity>
                </ScrollView>
                </View>
            </View>
            </MenuContext>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        alignSelf:'stretch',
        height:500,
       flex:2
    },
    slide1: {
        flex: 1,
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    active:{
        borderColor:'#54b66a', borderWidth:2
    }

});
export {Gallery}