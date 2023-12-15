import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from "react-native"
import { styles } from "./styles";
import { Strings } from "../../constant/string";
import images from "../../assets/images";
import RegularText from "../../typography/ regular-text";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";
import { ImageBaseUrl } from "../../api/baseUrl";

const SearchItem = (props) => {
    console.log("item", props.item)
    const [isSearsh, setisSearsh] = useState(false)

    return (

        <TouchableOpacity
            style={styles.container}
            onPress={() => props.onPress()}
        >

            <Image
                source={props.item.backdrop_path ? { uri: `${ImageBaseUrl}${props.item.backdrop_path}` } : images.NoImage}
                style={styles.imagStyle}

                resizeMode=""
            />
            <View style={{ width: WIDTH_BASE_RATIO(150) }}>
                <RegularText
                    ml={HEIGHT_BASE_RATIO(10)}
                    mb={HEIGHT_BASE_RATIO(10)}
                    fw={WIDTH_BASE_RATIO(500)}

                    lh={HEIGHT_BASE_RATIO(22)}
                    label={props.item.original_title}
                />
                <RegularText
                    ml={HEIGHT_BASE_RATIO(10)}
                    mb={HEIGHT_BASE_RATIO(10)}
                    fw={WIDTH_BASE_RATIO(500)}

                    lh={HEIGHT_BASE_RATIO(22)}
                    label={props.item.title}
                    color={Colors.CDBDBDF}
                />
            </View>
            <Image
                source={images.ListIcon}
                style={styles.listImage}

                resizeMode=""
            />
        </TouchableOpacity>

    )
}
export default SearchItem