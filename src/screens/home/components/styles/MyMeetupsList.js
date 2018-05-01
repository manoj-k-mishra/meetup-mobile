import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create(
{  root: {    flex: 1,  },
   meetupCard: {  height: 200,  width: 175,   marginRight: 2, marginLeft:2, backgroundColor: '#f73859', },
   meetupCardTopContainer: { flex: 1, position: 'relative',  },
  meetupCardTitle: {  fontFamily: 'montserratBold', position: 'absolute',  color: '$whiteColor',  top: '2%',  left: '2.5%',  },

  titleContainer: {    flex: 0.1, paddingHorizontal: '2.5%',  paddingVertical: '2.5%', },
  title: {    color: '$whiteColor',    fontSize: 25, fontFamily: 'montserrat', },
  contentContainer: {    flex: 1,},

  meetupCardBottomContainer: {    flex: 0.4,    backgroundColor: '$whiteColor',    justifyContent: 'center',
                                paddingHorizontal: '2.5%',
                            },

  meetupCardMetaName: { fontSize: 15, fontFamily: 'montserrat', },
  meetupCardMetaDate: { fontSize: 13, fontFamily: 'montserratLight', },
  
});

export default styles;