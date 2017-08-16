import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, Text, Image, View, TextInput, ListView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import LoginScreen from './components/LoginScreen.js';
import HomeScreen from './components/HomeScreen.js';

const FBSDK = require('react-native-fbsdk');
const {
  AccessToken
} = FBSDK;

class DoctorApp extends Component {
	  constructor(props) {
		    super(props);
            AccessToken.getCurrentAccessToken().then((data) => {
            	if(data){
	                const { accessToken } = data
	          		  fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
	          		  .then((response) => response.json())
	          		  .then((json) => {
	          		    this.props.setFbInfo(json);
	          		  })
	          		  .catch(() => {
	          		    reject('ERROR GETTING DATA FROM FACEBOOK')
	          		  })
            	}
              })

	  }

	    render() {
		    this.styles = StyleSheet.create({
		    	container: {
		    	    flex: 1,
		    	    alignItems: 'center',
		    	  },
		    	  backgroundContainer: {
		    	    position: 'absolute',
		    	    top: 0,
		    	    bottom: 0,
		    	    left: 0,
		    	    right: 0,
		    	  }
		    });

	    return (
	    	<View style={this.styles.container}>
	    	<HomeScreen/>
	        </View>
	    );
	  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
	deviceInfo:state.deviceInfo,
	fbInfo:state.fbInfo,
	location:state.location,
	assetLoadedProgress: state.assetLoadedProgress,
	assetLoadingCompleted: state.assetLoadingCompleted,
	item: state.item,
	doorState:state.doorState,
	peeking:state.peeking,
	knocked: state.knocked,
	tutorialMode: state.tutorialMode,
	noLocation: state.noLocation
})

const mapDispatchToProps = (dispatch) => ({
	setHost: (host) => { dispatch({ type: 'SET_HOST', host:host }) },
	setDeviceInfo: (deviceInfo) => { dispatch({ type: 'SET_DEVICE_INFO', deviceInfo:deviceInfo }) },
	setFbInfo: (info) => { dispatch({ type: 'LOGIN', fbInfo:info }) },
	setLatLong: (location) => { dispatch({ type: 'SET_LAT_LONG', location:location }) },
	setInventory: (inventory) => { dispatch({ type: 'SET_INVENTORY', inventory:inventory }) },
	setTotalItems: (totalItems) => { dispatch({ type: 'SET_TOTAL_ITEMS', totalItems:totalItems }) },
	setUserProfile: (userProfile) => { dispatch({ type: 'SET_USER_PROFILE', userProfile:userProfile }) },
	noLocation: () => { dispatch({ type: 'NO_LOCATION' }) },
	assetsLoadedProgress: (progress) => { dispatch({ type: 'ASSETS_LOADED_PROGRESS', progress:progress }) },
	assetsLoaded: () => { dispatch({ type: 'ASSETS_LOADED' }) },
	resetDoor: () => { dispatch({ type: 'RESET_DOOR' }) },
	openDoor: () => { dispatch({ type: 'OPEN_DOOR' }) },
	showTutorial: () => { dispatch({ type: 'SHOW_TUTORIAL' }) },
	showInventory: () => { dispatch({ type: 'SHOW_INVENTORY' }) },
	hideInventory: () => { dispatch({ type: 'HIDE_INVENTORY' }) },
	setDoorOpenImage: (image) => { dispatch({ type: 'SET_DOOR_OPEN_IMAGE', image:image }) },
	setDoorClosedImage: (image) => { dispatch({ type: 'SET_DOOR_CLOSED_IMAGE', image:image }) },
	setWindowImage: (image) => { dispatch({ type: 'SET_WINDOW_IMAGE', image:image }) },
	setMascotImage: (image) => { dispatch({ type: 'SET_MASCOT_IMAGE', image:image }) },
	mascotPeek: () => { dispatch({ type: 'MASCOT_PEEK' }) },
	foundItem: (item) => { dispatch({ type: 'FOUND_ITEM', item:item }) },
	showItem: () => { dispatch({ type: 'SHOW_ITEM'}) },
	showBalloon: (wordBalloon) => { dispatch({ type: 'SHOW_BALLOON', wordBalloon:wordBalloon }) },
	hideBalloon: () => { dispatch({ type: 'HIDE_BALLOON' }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorApp)