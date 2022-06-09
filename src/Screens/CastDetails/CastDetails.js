import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native';
import ImagePath from "../../Constants/ImagePath"
import CastDetailsStyles from './CastDetailsStyles';

const CastDetails = (props) => {

    const [prevScreenData, setPrevScreenData] = useState(props?.route?.params?.profileDetail)
    return (
        <View style={CastDetailsStyles.mainView}>
            <SafeAreaView style={{ backgroundColor: "black" }} />
            <ImageBackground
                source={{ uri: prevScreenData?.img }}
                style={CastDetailsStyles.pic}
                resizeMode={"contain"}
            >
                <SafeAreaView />
                <View style={CastDetailsStyles.backBtnView}>
                    <TouchableOpacity
                        hitSlop={CastDetailsStyles.hitSlope}
                        activeOpacity={0.7}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Image
                            source={ImagePath.ic_back}
                            style={CastDetailsStyles.backBtn}
                            resizeMode={"contain"}
                        />
                    </TouchableOpacity>
                </View>

            </ImageBackground>

            <View style={CastDetailsStyles.mainSubView}>

                <View style={CastDetailsStyles.rowBetween}>
                    <Text style={CastDetailsStyles.nameText}>{prevScreenData?.name}</Text>

                    <Text style={CastDetailsStyles.nickName}>{" (" + prevScreenData?.nickname + ")"}</Text>
                </View>

                <Text style={CastDetailsStyles.subHeading}>{prevScreenData?.occupation[0] || ""}</Text>

                <Text style={CastDetailsStyles.heading}>{"Status"}</Text>
                <Text style={CastDetailsStyles.subHeading}>{prevScreenData?.status}</Text>

                <Text style={CastDetailsStyles.heading}>{"About"}</Text>
                <Text style={CastDetailsStyles.subHeading}>{"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."}</Text>


                <Text style={CastDetailsStyles.heading}>{"Season appearance"}</Text>

                <View style={{ flexDirection: "row" }}>
                    {
                        prevScreenData && prevScreenData?.appearance.map((item, index) => {
                            return (
                                index == prevScreenData.appearance.length - 1 ?
                                    <Text style={CastDetailsStyles.subHeading}>{"S" + item}</Text>
                                    :
                                    <Text style={CastDetailsStyles.subHeading}>{"S" + item + ","}</Text>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default CastDetails;
