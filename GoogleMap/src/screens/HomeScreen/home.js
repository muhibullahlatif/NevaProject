import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icons from '../../assets/';
import Styles from './style';
import MapView, { Polygon, PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            coordinates: [
                { name: 'Position 1', latitude: 37.8025259, longitude: -122.4351431},
                { name: 'Position 2', latitude: 37.7896386, longitude: -122.421646 },
                { name: 'Position 3', latitude: 37.7665248, longitude: -122.4161628 },
                { name: 'Position 4', latitude: 37.7734153, longitude: -122.4577787 },
                { name: 'Position 5', latitude: 37.7948605, longitude: -122.4596065 },
            ],
            location: true,
            showLocation: 'Show Locations',
            hideLocation: 'Hide Locations',
        }
    }
    NavigateScreen = () => {
        this.props.navigation.navigate('Detail');
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
                <Text style={Styles.Middle}>Google Map</Text>
                <View style={Styles.Right}>
                    <Image source={Icons.Notify} style={Styles.Icon} />
                </View>
            </View>
            <View style={Styles.MapContainer}>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    style={Styles.Map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035
                    }}
                >
                    {
                    this.state.coordinates.map(marker => {
                        return(
                            <MapView.Marker
                            draggable
                            key={marker.name}
                            coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                            >
                                <Image source={Icons.Marker} style={{width: 50, height: 50}} />
                                <Callout onPress={this.NavigateScreen}>
                                    <Text>{marker.name}</Text>
                                </Callout>
                            </MapView.Marker>
                        );
                    })
                }
                <MapView.Polygon 
                    coordinates={this.state.coordinates}
                    fillColor={'rgba(100, 100, 200, 0.3)'}
                />
                </MapView>
                {/* <Marker
                    draggable
                    coordinate={{latitude: 37.7825259, longitude: -122.4351431 }}
                    >
                    <Callout onPress={this.NavigateScreen}>
                        <Image source={Icons.Notify} style={{width: 20, height: 20}} />
                    </Callout>
                </Marker> */}
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