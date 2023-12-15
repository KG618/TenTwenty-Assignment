/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useRef } from 'react';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Navigation from "./src/navigation";
import { persister, store } from "./src/redux/store";

import { View, Text, StyleSheet, } from 'react-native';
import { Colors } from './src/constant/color';

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>

        <Navigation />
      </PersistGate>

    </Provider>

  );
};

const styles = StyleSheet.create({
  alertView: {
    position: "absolute",
    //flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.borderColor,
    // paddingHorizontal: WIDTH_BASE_RATIO(27)
  }
})

export default App;
