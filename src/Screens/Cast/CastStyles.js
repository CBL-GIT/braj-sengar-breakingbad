import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';

import { height } from "../../Styles/responsiveSize"

const CastStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white"
    },
    mainImage: {
        height: height / 3.5,
        width: "100%",
        backgroundColor: colors.black_04,
    },
    introView: {
        flex: 1,
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    aboutView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tvSeries: {
        fontSize: 16,
        fontWeight: "600",
        color: "black",
    },
    searchView: {
        borderBottomWidth: 1,
        borderBottomColor: "#709630",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 16
    },
    searchTextInput: {
        height: 40,
        width: "100%",
        color: "black",
        fontSize: 16,
        textAlignVertical: "top",
    },
    hitSlope: {
        top: 12,
        right: 12,
        left: 12,
        bottom: 12,
    },
    castHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 16
    },
    castText: {
        fontSize: 18,
        fontWeight: "600"
    },
    noDataAvailable: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    aboutText: {
        fontSize: 16,
        fontWeight: "400",
        color: "black",
        marginTop: 12
    },
    searchImage:{
        height: 25,
        width: 25,
        marginHorizontal: 8,
        tintColor: "#709630",
    },
   close_icon :{
        height: 22,
        width: 22,
        tintColor: colors.grey_05
    }
})

export default CastStyles;