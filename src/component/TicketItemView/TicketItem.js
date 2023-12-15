import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground, FlatList } from "react-native"
import { styles } from "./styles";
import { Strings } from "../../constant/string";
import images from "../../assets/images";
import RegularText from "../../typography/ regular-text";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";
import { ImageBaseUrl } from "../../api/baseUrl";

const TicketItem = ({
    w = WIDTH_BASE_RATIO(5),
    h = HEIGHT_BASE_RATIO(5),
    color = "#A6A6A6"
}) => {

    return (

        <View style={{ height: h, width: w, }}>

            <View style={{
                borderRadius: WIDTH_BASE_RATIO(w / 10),
                height: HEIGHT_BASE_RATIO(h / 1.5),
                width: WIDTH_BASE_RATIO(w),
                backgroundColor: color
            }} />

            <View style={{
                alignSelf: "center",
                marginTop: HEIGHT_BASE_RATIO(h / 10),
                height: HEIGHT_BASE_RATIO(w / 3),
                width: WIDTH_BASE_RATIO(w / 1.2),
                backgroundColor: color,
                borderRadius: (w / 10)

            }}

            />
        </View >

    )
}
export default TicketItem