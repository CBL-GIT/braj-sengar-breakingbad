import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';

import { height } from "../../Styles/responsiveSize"

const CastDetailsStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "black"
    },
    pic: {
        height: height / 3.5,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,1)',
    },
   backBtnView :{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 16
    },
    hitSlope: {
        top: 12,
        right: 12,
        left: 12,
        bottom: 12,
    },
    backBtn:{
        height: 25,
        width: 25,
        tintColor: "white",
    },
    mainSubView:{
        flex: 1,
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: "white"
    },
    rowBetween:{
        flexDirection: "row",
        alignItems: "center"
    },
    nameText:{
        fontSize: 22,
        color: "black",
    },
    nickName:{
        fontSize: 20,
        color: "black",
    },
   subHeading :{
        fontSize: 16,
        fontWeight: "400",
        color: "black",
        marginTop: 4
    },
    heading:{
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        marginTop: 16,
    }
})

export default CastDetailsStyles;