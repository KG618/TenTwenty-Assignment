import React from "react";
import { View, Text } from "react-native"
import { styles } from "./styles";
import Header from "../../component/header";

const Design = () => {
    return (
        <View style={styles.container}
        >
            <Header
                isNavigate
            />

        </View>
    )
}
export default Design