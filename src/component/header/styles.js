import React from "react";
import { StyleSheet } from "react-native"
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.CFFFFFF,
        height: HEIGHT_BASE_RATIO(90),
        justifyContent: "center",
        paddingHorizontal: WIDTH_BASE_RATIO(20)
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchImage: {

        height: HEIGHT_BASE_RATIO(22),
        justifyContent: "center",
        width: WIDTH_BASE_RATIO(22)
    },
    upImage: {

        height: HEIGHT_BASE_RATIO(30),
        justifyContent: "center",
        width: WIDTH_BASE_RATIO(30)
    },
    searchContainer: {

        height: HEIGHT_BASE_RATIO(52),
        width: WIDTH_BASE_RATIO(334),
        backgroundColor: Colors.CF2F2F6,
        borderRadius: WIDTH_BASE_RATIO(30),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: WIDTH_BASE_RATIO(20)

    },
    textInput: {
        width: WIDTH_BASE_RATIO(230),
        fontSize: HEIGHT_BASE_RATIO(16),
        color: Colors.C202C43,

    }
})