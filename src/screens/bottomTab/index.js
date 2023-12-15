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
                                    Colors.CFFFFFF :

                                    Colors.C827D88
                            }]}
                                numberOfLines={1}
                                adjustsFontSizeToFit={true}
                            >{Strings.DASHBOARD}</Text>

                        </>
                    ),// Labal
                    tabBarIcon: ({ focused }) => (

                        <Image
                            source={images.DashboardIcon}
                            style={[styles.tabIconSty,
                            {
                                tintColor: focused ?
                                    Colors.CFFFFFF :

                                    Colors.C827D88
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
                                        Colors.CFFFFFF :

                                        Colors.C827D88
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.WATCH}</Text>

                            </>
                        ), // Labal
                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={images.Watch}
                                style={[styles.tabIconSty,
                                {
                                    tintColor: focused ?
                                        Colors.CFFFFFF :

                                        Colors.C827D88
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
                                        Colors.CFFFFFF :

                                        Colors.C827D88
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.MEDIA}</Text>

                            </>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={images.LibraryIcon}
                                style={[styles.tabIconSty,
                                {

                                    tintColor:
                                        focused ?
                                            Colors.CFFFFFF :

                                            Colors.C827D88
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
                                        Colors.CFFFFFF :

                                        Colors.C827D88
                                }]}
                                    numberOfLines={1}
                                    adjustsFontSizeToFit={true}
                                >{Strings.MORE}</Text>

                            </>
                        ),
                        tabBarIcon: ({ focused }) => (

                            <Image
                                source={images.MoreIcon}
                                style={[styles.tabIconSty,
                                {
                                    tintColor: focused ?
                                        Colors.CFFFFFF :

                                        Colors.C827D88
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
        height: HEIGHT_BASE_RATIO(24),
        width: WIDTH_BASE_RATIO(24),
        resizeMode: "contain"

    },
    tabBarSty: {
        height: Platform.OS === 'ios' ? HEIGHT_BASE_RATIO(85) : HEIGHT_BASE_RATIO(75),
        justifyContent: "center",
        alignItems: "center",
        borderTopStartRadius: HEIGHT_BASE_RATIO(30),
        borderTopEndRadius: HEIGHT_BASE_RATIO(30),
        backgroundColor: Colors.C2E2739,
    },

    topTabBarLabel: {
        fontSize: HEIGHT_BASE_RATIO(10),
        color: Colors.black,
        fontFamily: "Inter-Bold",
        marginBottom: HEIGHT_BASE_RATIO(8)
    },

})