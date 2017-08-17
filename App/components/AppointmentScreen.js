import React, { Component } from 'react';
import { Platform, StyleSheet,  Linking, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	section: {
		flexDirection:'column',
		alignItems:'center',
		width:"100%",
		padding:10,
		margin:10,
		backgroundColor:"#EEEEEE"
	},
	  sectionHeader: {
	    fontWeight:"bold",
	    fontSize:15,
	  },
	  vitals: {
		  flexDirection:"column"
	  }
	});


const DumbAppointmentScreen = (props) => (
	<View style={{
  	    position: 'absolute',
  	    top: 5,
  	    left: 5,
  	    right: 5,
  	    bottom: 5,
  	    backgroundColor:'white',
  	    borderRadius:10,
  	    flexDirection:'column',
  	    alignItems:'center',
	}}>
		<View style={{
			flexDirection:'row',
			alignItems:'center',
		}}>
			<View style={{width:"20%", flexDirection: "column", alignItems:"center", paddingTop:10}}>
				<Image style={{height:50, width:50}} resizeMode="center" source={require('../img/user.png')}/>
				<Text style={{backgroundColor:'transparent', textAlign:'left', paddingBottom:10, fontSize:10}}>{props.appointment.patient.name}</Text>
			</View>
			<View style={{width:"60%", alignItems:"center", paddingTop:10}}>
				<Text style={{fontSize:30}}>{props.appointment.date}</Text>
			</View>
			<View style={{width:"20%", flexDirection: "column", alignItems:"center", paddingTop:10}}>
				<Image style={{height:50, width:50}} resizeMode="center" source={require('../img/doctor.png')}/>
				<Text style={{backgroundColor:'transparent', textAlign:'left', paddingBottom:10, fontSize:10}}>{props.appointment.doctor.name}</Text>
			</View>
		</View>
		<View style={styles.section}>
			<View>
				<Text style={styles.sectionHeader}>
					Vitals
				</Text>
			</View>
			<View style={styles.vitals}>
				<Text>Height</Text>
			</View>
			<View>
				<Text>Width:100</Text>
			</View>
		</View>
		<View style={styles.section}>
			<View>
				<Text style={styles.sectionHeader}>
					Notes
				</Text>
			</View>
			<Text>Bedrest for 2 weeks.</Text>
		</View>
	</View>
);

const DumbCardImage = (props) => (
	<View style={{borderWidth:1}}>
		Hello!
	</View>
);



class AppointmentScreen extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			this.props.appointment?<DumbAppointmentScreen appointment={this.props.appointment}/> : null
		);
    }
}

const mapStateToProps = state => ({
	show: state.showAbout,
	fbInfo: state.fbInfo,
	appointment: state.appointmentStore.appointment
})

const mapDispatchToProps = (dispatch) => ({
	hideAbout: () => { dispatch({ type: 'HIDE_ABOUT' }) },
	showAbout: () => { dispatch({ type: 'SHOW_ABOUT' }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentScreen)
