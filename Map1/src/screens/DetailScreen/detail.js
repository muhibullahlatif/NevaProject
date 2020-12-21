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
                <Text style={Styles.MainText}>Mindaugo Apartamental Details</Text>
                <View style={Styles.MainInner}>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Addresss 1</Text>
                            <Text style={Styles.AccSubText}>Address Sub Details</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Addresss 2</Text>
                            <Text style={Styles.AccSubText}>Address Sub Details</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Addresss 3</Text>
                            <Text style={Styles.AccSubText}>Address Sub Details</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                    <View style={Styles.AccordianContainer}>
                        <View>
                            <Text style={Styles.TextAcc}>Addresss 4</Text>
                            <Text style={Styles.AccSubText}>Address Sub Details</Text>
                        </View>
                        <Image source={Icons.ArrowRight} style={Styles.AccImg} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Detail;