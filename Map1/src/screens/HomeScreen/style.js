/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  MainContainer: {
    display: 'flex',
    flex : 1
  },
  Header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
  },
  Icon: {
      width: 30,
      height: 30,
  },
  Left: {
      marginLeft: 20,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      elevation: 18,
  },
  Middle: {
      fontSize: width * 0.062,
      fontWeight: 'bold',
  },
  Right: {
    marginRight: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  Body: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Map: {
      width: '100%',
      height: '75%',
  },
  ButtonHideShow: {
      width: '90%',
      position: 'absolute',
      bottom: 180,
      padding: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(255,255,255)',
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  LocText: {
    color: '#666',
    fontSize: width * 0.042,
    fontWeight: 'bold',
  },
  LocText2: {
    color: '#666',
    fontSize: width * 0.052,
    fontWeight: 'bold',
  },
  MapRound: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RoundMap: {
      width: 80,
      height: 80,
      borderRadius: 50,
      margin: 10,
  },
});
