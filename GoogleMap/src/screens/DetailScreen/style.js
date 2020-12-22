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
  MainText: {
      marginLeft: 20,
      marginTop: 20,
      fontSize: width * 0.082,
      fontWeight: 'bold',
  },
  MainInner: {
      padding: 15,
  },
  AccordianContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#bbbbbb'
  },
  AccImg: {
      width: 20,
      height: 20,
  },
  TextAcc: {
      fontSize: width * 0.052,
      fontWeight: 'bold',
  },
  AccSubText: {
      fontSize: width * 0.040,
      color: '#666',
  },
});
