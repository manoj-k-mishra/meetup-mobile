//export const fetchMeetups = () =>
 // fetch('http://10.133.44.111:3000/api/meetups')
 // .then(res =>  res.json() );

import axios from 'axios';
//import { Platform } from 'react-native';

//axios.defaults.baseURL= 'http://10.133.44.111:3000/api';
axios.defaults.baseURL= 'http://192.168.0.3:3000/api';
//axios.defaults.baseURL = url;
const fakeGroupId = '5ae54364b713353104815402';
class MeetupApi 
{  constructor() {  this.groupId = fakeGroupId;
                    this.path = `/groups/${this.groupId}/meetups`;
                 }
   async fetchGroupMeetups() 
   {     try {  const { data } = await axios.get(this.path);
                 return data.meetups;
             } catch (e) {    console.log('/constants/api.js--e-',e);}
         
    }
} 
export { MeetupApi,};
