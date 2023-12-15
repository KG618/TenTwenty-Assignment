import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import { styles } from "./styles";
import { Strings } from "../../constant/string";
import images from "../../assets/images";
import RegularText from "../../typography/ regular-text";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Colors } from "../../constant/color";

const Header = (props) => {
    const [isSearsh, setisSearsh] = useState(false)
    const [showTotalSearh, setShowTotalSearh] = useState(false)

    return (
        <View style={styles.container}>
            {isSearsh ?
                <View style={styles.searchContainer}>

                    <Image
                        source={images.Search}
                        style={styles.searchImage}
                        resizeMode="contain"
                    />

                    <TextInput
                        style={styles.textInput}
                        value={props.value}
                        placeholder={Strings.searchPlaceholder}
                        placeholderTextColor={`${Colors.C202C43}30`}
                        onChangeText={(text) => props.onChangeText(text)}
                        onEndEditing={() => {
                            setShowTotalSearh(true)
                            setisSearsh(false)
                        }}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            onCloseSearh()
                            setisSearsh(false)
                        }}
                    >

                        <Image
                            source={images.Close}
                            style={styles.searchImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>

                : showTotalSearh ?
                    <View style={[styles.innerContainer, { justifyContent: "flex-start" }]}>
                        <TouchableOpacity
                            onPress={() => {

                                onCloseSearh()
                                setShowTotalSearh(false)
                            }}
                        >
                            <Image
                                source={images.UP}
                                style={styles.searchImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <RegularText ml={WIDTH_BASE_RATIO(10)} label={`${props.count} Results Found`} fw={'500'} />

                    </View>

                    : props.isNavigate ?
                        <View style={[styles.innerContainer, { justifyContent: "flex-start" }]}>

                            <TouchableOpacity
                                onPress={() => props.goBack()}
                            >
                                <Image
                                    source={images.UP}
                                    style={styles.upImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <View style={{ marginStart: WIDTH_BASE_RATIO(30), alignItems: "center" }}>
                                <RegularText label={props?.data?.title} fw={'500'} />
                                <RegularText label={`In theaters ${props?.data?.release_date}`} color={Colors.C61C3F2} fw={'500'} />
                            </View>
                        </View>
                        :
                        <View style={styles.innerContainer}>
                            <RegularText label={Strings.WATCH} fw={'500'} />
                            <TouchableOpacity
                                onPress={() => setisSearsh(true)}
                            >
                                <Image
                                    source={images.Search}
                                    style={styles.searchImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>

            }
        </View>
    )
}
export default Header