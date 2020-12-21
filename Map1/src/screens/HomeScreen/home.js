import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icons from '../../assets/';
import Styles from './style';

const Home = (props) => {
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
            <View style={Styles.Body}>
                <Image source={Icons.Map} style={Styles.Map} />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {props.navigation.navigate('Detail')}}
                    style={Styles.ButtonHideShow}
                    >
                        <Text style={Styles.LocText}>Navigate To Detail</Text>
                    </TouchableOpacity>
                <View style={Styles.Footer}>
                    <Text style={Styles.LocText2}>Locations</Text>
                    <View style={Styles.MapRound}>
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                        <Image source={Icons.Map} style={Styles.RoundMap} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Home;