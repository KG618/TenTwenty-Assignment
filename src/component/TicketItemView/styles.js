import React from "react";
import { StyleSheet } from "react-native"
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";

export const styles = StyleSheet.create({

    container: {

        height: HEIGHT_BASE_RATIO(145),
        width: WIDTH_BASE_RATIO(300),
        backgroundColor: Colors.CFFFFFF

    },
    topcontainer: {
        height: HEIGHT_BASE_RATIO(170),
        alignSelf: "center",
        width: WIDTH_BASE_RATIO(200)
    },
    arcContainer: {
        height: HEIGHT_BASE_RATIO(30),
        alignSelf: "center",
        width: WIDTH_BASE_RATIO(200),
        overflow: "hidden",

    },
    arcStyle: {
        height: HEIGHT_BASE_RATIO(400),

        width: WIDTH_BASE_RATIO(400),

        backgroundColor: `${Colors.C61C3F2}08`,
        borderTopWidth: HEIGHT_BASE_RATIO(1),
        borderLeftWidth: HEIGHT_BASE_RATIO(1),
        borderRightWidth: HEIGHT_BASE_RATIO(1),
        borderColor: Colors.C61C3F2,

        borderRadius: 400 / 2,
        position: "absolute",
        left: WIDTH_BASE_RATIO(-100),
        top: 10

    },

    ticketContainer: {
        flex: 1,
        marginTop: HEIGHT_BASE_RATIO(10),
        justifyContent: "space-between",
        flexDirection: "row"
    },

    imagStyle: {

        height: "100%",
        width: "100%",

        justifyContent: "flex-end"

    },
    ticketItem: {

    }

})