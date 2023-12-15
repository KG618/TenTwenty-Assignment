import React from "react";
import { StyleSheet } from "react-native"
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";

export const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        height: HEIGHT_BASE_RATIO(100),
        alignItems: "center",
        justifyContent: "space-between",

        width: WIDTH_BASE_RATIO(334),

    },

    imagStyle: {
        borderRadius: WIDTH_BASE_RATIO(10),
        height: HEIGHT_BASE_RATIO(100),
        width: WIDTH_BASE_RATIO(130),

        justifyContent: "flex-end"

    },
    listImage: {

        height: HEIGHT_BASE_RATIO(4),
        width: WIDTH_BASE_RATIO(20),
        resizeMode: "contain"

    }

})