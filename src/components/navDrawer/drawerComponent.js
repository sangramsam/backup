import React, { Component } from 'react';
import { Image, ScrollView, Text ,View , StyleSheet,TouchableHighlight,Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
const BACON_IPSUM = 'Bacon ipsum dolor . ';
const width = Dimensions.get('window').width;



const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
    value: false,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {

    paddingTop: 20,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:10

  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    color:'#1BB866',
    marginTop:-20,
    height:50
  },
  content: {
    padding: 20,

  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});
export default class HeaderComponent extends Component {
  constructor(props)
  {
    super(props);
  }
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header,isActive ? styles.active : styles.inactive,{flex:1,maxHeight:50,flexDirection:'row'}]} transition="backgroundColor">
           <Animatable.Text style={[styles.headerText,{flex:3,padding:10,maxHeight:40}]}>{section.title}</Animatable.Text>
            <Image style={{flex:1}} source={require('../../image/caret-down.png')} resize='center' style={{width:10,height:10}}/>

      </Animatable.View>



    );
  }

  _renderContent(section, i, isActive) {
    return (
      <TouchableHighlight>
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
      </TouchableHighlight>
    );
  }


  render() {
    const {First}=this.props;
    console.log(this.props.items[0].key);
    const CONTENT = [
      {
        title: 'First',
        content: this.props.items[0].key,
      },
      {
        title: 'Second',
        content: BACON_IPSUM,
      },
      {
        title: 'Third',
        content: BACON_IPSUM,
      },
      {
        title: 'Fourth',
        content: BACON_IPSUM,
      },
      {
        title: 'Fifth',
        content: BACON_IPSUM,
      },
    ];
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
    <View style={{flex:1,justifyContent: 'flex-start',alignItems: 'center',flexDirection:'column'}}>
    
    <View style={{maxHeight:85,backgroundColor:'#009E23',flexDirection:'row',flex:1,justifyContent: 'center',alignItems: 'center',borderBottomWidth:1,borderColor:'#eee'}}>
      <View style={{flex:1,justifyContent: 'center',alignItems:'flex-end'}}>
        <Image source={require('../../image/logo-copy.png')} resizeMode='center' style={{marginRight:20}}/>
      </View>
      <View style={{flex:3,justifyContent: 'center',alignItems:'flex-start'}}>
          <Text style={{color:'#fff',fontWeight:'400'}}>Hi Hardeep</Text>
            <Text style={{color:'#fff',fontWeight:'200'}}>Two transaction away to go platinum</Text>
      </View>
    </View>
    <View style={{flex:1,justifyContent: 'center',backgroundColor:'#009E23',alignItems:'center',flexDirection:'row',maxHeight:45,paddingLeft:10}}>

      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
          <Text style={{color:'#fff',fontWeight:'600'}}>MY ACCOUNT</Text>
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>TAKE ORDER</Text>
      </View>
      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontWeight:'600'}}>HELP LINE</Text>
      </View>
    </View>
    <ScrollView>
    <View style={{flex:1,borderBottomWidth:1,borderColor:'#0606061c',backgroundColor:'#fff'}}>

    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',paddingLeft:20,paddingBottom:10,paddingTop:20}}><Text style={{fontSize:10}}>Explore</Text></View>
    <Accordion style={{flex:1,flexDirection:'column',maxHeight:700,width:width-70}}
      activeSection={this.state.activeSection}
      sections={CONTENT}
      renderHeader={this._renderHeader}
      renderContent={this._renderContent}
      duration={400}
      onChange={this._setSection.bind(this)}
    />



    </View>

    <View style={{flex:1,flexDirection:'column',justifyContent: 'flex-start',alignItems:'center',backgroundColor:'#fff'}}>
      <View style={{flex:1,justifyContent: 'flex-start',alignItems:'center',maxHeight:230,paddingTop:20,paddingBottom:20}}>

        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:2,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Same day Delivery</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
                  <Image source={require('../../image/diagonal-arrow.png')} resize='center'style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>BirthDay</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../image/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Aniversary</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
            <Image source={require('../../image/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Ocassion</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../image/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'center',flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20}}>
          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:12}}>Gift Type</Text>
          </View>
          <View style={{flex:1,justifyContent: 'flex-end',alignItems:'flex-end'}}>
              <Image source={require('../../image/diagonal-arrow.png')} resize='center' style={{width:10,height:10}}/>
          </View>
        </View>

          <View style={{flex:1,justifyContent: 'center',alignItems:'flex-start',flexDirection:'row',paddingLeft:20,paddingRight:20,paddingTop:20}}>
            <View style={{flex:2}}>
                <Text style={{fontSize:10}}>Copyright @2017 . All rights reserved</Text>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
              <Text style={{fontSize:10}}>Copyright @2017 </Text>
             </View>
       </View>

      </View>
    </View>
    </ScrollView>
    </View>

    );
  }
}
