import React from "react";
import { StyleSheet } from "react-native"
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";

export const styles = StyleSheet.create({

    container: {

        height: HEIGHT_BASE_RATIO(180),
        // justifyContent: "cover",

        width: WIDTH_BASE_RATIO(334),

    },

    imagStyle: {

        height: "100%",
        width: "100%",

        justifyContent: "flex-end"

    },

})