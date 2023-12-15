import { Image, TouchableOpacity } from "react-native";
import RegularText from "../../typography/ regular-text";

import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import images from "../../assets/images";
import { Colors } from "../../constant/color";

const Button = ({ icn, label, clor, onPress, w = WIDTH_BASE_RATIO(243) }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{

                width: w,
                height: HEIGHT_BASE_RATIO(50),
                borderRadius: HEIGHT_BASE_RATIO(10),
                backgroundColor: clor,
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
                borderColor: Colors.C61C3F2,
                borderWidth: HEIGHT_BASE_RATIO(1),
            }}
        >
            {icn && (
                <Image
                    source={images.PlayIcon}
                    style={{
                        height: HEIGHT_BASE_RATIO(12),
                        width: WIDTH_BASE_RATIO(8),
                        marginRight: WIDTH_BASE_RATIO(5),
                    }}
                ></Image>
            )}
            <RegularText
                color={Colors.CFFFFFF}
                fw={600}
                size={HEIGHT_BASE_RATIO(14)}
                textAlign={"center"}
            >
                {label}
            </RegularText>
        </TouchableOpacity>
    );
};

export default Button