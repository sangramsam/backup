import React from 'react';
import {
    Text,
    StyleSheet, Image,
    View, Dimensions, TouchableOpacity,Platform
} from 'react-native';
import ImagePicker from "react-native-image-picker";

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

class PersonaliseImage extends React.Component {

    constructor() {
        super();
        this.state = {};
    }
    selectCameraTapped() {
        const options = {
            quality: 0.7,
            maxWidth: 500,
            maxHeight: 500,
            noData: true,
            storageOptions: {
                skipBackup: true
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;
                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }

            }
        });

    }

    render() {
        return (
            <View style={{height: 100, marginTop: 40}}>
                <Text style={{color: "#636363", fontSize: 16, fontFamily: 'Roboto', marginBottom: 5}}>Upload your photo</Text>
                <View style={{
                    width: width - 40,
                    borderColor: "#adadad",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                    marginBottom:10,
                    flexDirection: "row"
                }}>
                    {/* before upload image*/}
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this.selectCameraTapped}>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'Roboto',
                                color: "#adadad"
                            }}>Select photo</Text>
                            <Text style={{
                                fontSize: 12,
                                fontFamily: 'Roboto',
                                marginTop: 5,
                                color: "#adadad"
                            }}>File size between 100kb -10MB Only JPG or PNG</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.1,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../image/right_arrow.png')}
                               resizeMode="center"/>
                    </View>

                    {/* after upload image*/}
                  {/* <View style={{flex: 6, justifyContent: 'center'}}>
                       <View style={{flexDirection:'column',flex:1}}>
                           <View style={{flex:1}}>
                                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                                    <View style={{flex:0.4,alignItems:'flex-start'}}>
                                        <Image source={require('../../image/green_tick.png')} style={{width:18,height:18}} />
                                    </View>
                                    <View style={{flex:2,alignItems:'flex-start',justifyContent:'center'}}>
                                        <Text style={{fontSize:15,color:'green',fontFamily:'Roboto'}}>Photo Uploaded</Text>
                                    </View>
                                </View>
                           </View>
                           <View style={{flex:1,alignItems:'flex-start',paddingTop:10}}>
                               <Text style={{fontSize:12,fontFamily:'Roboto',color:'#707070'}}>FileName.jpg</Text>
                           </View>
                       </View>
                    </View>
                    <View style={{
                        flex: 4,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Image source={require('../../image/tom.jpg')} style={{width:50,height:50,borderRadius:8}} resizeMode="cover"/>
                    </View>*/}
                </View>
                <View style={{height: 70}}>
                    <Text style={{color: "#636363", fontSize: 16, fontFamily: 'Roboto', marginBottom: 5}}>Message</Text>
                    <View style={{
                        width: width - 40,
                        borderColor: "#adadad",
                        padding: 15,
                        borderWidth: 1,
                        borderRadius: 5,
                        paddingLeft: 10,
                        flexDirection: "row"
                    }}>
                        <View style={{flex: 0.8, justifyContent: 'center'}}>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 16,
                                    fontFamily: 'Roboto',
                                    color: "#adadad"
                                }}>Write Your Message</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flex: 0.2,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'Roboto',
                                color: "#adadad"
                            }}>120</Text>
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
export {PersonaliseImage};