import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from "react-native"
import { styles } from "./styles";
import { Strings } from "../../constant/string";
import images from "../../assets/images";
import RegularText from "../../typography/ regular-text";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";
import { ImageBaseUrl } from "../../api/baseUrl";

const WatchMovieListItem = (props) => {
    console.log("item", props.item)
    const [isSearsh, setisSearsh] = useState(false)

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={() => props.onPress()}
        >

            <ImageBackground
                source={props.item.backdrop_path ? { uri: `${ImageBaseUrl}${props.item.backdrop_path}` } : images.NoImage}
                style={styles.imagStyle}
                imageStyle={{ borderRadius: WIDTH_BASE_RATIO(20) }}
                resizeMode="cover"
            >
                <RegularText
                    ml={HEIGHT_BASE_RATIO(10)}
                    mb={HEIGHT_BASE_RATIO(10)}
                    fw={WIDTH_BASE_RATIO(500)}
                    size={HEIGHT_BASE_RATIO(18)}
                    lh={HEIGHT_BASE_RATIO(22)}
                    label={props.item.title}
                    color={'white'} />

            </ImageBackground>
        </TouchableOpacity>

    )
}
export default WatchMovieListItem