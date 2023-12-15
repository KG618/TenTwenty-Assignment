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
                <View style={{ flexDirection: "row" }}>
                    <RegularText label={` ${index + 1}:${index + 1}`} />
                    <RegularText
                        ml={WIDTH_BASE_RATIO(10)}
                        label={`Cinetech + hall ${index + 1}`}
                        color={"#8F8F8F"}
                    />
                </View>
                <TicketItemView />
                <View
                    style={{ flexDirection: "row", marginTop: HEIGHT_BASE_RATIO(10) }}
                >
                    <RegularText label={`From`} color={"#8F8F8F"} />
                    <RegularText label={` 50$`} />
                    <RegularText label={` or`} color={"#8F8F8F"} />
                    <RegularText label={` 2500 bonus`} />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header isNavigate goBack={() => nav.goBack()} data={movieDetail} />
            <View style={{ paddingHorizontal: WIDTH_BASE_RATIO(26) }}>
                <RegularText
                    fw={500}
                    size={16}
                    mt={HEIGHT_BASE_RATIO(91)}
                    color={Colors.C202C43}
                >
                    Date
                </RegularText>
                <View
                    style={styles.innerContainer}
                >
                    <FlatList
                        data={["1", "2", "3", "4", "5"]}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            console.log("item", item);
                            return (
                                <View
                                    style={styles.dateContianer}
                                >
                                    <RegularText
                                        label={item + " Mar"}
                                        color={Colors.CFFFFFF}
                                        textAlign={"center"}
                                        fw={600}
                                        size={12}
                                    />
                                </View>
                            );
                        }}
                    />
                </View>
            </View>

            <FlatList
                style={{ flex: 1, marginTop: HEIGHT_BASE_RATIO(10) }}
                data={["1", "2", "3", "4", "5"]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItemHall}
            />
            <View
                style={{ flex: 0.3, marginTop: HEIGHT_BASE_RATIO(10) }}
            >
                <Button label={"Select seat"}
                    clor={Colors.C61C3F2}
                    onPress={() => nav.navigate(NavigationPath.TICKETPAYMENT)}
                />
            </View>

        </View>
    );
};
export default Design;
