import React, { useContext } from "react";
import { Platform, Text } from "react-native";
import { FONT_SIZE } from "../constant/sizeHelper";
import { Colors } from "../constant/color";

const RegularText = ({
  lh = FONT_SIZE(20),
  mt,
  ml,
  mr,
  mb,
  label,
  style,
  fw,
  textAlign,
  numberOfLines = 1,
  size = FONT_SIZE(16),
  isUnderLine,
  color,
  ...props
}) => {
  return (
    <>
      <Text
        {...props}
        numberOfLines={numberOfLines}
        style={{
          fontSize: size,
          color: color,
          marginTop: mt,
          marginRight: mr,
          marginLeft: ml,
          marginBottom: mb,
          lineHeight: lh,
          fontWeight: fw,
          color: color ? color : Colors.C202C43,
          textAlign: textAlign,
          fontFamily: "Poppins-Regular",
          textDecorationLine: isUnderLine ? "underline" : "none",
          ...style,
        }}
      >
        {label}
        {props.children}
      </Text>
    </>
  );
};

export default RegularText;
