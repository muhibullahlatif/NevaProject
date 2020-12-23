import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icons from '../../assets/';
import Styles from './style';

const Detail = (props) => {
    return(
        <View style={Styles.MainContainer}>
            <View style={Styles.Header}>
                <View style={Styles.Left}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {props.navigation.navigate('Home')}}
                        >
                        <Image source={Icons.Arrow} style={Styles.Icon} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.Middle}>Location Details</Text>
                <View style={Styles.Right}>
                    <Image source={Icons.About} style={Styles.Icon} />
                </View>
            </View>
            <View style={Styles.Main}>
                <Text style={Styles.MainText}>Luthiana Old School Details</Text>
                <View style={Styles.MainInner}>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Vilnius</Text>
                            <Text style={Styles.AccSubText}>Latitude: 37.8025259 Longitude: -122.4351431</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Kaunas</Text>
                            <Text style={Styles.AccSubText}>Latitude: 37.8025259 Longitude: -122.4351431</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Kernave</Text>
                            <Text style={Styles.AccSubText}>Latitude: 37.8025259 Longitude: -122.4351431</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Klaipeda</Text>
                            <Text style={Styles.AccSubText}>Latitude: 37.8025259 Longitude: -122.4351431</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Detail;