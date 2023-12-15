import React from "react";
import { StyleSheet } from "react-native"
import { Colors } from "../../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../../constant/sizeHelper";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.CF6F6FA

    },
    contentContainerStyle: {
        paddingTop: HEIGHT_BASE_RATIO(10),
        paddingBottom: HEIGHT_BASE_RATIO(30),
        alignSelf: "center"

    },
    divider: {
        height: HEIGHT_BASE_RATIO(1),
        width: '90%',
        backgroundColor: Colors.CDBDBDF,
        alignSelf: "center",
        marginTop: HEIGHT_BASE_RATIO(15)
    }
})