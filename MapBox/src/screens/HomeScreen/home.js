import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icons from '../../assets/';
import Styles from './style';
import { WebView } from 'react-native-webview';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: true,
            showLocation: 'Show Locations',
            hideLocation: 'Hide Locations',
        }
    }
    HideLocation = () => {
        if(this.state.location === true){
            this.setState({location: false})
        }
        if(this.state.location === false){
            this.setState({location: true})
        }
    }
    render() {
        return(
            <View style={Styles.MainContainer}>
            <View style={Styles.Header}>
                <View style={Styles.Left}>
                    <Image source={Icons.User} style={Styles.Icon} />
                </View>
                <Text style={Styles.Middle}>Map Box</Text>
                <View style={Styles.Right}>
                    <Image source={Icons.Notify} style={Styles.Icon} />
                </View>
            </View>
            <View style={{marginTop: 20, height: '56%', padding: 10}}>
                <WebView source={{ uri: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0,60/600x600?access_token=pk.eyJ1Ijoia3Rva3RvIiwiYSI6ImNrajBqMWUyZTFpZjMzMW54N3M4NHg4ZjcifQ.EESknqLptsq43iJRda_CnQ' }} />
            </View>
            <View style={Styles.Body}>      
            <View style={Styles.BtnRow}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {this.HideLocation()}}
                    style={Styles.ButtonHideShow}
                    >
                        <Text style={Styles.LocText}>{this.state.location === true ? this.state.hideLocation : this.state.showLocation}</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {this.props.navigation.navigate('Detail')}}
                    style={Styles.ButtonHideShow}
                    >
                        <Text style={Styles.LocText}>Navigate To Detail</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.location === false 
                    ? 
                    <View style={Styles.Footer}><Text></Text></View>
                    :
                    <View style={Styles.Footer}>
                    <Text style={Styles.LocText2}>Locations</Text>
                    <View style={Styles.MapRound}>
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                    </View>
                </View>
                }
            </View>
        </View>
        );
    }
}

export default Home;