import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import { Image, Platform, StyleSheet, Text, View, } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { showCustomAlert } from "../../constant/Alert";
import { Colors } from "../../constant/color";
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../constant/sizeHelper";
import { Strings } from "../../constant/string";

import Dashboard from "./dashboard";
import Watch from "./watch";
import Media from "./media";
import More from "./more";
import images from "../../assets/images";

export const BottomTab = () => {
    //const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)

    const Tab = createBottomTabNavigator()

    return (
        <>
            <Tab.Navigator initialRouteName={Strings.WATCH}

                screenOptions={{
                    headerShown: false,
                    tabBarStyle: styles.tabBarSty,
                }}
                backBehavior="initialRoute"

            >

                <Tab.Screen options={{

                    tabBarLabel: ({ focused }) => (
                        <>
                            <Text style={[styles.topTabBarLabel, {
                                color: focused ?
                                    Colors.primaryColor :

                                    Colors.borderColor
                            }]}
                                numberOfLines={1}
                                adjustsFontSizeToFit={true}
                            >{Strings.DASHBOARD}</Text>
                            <View style={[styles.line, {
                                backgroundColor: focused ?
                                    Colors.primaryColor : Colors.white
                            }]} />
                        </>
                    ),// Labal
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={images.DashboardIcon}
                            style={[styles.tabIconSty,
                            {
                                tintColor: focused ?
                                    Colors.primaryColor :

                                    Colors.borderColor
                            }]}
                            resizeMode={"contain"}
                        />

                    ), //  icon
                }}
                    name={Strings.DASHBOARD}
                    component={Dashboard}
                    listeners={{
                        tabPress: e => {
                            // Prevent default action
                            e.preventDefault()
                        }
                    }
                    }
                />

                <Tab.Screen
                    options={{

                        tabBarLabel: ({ focused }) => (
                            <>
                                <Text style={[styles.topTabBarLabel, {
                                    color: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.WATCH}</Text>
                                <View style={[styles.line, {
                                    backgroundColor: focused ?
                                        Colors.primaryColor : Colors.white
                                }]} />
                            </>
                        ), // Labal
                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={images.Watch}
                                style={[styles.tabIconSty,
                                {
                                    tintColor: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                resizeMode={"contain"}
                            />
                        ), //  icon
                    }}
                    name={Strings.WATCH}
                    component={Watch}
                    listeners={{
                        tabPress: e => {

                            e.preventDefault()
                        }
                    }
                    }
                />

                <Tab.Screen

                    options={{

                        tabBarLabel: ({ focused }) => (
                            <>
                                <Text style={[styles.topTabBarLabel, {
                                    color: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.MEDIA}</Text>
                                <View style={[styles.line, {
                                    backgroundColor: focused ?
                                        Colors.primaryColor
                                        : Colors.white
                                }]} />
                            </>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={images.LibraryIcon}
                                style={[styles.tabIconSty,
                                {

                                    tintColor: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                resizeMode={"contain"}
                            />
                        ),
                    }}

                    name={Strings.MEDIA}
                    component={Media}
                    listeners={{

                        tabPress: e => {

                            // Prevent default action
                            e.preventDefault();

                        }

                    }
                    }
                />
                <Tab.Screen
                    options={{

                        tabBarLabel: ({ focused }) => (
                            <>
                                <Text style={[styles.topTabBarLabel, {
                                    color: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.MORE}</Text>
                                <View style={[styles.line, {
                                    backgroundColor: focused ?
                                        Colors.primaryColor : Colors.white
                                }]} />
                            </>
                        ),
                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={images.MoreIcon}
                                style={[styles.reTourIconStyle,
                                {
                                    tintColor: focused ?
                                        Colors.primaryColor :

                                        Colors.black
                                }]}
                                resizeMode={"contain"}
                            />
                        ),
                    }}
                    name={Strings.MORE}
                    component={More}
                    listeners={{
                        tabPress: e => {
                            // Prevent default action
                            e.preventDefault();
                        }
                    }
                    } />

            </Tab.Navigator>

        </>

    );
};

const styles = StyleSheet.create({
    tabIconSty: {
        height: HEIGHT_BASE_RATIO(70),
        width: WIDTH_BASE_RATIO(70),
        resizeMode: "contain"

    },
    tabBarSty: {
        height: Platform.OS === 'ios' ? HEIGHT_BASE_RATIO(160) : HEIGHT_BASE_RATIO(132),
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: HEIGHT_BASE_RATIO(30),
        borderTopEndRadius: HEIGHT_BASE_RATIO(30),
        borderWidth: 1,
        borderColor: Colors.borderColor,
    },
    reTourIconStyle: {
        height: HEIGHT_BASE_RATIO(40),
        width: WIDTH_BASE_RATIO(40),
        resizeMode: "contain"
    },
    topTabBarLabel: {
        fontSize: HEIGHT_BASE_RATIO(16),
        color: Colors.black,
        fontFamily: "Inter-Bold"
    },
    line: {
        marginVertical: HEIGHT_BASE_RATIO(5),
        height: HEIGHT_BASE_RATIO(5),
        backgroundColor: Colors.primaryColor,
        width: "80%"
    }
})