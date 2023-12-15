import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import RegularText from "../../typography/ regular-text";
import { Colors } from "../../constant/color";

const Design = () => {
    const data = {
        "adult": false,
        "backdrop_path": "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
        "belongs_to_collection": null,
        "budget": 13000000,
        "genres": [
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 28,
                "name": "Action"
            }
        ],
        "homepage": "https://tickets.godzilla.com",
        "id": 940721,
        "imdb_id": "tt23289160",
        "original_language": "ja",
        "original_title": "ゴジラ-1.0",
        "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
        "popularity": 395.317,
        "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
        "production_companies": [
            {
                "id": 882,
                "logo_path": "/iDw9Xxok1d9WAM2zFicI8p3khTH.png",
                "name": "TOHO",
                "origin_country": "JP"
            },
            {
                "id": 182161,
                "logo_path": "/wvG4lK0m76M6jK8WbWkXNecA7SP.png",
                "name": "TOHO Studios",
                "origin_country": "JP"
            },
            {
                "id": 12386,
                "logo_path": "/oxvw2Mrq3GcTxFc2mlT7E5tpek7.png",
                "name": "Robot Communications",
                "origin_country": "JP"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "JP",
                "name": "Japan"
            }
        ],
        "release_date": "2023-11-03",
        "revenue": 52000000,
        "runtime": 125,
        "spoken_languages": [
            {
                "english_name": "Japanese",
                "iso_639_1": "ja",
                "name": "日本語"
            },
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Postwar Japan. From zero to minus.",
        "title": "Godzilla Minus One",
        "video": false,
        "vote_average": 8.237,
        "vote_count": 116
    }

    const Cl = [Colors.C15D2BC, Colors.CE26CA5, Colors.C564CA3, Colors.C61C3F2];

    const getRandomColor = () => {
        let e = Math.floor(Math.random() * Cl.length);
        console.log("ee", e);
        return Cl[e];
    };
    //   return (
    //     <Video
    //       source={
    //         fromScreen == "Chat"
    //           ? { uri: data.attachments.attachment }
    //           : { uri: data.attachments.attachment }
    //       }
    //       pictureInPicture={true}
    //       onReadyForDisplay={this.onLoadEnd}
    //       ref={(ref) => {
    //         this.player = ref;
    //       }}
    //       controls={true} // Store reference
    //       onLoadStart={this.onLoadStart} // Callback when remote video is buffering
    //       onError={this.videoError}
    //       resizeMode={"contain"}
    //       disableVolume
    //       ignoreSilentSwitch={"ignore"}
    //       fullscreen={false}
    //       volume={1.0}
    //       disableBack
    //       style={{
    //         width: "100%",
    //         height: Platform.OS == "android" ? windowHeight - 200 : "80%",
    //       }}
    //     />
    //   );
    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    // source={require("../../kgm.jpg")}
                    style={{
                        height: HEIGHT_BASE_RATIO(440),
                        width: "100%",
                    }}
                >
                    <Image
                        // source={require("../../kgm.jpg")}
                        style={{
                            height: HEIGHT_BASE_RATIO(30),
                            width: WIDTH_BASE_RATIO(102),
                            tintColor: "red",
                            alignSelf: "center",
                            marginTop: HEIGHT_BASE_RATIO(217),
                        }}
                    />
                    <RegularText
                        padding={1}
                        label={"In theaters december 22, 2021"}
                        size={16}
                        fw={500}
                        color={Colors.CFFFFFF}
                        textAlign={"center"}
                        mt={HEIGHT_BASE_RATIO(10)}
                    />
                    <View style={{ marginTop: HEIGHT_BASE_RATIO(20) }}>
                        <Button label={"  Get Tickets"} clor={Colors.C61C3F2} />
                    </View>
                    <View style={{ marginTop: HEIGHT_BASE_RATIO(10) }}>
                        <Button
                            icn={"ll"}
                            label={"Watch Trailer"}
                            clor={"rgba(0, 0, 0, 0.6)"}
                        />
                    </View>
                </ImageBackground>
                <View
                    style={{
                        height: HEIGHT_BASE_RATIO(335),
                        width: WIDTH_BASE_RATIO(295),
                        backgroundColor: Colors.CFFFFFF,
                        alignSelf: "center",
                    }}
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
                            // keyExtractor={(item) => item.toString()} // Convert number to string for key
                            renderItem={({ item, index }) => {
                                console.log("item", getRandomColor());

                                return (
                                    <View
                                        style={{
                                            backgroundColor: getRandomColor(),
                                            height: HEIGHT_BASE_RATIO(24),
                                            paddingHorizontal: WIDTH_BASE_RATIO(10),
                                            marginRight: WIDTH_BASE_RATIO(4),
                                            borderRadius: HEIGHT_BASE_RATIO(16),
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text>{item.name}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View
                        style={{
                            height: HEIGHT_BASE_RATIO(1),
                            backgroundColor: Colors.C15D2BC + 40,
                            marginTop: HEIGHT_BASE_RATIO(15),
                        }}
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
                        As a collection of history's worst tyrants and criminal masterminds
                        gather to plot a war to wipe out millions, one man must race against
                        time to stop them. Discover the origins of the very first
                        independent intelligence agency in The King's Man. The Comic Book
                        “The Secret Service” by Mark Millar and Dave Gibbons.
                    </RegularText>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Design;
const Button = ({ icn, label, clor }) => {
    return (
        <TouchableOpacity
            style={{
                width: WIDTH_BASE_RATIO(243),
                height: HEIGHT_BASE_RATIO(50),
                borderRadius: HEIGHT_BASE_RATIO(10),
                backgroundColor: clor,
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.C61C3F2,
                borderWidth: HEIGHT_BASE_RATIO(1),
            }}
        >
            {icn && (
                <Image
                    // source={require("../../kgm.jpg")}
                    style={{
                        height: HEIGHT_BASE_RATIO(12),
                        width: WIDTH_BASE_RATIO(8),
                        marginRight: WIDTH_BASE_RATIO(5),
                    }}
                ></Image>
            )}
            <RegularText
                color={Colors.CFFFFFF}
                fw={600}
                size={HEIGHT_BASE_RATIO(14)}
                textAlign={"center"}
            >
                {label}
            </RegularText>
        </TouchableOpacity>
    );
};
