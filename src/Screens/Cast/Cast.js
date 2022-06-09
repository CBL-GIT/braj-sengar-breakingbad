import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    UIManager,
    LayoutAnimation,
    ActivityIndicator,
    ImageBackground,
    StyleSheet,
    Dimensions,
    FlatList,
    Animated,
    RefreshControl
} from 'react-native';
import axios from 'axios';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Loader } from "../../Components/Loader"
import { CAST_LISTING_API } from '../../Config/Urls';
import ImagePath from "../../Constants/ImagePath"
import CastStyles from './CastStyles';
import colors from '../../Styles/colors';
import CastView from '../../Components/CastView';

if (
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Cast = (props) => {

    const [allCastData, setAllCastData] = useState([])
    const [allCast, setAllCast] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isRefreshing, setRefreshing] = useState(false)
    const [isSearching, setSearching] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        _getDataFromApi()
    }, [])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setSearchText("")
            _getDataFromApi()
        });
        return unsubscribe;
    }, [props.navigation]);

    useEffect(() => {
        _searchFilterFunction()
    }, [searchText])

    const _getDataFromApi = async () => {
        setIsLoading(true)
        axios.get(CAST_LISTING_API)
            .then(function (response) {
                setAllCastData(response?.data)
                setAllCast(response?.data)
                setIsLoading(false)
            }).catch(function (error) {
                setIsLoading(false)
            })
    }

    const _handleShow = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setShowSearch(!showSearch)
        setTimeout(() => {
            setSearchText("")
        }, 300);
    }

    const _searchFilterFunction = () => {
        setSearching(true)
        if (searchText) {
            const newData = allCast.filter((item, index) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setAllCast(newData);
            setTimeout(() => {
                setSearching(false)
            }, 700);
        } else {
            setTimeout(() => {
                setAllCast(allCastData);
                setSearching(false)
            }, 500);
        }
    };

    const _renderCast = ({ item, index }) => {
        return (
            <CastView
                itemData={item}
                onPress={() => props.navigation.navigate("CastDetails", {
                    profileDetail: item
                })}
            />
        )
    }

    const _renderListHeaderComponent = () => {
        return (
            isSearching ?
                <ActivityIndicator
                    animating={isSearching}
                    size={"large"}
                    color={'rgba(108,157,141,1)'}
                    style={{ marginVertical: 48 }}
                />
                :
                <></>
        )
    }

    const _listEmptyComp = () => {
        return (
            !isLoading ?
                !isSearching ?
                    <Text style={CastStyles.noDataAvailable}>{"No data available"}</Text>
                    : <></>
                :
                <></>
        )
    }

    return (
        <View style={CastStyles.mainView}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"handled"}
                showsVerticalScrollIndicator={false}>

                <Image
                    source={ImagePath.breaking_bad_bg}
                    style={CastStyles.mainImage}
                />

                <View style={CastStyles.introView}>

                    <View style={CastStyles.aboutView}>
                        <Text style={CastStyles.tvSeries}>{"TV Series • 2008–2013 • 15"}</Text>

                    </View>

                    <Text style={{ ...CastStyles.tvSeries, marginTop: 8 }}>{"⭐ IMDB  9.5/10"}</Text>

                    <Text style={CastStyles.aboutText}>{"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future."}</Text>

                </View>

                {showSearch ?
                    <View style={CastStyles.searchView}>
                        <Image
                            source={ImagePath.ic_search}
                            style={CastStyles.searchImage}
                            resizeMode={"contain"}
                        />
                        <View style={{ width: "80%" }}>
                            <TextInput
                                style={CastStyles.searchTextInput}
                                placeholder={"Search"}
                                value={searchText}
                                onChangeText={(val) => setSearchText(val)}
                            />
                        </View>

                        <TouchableOpacity
                            hitSlop={CastStyles.hitSlope}
                            activeOpacity={0.7}
                            onPress={_handleShow}
                        >
                            <Image
                                source={ImagePath.close}
                                style={CastStyles.close_icon}
                                resizeMode={"contain"}
                            />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={CastStyles.castHeader}>
                        <Text style={CastStyles.castText}>{"Cast"}</Text>

                        <TouchableOpacity
                            hitSlop={CastStyles.hitSlope}
                            activeOpacity={0.7}
                            onPress={_handleShow}
                        >
                            <Image
                                source={ImagePath.ic_search}
                                style={CastStyles.searchImage}
                                resizeMode={"contain"}
                            />
                        </TouchableOpacity>
                    </View>
                }


                <FlatList
                    data={allCast}
                    extraData={allCast}
                    numColumns={2}
                    ListHeaderComponent={_renderListHeaderComponent}
                    keyExtractor={(item, index) => index.toString()}
                    columnWrapperStyle={{ marginTop: 16 }}
                    renderItem={_renderCast}
                    ListEmptyComponent={_listEmptyComp}
                    ListFooterComponent={() => (
                        <View style={{ marginVertical: 120 }} />
                    )}
                />

            </KeyboardAwareScrollView>
            <Loader isLoading={isLoading} />
        </View>
    )
}

export default Cast;
