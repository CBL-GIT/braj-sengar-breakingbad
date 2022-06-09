import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Styles/colors';
import { width } from '../Styles/responsiveSize';

const CastView = ({
    itemData,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.mainView}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Image
                source={{ uri: itemData?.img }}
                style={styles.img}
            />
            <View style={styles.nameView}>
                <Text style={styles.nameText}>{itemData?.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainView: {
        width: width / 2 - 24,
        marginHorizontal: 12,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "black"
    },
    img: {
        width: width / 2 - 24,
        height: 240
    },
    nameView: {
        position: "absolute",
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: "center",
        width: width / 2 - 24,
        bottom: 0
    },
    nameText: {
        fontSize: 16,
        fontWeight: "600",
        paddingVertical: 7,
        color: colors.black
    }
})

export default CastView;
