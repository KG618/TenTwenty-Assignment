import React from "react";
import { StyleSheet } from "react-native"
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: "center",
        //alignItems: "center"
    },
    innerContainer: {
        height: HEIGHT_BASE_RATIO(35),
        justifyContent: "center",
        alignItems: "center",
        marginTop: HEIGHT_BASE_RATIO(15),
    },
    dateContianer: {

        height: HEIGHT_BASE_RATIO(32),
        width: WIDTH_BASE_RATIO(67),
        backgroundColor: Colors.C61C3F2,
        borderRadius: HEIGHT_BASE_RATIO(10),
        marginRight: WIDTH_BASE_RATIO(15),
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.C61C3F2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    }
})