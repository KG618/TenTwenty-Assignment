import React from "react";
import { StyleSheet } from "react-native"
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImageContainer: {
        height: HEIGHT_BASE_RATIO(440),
        width: "100%",
        justifyContent: "flex-end",
        paddingBottom: HEIGHT_BASE_RATIO(20)
    },
    goBack: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: HEIGHT_BASE_RATIO(50)
    },
    genresContainer: {
        height: HEIGHT_BASE_RATIO(335),
        width: WIDTH_BASE_RATIO(295),
        backgroundColor: Colors.CFFFFFF,
        alignSelf: "center",
    },
    genresItem: {

        height: HEIGHT_BASE_RATIO(24),
        paddingHorizontal: WIDTH_BASE_RATIO(10),
        marginRight: WIDTH_BASE_RATIO(4),
        borderRadius: HEIGHT_BASE_RATIO(16),
        justifyContent: "center",
    },
    overview: {
        height: HEIGHT_BASE_RATIO(1),
        backgroundColor: Colors.C15D2BC + 40,
        marginTop: HEIGHT_BASE_RATIO(15),
    }

})