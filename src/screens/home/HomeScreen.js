import React, { Component } from 'react';
import { View, Text } from 'react-native';

//import { MeetupApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import { connect } from 'react-redux';
import { fetchMyMeetups } from './actions';
import styles from './styles/HomeScreen'

//const meetupApi = new MeetupApi();
@connect(   state => ({ myMeetups: state.home.myMeetups }), { fetchMyMeetups } )  //despatch method

class HomeScreen extends Component 
{ // static defaultProps = {  meetupApi  }
 //  state = {  loading: false,  meetups: []  }
  componentDidMount() 
   { this.props.fetchMyMeetups();
     // this.setState({ loading: true });
    //  const meetups = await this.props.meetupApi.fetchGroupMeetups();
    //   this.setState({ loading: false, meetups });
     // setTimeout(() => this.setState({ loading: false, meetups }), 2000);  //fake timeout
   }
   render() 
  { //  console.log('/src/screens/home/HOmeScreen.js-this.props.myMeetups=',this.props.myMeetups);
 // console.log('/src/screens/home/HOmeScreen.js-this.props=',this.props);
   // if (this.state.loading) {  return <LoadingScreen />; }
   const {  myMeetups: { isFetched,  data, error, },  } = this.props;
  if (!isFetched) {    return <LoadingScreen />;  } 
  else if (error.on) {  return (   <View>  
                                  <Text>{error.message}</Text>   
                                  </View>  ); }
      return (       <View style={styles.root}>
                        <View style={styles.topContainer}>
                             <Text>HomeScreen</Text>
                        </View>
                        <View style={styles.bottomContainer}>
                             <MyMeetupsList meetups={data} />
                        </View>
                    </View>
           );
  }
}

export default HomeScreen;