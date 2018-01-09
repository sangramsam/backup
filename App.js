/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Button,
	BackAndroid,
	ListView,
	TextInput,
	Text,
	ActivityIndicator,
	View
} from 'react-native';
import {Actions, Scene, Router, Animations} from 'react-native-router-flux';
import {Login} from './src/components/login';
import {Intro} from './src/components/Intro';
import {Forgot} from './src/components/forgotPassoword';
import {LoginWithoutPassword} from './src/components/LoginWithoutPassword';
import {Registration} from './src/components/Registration';
import {SetPassword} from './src/components/setPassword';
import {Myprofile} from './src/components/myProfile/myprofile';
import {Referral} from './src/components/myProfile/referral';
import {LoginReferral} from './src/components/myProfile/LoginRefer';
import {SetPasswords} from './src/components/myProfile/SetPassword';
import {ChangePassword} from './src/components/myProfile/changePassword';
import {ProfileForm} from './src/components/myProfile/ProfileForm';
import {Address} from './src/components/myProfile/Address';
import {MyOrder} from './src/components/myProfile/MyOrder';
import {Reminder} from './src/components/myProfile/Reminder';
import {Voucher} from './src/components/myProfile/Vouchers';
import {Home} from './src/components/home';
import {Location} from './src/components/location';
import {PDP} from './src/components/PDP/PDP';
import {selectPopup} from './src/components/PDP/selectPopup';
import {Varinant} from './src/components/PDP/expressvariant';
import {Homepage} from './src/components/Homepage';
import {Example} from './src/components/test';
import {Gallery} from './src/components/Gallery';
import {Calender} from './src/components/calender';
import Drawer from './src/components/drawerMain'
import Checkout from './src/components/checkout'
import {Currency} from './src/components/Currency'
import {Cart} from './src/components/cartpage'
import Thankyou from './src/components/thankyouPage'
import {AddressRegistration} from './src/components/addressRegistartion';
import {AddNewReminder} from './src/components/addReminder';
import {Category} from './src/components/category';
import {CartEmpty} from './src/components/Emptycart';
import {Notification} from './src/components/Notification';
import {Addon} from './src/components/Addon';
import Payment from './src/components/payment';
/*class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}
	componentDidMount() {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((responseJson) => {
				let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				this.setState({
					isLoading: false,
					dataSource: ds.cloneWithRows(responseJson),
				}, function () {
					// do something with new state
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render() {
		if (this.state.isLoading) {
			return (
				<View style={{flex: 1, paddingTop: 20}}>
					<ActivityIndicator size="large" color="#0000ff"/>
				</View>
			);
		}
		return (<View style={{flex: 1}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Text style={styles.red}>Title {rowData.title} \n,
						Body {rowData.body}</Text>}
				/>
			</View>
		);
	}
}*/
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1
    };
    return style;
};
const scenes = Actions.create(
	<Scene key="root" >
		<Scene key="Intro" component={Intro} hideNavBar />
		<Scene key="Login"  hideNavBar component={Login} title="Login / Register"  />
		<Scene key="LoginWithoutPassword" hideNavBar component={LoginWithoutPassword} title="Login Without Password"/>
		<Scene key="Forgot" hideNavBar component={Forgot} title="Forgot Password"/>
		<Scene key="Registration" hideNavBar component={Registration} title="Registraion"/>
		<Scene key="Home" hideNavBar component={Home} title="Home"/>
		<Scene key="SetPassword" hideNavBar component={SetPassword} title="Home"/>
		<Scene key="Myprofile" hideNavBar component={Myprofile} />
		<Scene key="Referral" hideNavBar component={Referral} />
		<Scene key="SetPasswords" hideNavBar component={SetPasswords} />
		<Scene key="LoginReferral" hideNavBar component={LoginReferral} />
		<Scene key="ChangePassword" hideNavBar component={ChangePassword} />
		<Scene key="ProfileForm" hideNavBar component={ProfileForm} />
		<Scene key="MyOrder" hideNavBar component={MyOrder} />
		<Scene key="Address" hideNavBar component={Address} />
		<Scene key="Reminder" hideNavBar component={Reminder} />
		<Scene key="Voucher" hideNavBar component={Voucher} />
		<Scene key="Location" hideNavBar component={Location} />
		<Scene key="PDP" hideNavBar component={PDP} />
		<Scene key="Homepage" hideNavBar component={Homepage} />
		<Scene key="Example" hideNavBar component={Example} />
		<Scene key="Gallery" hideNavBar component={Gallery} />
		<Scene key="selectPopup" hideNavBar component={selectPopup} />
		<Scene key="Varinant" hideNavBar component={Varinant} />
		<Scene key="Calender" hideNavBar component={Calender} />
		<Scene key="drawer" hideNavBar component={Drawer} />
		<Scene key="Currency" hideNavBar component={Currency} />
		<Scene key="Cart" hideNavBar component={Cart} />
		<Scene key="checkout" hideNavBar component={Checkout} />
		<Scene key="AddressRegistration" hideNavBar component={AddressRegistration} />
		<Scene key="AddNewReminder" hideNavBar component={AddNewReminder} />
		<Scene key="Category" hideNavBar component={Category} />
		<Scene key="CartEmpty" hideNavBar component={CartEmpty} />
		<Scene key="Notification" hideNavBar component={Notification} />
		<Scene key="Addon" hideNavBar component={Addon} />
		<Scene key="Thankyou" hideNavBar component={Thankyou} />
		<Scene key="Payment" hideNavBar component={Payment} />
	</Scene>
);
export default class App extends Component {
    componentDidMount() {
        // do stuff while splash screen is shown

		// After having done stuff (such as async tasks) hide the splash screen
    }
	componentWillMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			return true
		});
	}

	render() {
		return <Router scenes={scenes}  getSceneStyle={getSceneStyle} />
	}
}

