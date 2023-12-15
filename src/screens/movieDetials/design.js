import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
    ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from 'react-native-video'

import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import RegularText from "../../typography/ regular-text";
import { Colors } from "../../constant/color";
import { useSelector } from "react-redux";
import { ImageBaseUrl } from "../../api/baseUrl";

import { Strings } from "../../constant/string";
import images from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import Button from "../../component/button";
import { NavigationPath } from "../../constant/navigationRoute";

const Design = () => {
    const { movieDetail } = useSelector((state) => state.watch);
    const [isVideoPlay, setVideoPlay] = useState(false)
    const data = movieDetail
    const nav = useNavigation()

    const Cl = [Colors.C15D2BC, Colors.CE26CA5, Colors.C564CA3, Colors.C61C3F2];

    const getRandomColor = () => {
        let e = Math.floor(Math.random() * Cl.length);

        return Cl[e];
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleLoadStart = () => {
        console.log('handleLoadStart')
        setIsLoading(true);
    };

    const handleLoad = () => {
        console.log("handleLoad")
        setIsLoading(false);
    };

    const handleError = (error) => {
        console.error('Video loading error:', error);
        setIsLoading(false);
    };
    return (

        isVideoPlay ?
            <>
                {isLoading
                    &&
                    <View style={{ alignSelf: "center", flex: 1, justifyContent: "center", alignItems: "center", position: "absolute" }}>
                        <ActivityIndicator size="large" color="#fff" />
                        <RegularText label={'Loading...'} />

                    </View>
                }
                <Video
                    source={

                        { uri: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" }
                    }

                    fullscreenAutorotate={true}
                    controls={true}
                    disableVolume
                    ignoreSilentSwitch={"ignore"}

                    onLoadStart={handleLoadStart}
                    onLoad={handleLoad}
                    onError={handleError}
                    naturalSize={{
                        height: 1080,
                        orientation: 'landscape',
                        width: '1920',
                    }
                    }
                    volume={1.0}
                    disableBack
                    pictureInPicture
                    fullscreen={true}
                    fullscreenOrientation="landscape"

                    style={{
                        width: "100%",
                        height: Platform.OS == "android" ? "100%" : "100%",

                    }}
                    onEnd={() => setVideoPlay(false)}

                />

            </>
            :
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.CFFFFFF }} >

                <StatusBar hidden />
                <ImageBackground
                    source={{ uri: ImageBaseUrl + data.poster_path }}
                    style={styles.backgroundImageContainer}

                >
                    <View style={styles.goBack}>
                        <TouchableOpacity
                            onPress={() => {
                                nav.goBack()
                            }}
                        >
                            <Image
                                source={images.UP}
                                style={styles.searchImage}
                                resizeMode="contain"
                                tintColor={Colors.CFFFFFF}
                            />
                        </TouchableOpacity>
                        <RegularText ml={WIDTH_BASE_RATIO(10)} label={`${Strings.WATCH}`} color={Colors.CFFFFFF} fw={'500'} />

                    </View>
                    <RegularText
                        padding={1}
                        label={`${data.title}`}
                        size={16}
                        fw={500}
                        color={Colors.CFFFFFF}
                        textAlign={"center"}
                        mt={HEIGHT_BASE_RATIO(10)}
                    />

                    <RegularText
                        padding={1}
                        label={`In theaters ${data.release_date}`}
                        size={16}
                        fw={500}
                        color={Colors.CFFFFFF}
                        textAlign={"center"}
                        mt={HEIGHT_BASE_RATIO(10)}
                    />
                    <View style={{ marginTop: HEIGHT_BASE_RATIO(20) }}>
                        <Button label={"  Get Tickets"}
                            clor={Colors.C61C3F2}
                            onPress={() => nav.navigate(NavigationPath.GETTICKETS)}
                        />
                    </View>
                    <View style={{ marginTop: HEIGHT_BASE_RATIO(10) }}>
                        <Button

                            icn={"ll"}
                            onPress={() => setVideoPlay(true)}

                            label={"Watch Trailer"}
                            clor={"rgba(0, 0, 0, 0.6)"}
                        />
                    </View>
                </ImageBackground>
                <View
                    style={styles.genresContainer}
                >
                    <RegularText
                        padding={1}
                        size={16}
                        color={Colors.C564CA3}
                        fw={500}
                        mt={HEIGHT_BASE_RATIO(20)}
                    >
                        Genres
                    </RegularText>
                    <View
                        style={{
                            marginTop: HEIGHT_BASE_RATIO(15),

                            height: HEIGHT_BASE_RATIO(24),
                        }}
                    >
                        <FlatList
                            style={{}}
                            data={data.genres}
                            horizontal={true}
                            nestedScrollEnabled={true}
                            keyExtractor={(item) => item.toString()} // Convert number to string for key
                            renderItem={({ item, index }) => {

                                return (
                                    <View
                                        style={[styles.genresItem, {
                                            backgroundColor: getRandomColor()
                                        }]}
                                    >
                                        <RegularText label={item.name} size={HEIGHT_BASE_RATIO(14)} color={Colors.CFFFFFF} />

                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View
                        style={styles.overview}
                    />
                    <RegularText
                        padding={1}
                        size={16}
                        color={Colors.C564CA3}
                        fw={500}
                        mt={HEIGHT_BASE_RATIO(15)}
                    >
                        Overview
                    </RegularText>
                    <RegularText
                        numberOfLines={"auto"}
                        padding={1}
                        size={12}
                        lh={20}
                        color={"#8F8F8F"}
                        fw={400}
                        mt={HEIGHT_BASE_RATIO(15)}
                    >
                        {data.overview}
                    </RegularText>
                </View>

            </SafeAreaView>
    );
};
export default Design;
