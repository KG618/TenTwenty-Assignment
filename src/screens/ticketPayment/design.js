import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import Header from "../../component/header";
import RegularText from "../../typography/ regular-text";
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import TicketItemView from "../../component/TicketItemView";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketItem from "../../component/TicketItemView/TicketItem";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Button from "../../component/button";
import { NavigationPath } from "../../constant/navigationRoute";

const Design = () => {
    const nav = useNavigation()
    const { movieDetail } = useSelector((state) => state.watch);
    const renderItemHall = ({ index }) => {
        return (
            <View style={{ margin: 10 }}>

                <TicketItemView />
            </View>
        );
    };
    const status = [
        {
            name: "selected",
            color: Colors.CCD9D0F,
        },
        {
            name: "Not available",
            color: Colors.CF6F6FA,
        },
        {
            name: "VIP (150$)",
            color: Colors.C564CA3,
        },
        {
            name: "Regular (50 $)",
            color: Colors.C61C3F2,
        },
    ];
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header isNavigate goBack={() => nav.goBack()} data={movieDetail} />

            <FlatList
                style={{ flex: 1, marginTop: HEIGHT_BASE_RATIO(10) }}
                data={["1"]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItemHall}
            />

            <View style={{ height: HEIGHT_BASE_RATIO(260) }}>
                <View
                    style={{
                        height: HEIGHT_BASE_RATIO(5),
                        width: WIDTH_BASE_RATIO(334),
                        backgroundColor: Colors.C202C43 + "30",
                        alignSelf: "center",
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: Colors.CFFFFFF,
                        marginTop: HEIGHT_BASE_RATIO(10),
                        paddingHorizontal: WIDTH_BASE_RATIO(20)
                    }}
                >
                    <View
                        style={{
                            // paddingHorizontal: WIDTH_BASE_RATIO(26),
                            width: WIDTH_BASE_RATIO(330),
                            marginTop: HEIGHT_BASE_RATIO(20),
                        }}
                    >
                        <FlatList
                            contentContainerStyle={{
                                height: HEIGHT_BASE_RATIO(53),
                                justifyContent: "space-between",
                            }}
                            //   horizontal={true}
                            columnWrapperStyle={{
                                justifyContent: "space-between",
                            }}
                            numColumns={2}
                            data={status}
                            renderItem={({ item }) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <TicketItem
                                            w={WIDTH_BASE_RATIO(17)}
                                            h={HEIGHT_BASE_RATIO(17)}
                                            color={item.color}
                                        />
                                        <RegularText
                                            size={12}
                                            fw={500}
                                            color={Colors.C202C43 + "50"}
                                            paddingLeft={WIDTH_BASE_RATIO(10)}
                                        >
                                            {item.name}
                                        </RegularText>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View
                        style={{
                            //  flex: 1,
                            height: HEIGHT_BASE_RATIO(40),
                            width: WIDTH_BASE_RATIO(97),
                            backgroundColor: "#A6A6A610",
                            borderRadius: HEIGHT_BASE_RATIO(10),
                            justifyContent: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: HEIGHT_BASE_RATIO(10),

                        }}
                    >
                        <RegularText textAlign={"center"} size={14} fw={400}>
                            4 / <RegularText size={10}> 3 row</RegularText>
                        </RegularText>
                        <Text
                            style={{
                                color: Colors.C564CA3,
                                fontSize: 30,
                            }}
                        >
                            &#10799;
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: HEIGHT_BASE_RATIO(15) }}>
                        <View style={{
                            height: HEIGHT_BASE_RATIO(50), width: WIDTH_BASE_RATIO(105),
                            backgroundColor: "#A6A6A610",
                            justifyContent: "center",
                            alignItems: "center"
                        }} >
                            <RegularText label={"Total price"} />
                            <RegularText label={"$50"} mt={HEIGHT_BASE_RATIO(5)} fw={700} />
                        </View>
                        <Button label={"Proceed to pay"}
                            clor={Colors.C61C3F2}
                            w={WIDTH_BASE_RATIO(210)}
                            onPress={() => nav.navigate(NavigationPath.MAIN)}
                        />
                    </View>
                </View>

            </View>

        </View>
    );
};
export default Design;
