import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground, FlatList } from "react-native"
import { styles } from "./styles";
import { Strings } from "../../constant/string";
import images from "../../assets/images";
import RegularText from "../../typography/ regular-text";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";
import { ImageBaseUrl } from "../../api/baseUrl";
import TicketItem from "./TicketItem";

const TicketItemView = (props) => {
    console.log("item", props.item)
    const [isSearsh, setisSearsh] = useState(false)
    const colors = ["#CD9D0F", "#A6A6A6", "#61C3F2", "#564CA3"];

    const generateRandomColorArray = (colors, count) => {
        const randomColors = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            randomColors.push(colors[randomIndex]);
        }
        return randomColors;
    };

    const randomColorArray = generateRandomColorArray(colors, 30);
    const randomColorArray2 = generateRandomColorArray(colors, 140);
    const renderItem = ({ item }) => {
        return (

            <View
                style={{ margin: HEIGHT_BASE_RATIO(3) }}
            >
                <TicketItem
                    w={3}
                    h={3}
                    color={item}
                />
            </View>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.topcontainer}>
                <View style={styles.arcContainer}>
                    <View style={styles.arcStyle} />

                </View>
                <View style={styles.ticketContainer}>
                    <FlatList

                        numColumns={3}
                        data={randomColorArray}
                        contentContainerStyle={styles.contentContainerStyle}
                        VerticalScrollIndicator={false}
                        renderItem={renderItem}
                    // keyExtractor={(item, index) => "SC" + item.id}
                    //key={(item, index) => "SC" + item.id}
                    />
                    <FlatList

                        numColumns={14}
                        data={randomColorArray2}
                        contentContainerStyle={styles.contentContainerStyle}
                        VerticalScrollIndicator={false}
                        renderItem={renderItem}
                    // keyExtractor={(item, index) => "SC" + item.id}
                    //key={(item, index) => "SC" + item.id}
                    />
                    <FlatList

                        numColumns={3}
                        data={randomColorArray}
                        contentContainerStyle={styles.contentContainerStyle}
                        VerticalScrollIndicator={false}
                        renderItem={renderItem}
                    // keyExtractor={(item, index) => "SC" + item.id}
                    //key={(item, index) => "SC" + item.id}
                    />
                </View>
            </View>

        </View >

    )
}
export default TicketItemView