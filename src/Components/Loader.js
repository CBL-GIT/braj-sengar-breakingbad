
import React from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
// import commonStyles from '../styles/commonStyles';

import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const width = Dimensions.get("window").width

export const Loader = ({
    isLoading,
    message,
}) => (
    isLoading ?
        <View style={{ ...styles.mainView, ...StyleSheet.absoluteFill }}>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                height: 110,
            }}>
                <SkypeIndicator
                    color={"black"}
                    size={60}
                />
                <Text style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    paddingHorizontal: 8,
                }}
                    numberOfLines={1}
                >{message ? message : "Loading"}</Text>
            </View>
        </View>
        : <></>
);


let styles = new StyleSheet.create({
    mainView: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
    }
})
